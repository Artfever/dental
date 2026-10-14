import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const routes = ["/", "/services", "/about", "/contact", "/privacy"];

test("all routes load, stay accessible, and have working local links and assets", async ({ page, request }) => {
  const errors: string[] = [];
  page.on("pageerror", error => errors.push(error.message));
  page.on("console", message => { if (message.type() === "error") errors.push(message.text()); });
  const links = new Set<string>();
  for (const route of routes) {
    const response = await page.goto(route);
    expect(response?.status()).toBe(200);
    await expect(page.locator("h1")).toHaveCount(1);
    await page.evaluate(() => document.fonts.ready);
    const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa"]).analyze();
    expect(results.violations, JSON.stringify(results.violations.map(v => ({ id: v.id, nodes: v.nodes.map(n => n.target) })))).toEqual([]);
    for (const image of await page.locator("img").all()) {
      await expect(image).toHaveJSProperty("complete", true);
      expect(await image.evaluate(node => (node as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);
    }
    for (const href of await page.locator("a[href]").evaluateAll(nodes => nodes.map(node => node.getAttribute("href")!))) {
      if (href.startsWith("/")) links.add(href);
      if (href.startsWith("https://wa.me/")) {
        const url = new URL(href);
        expect(url.pathname).toBe("/923025188884");
        expect(url.searchParams.get("text")).toContain("enquire");
      }
      if (href.startsWith("tel:")) expect(href).toBe("tel:+92514938161");
      if (href.includes("google.com/maps")) expect(href).toContain("api=1&query=Nayyar+");
    }
  }
  await page.setViewportSize({ width: 390, height: 844 });
  for (const route of routes) {
    await page.goto(route);
    const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa"]).analyze();
    expect(results.violations, `Mobile accessibility: ${route}`).toEqual([]);
  }
  for (const href of links) {
    const response = await request.get(href.split("#")[0]);
    expect(response.status(), href).toBe(200);
    if (href.includes("#")) {
      await page.goto(href);
      await expect(page.locator(`[id="${href.split("#")[1]}"]`)).toBeAttached();
    }
  }
  expect(errors).toEqual([]);
});

test("responsive layouts have no horizontal overflow at 320–1440px", async ({ page }) => {
  for (const width of [320, 390, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    for (const route of routes) {
      await page.goto(route);
      await page.evaluate(() => document.fonts.ready);
      const dimensions = await page.evaluate(() => ({ scroll: document.documentElement.scrollWidth, viewport: innerWidth }));
      expect(dimensions.scroll, `${route} at ${width}px`).toBeLessThanOrEqual(dimensions.viewport);
    }
  }
});

test("mobile menu traps focus, closes with Escape, and navigates", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const toggle = page.getByRole("button", { name: "Open navigation" });
  await toggle.click();
  const dialog = page.getByRole("dialog", { name: "Navigation" });
  await expect(dialog).toBeVisible();
  await expect(toggle).toHaveAttribute("aria-expanded", "true");
  const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa"]).analyze();
  expect(results.violations).toEqual([]);
  for (let i = 0; i < 10; i++) {
    await page.keyboard.press("Tab");
    expect(await page.evaluate(() => document.querySelector("dialog")?.contains(document.activeElement))).toBe(true);
  }
  await page.keyboard.press("Escape");
  await expect(dialog).not.toBeVisible();
  await expect(toggle).toBeFocused();
  await toggle.click();
  await dialog.getByRole("link", { name: "Dental care" }).click();
  await expect(page).toHaveURL(/\/services$/);
  await expect(dialog).not.toBeVisible();
});

test("FAQ works with a keyboard and enquiry composer creates a real outbound message", async ({ page }) => {
  await page.goto("/");
  const question = page.locator("summary").filter({ hasText: "Is my appointment confirmed" });
  await question.focus();
  await page.keyboard.press("Enter");
  await expect(question.locator("..")).toHaveAttribute("open", "");
  await expect(question.locator("..")).toContainText("does not reserve an appointment");
  await page.goto("/contact?care=dental-implants#enquiry");
  await expect(page.getByLabel("Care category")).toHaveValue("dental-implants");
  const outbound = page.getByRole("link", { name: "Continue to WhatsApp" });
  let url = new URL((await outbound.getAttribute("href"))!);
  expect(url.searchParams.get("text")).toContain("dental implants is currently available");
  await page.getByLabel("I’d like to ask about").selectOption("hours");
  url = new URL((await outbound.getAttribute("href"))!);
  expect(url.searchParams.get("text")).toContain("opening hours");
  expect(url.searchParams.get("text")).not.toContain("dental implants");
  await expect(page.locator("input, textarea")).toHaveCount(0);
  await expect(page.locator("#enquiry")).toContainText("Nothing is sent by this website");
});

test("reduced motion and no-JavaScript content remain usable", async ({ browser }) => {
  const context = await browser.newContext({ reducedMotion: "reduce" });
  const page = await context.newPage();
  await page.goto("/");
  const duration = await page.locator(".tooth-contour").first().evaluate(node => getComputedStyle(node).animationName);
  expect(duration).toBe("none");
  await expect(page.locator("h1")).toBeVisible();
  await context.close();
  const noJs = await browser.newContext({ javaScriptEnabled: false });
  const staticPage = await noJs.newPage();
  for (const route of routes) {
    await staticPage.goto(route);
    await expect(staticPage.locator("h1")).toBeVisible();
    await expect(staticPage.locator("main")).toContainText(/care|information|concept/i);
  }
  await noJs.close();
});

test("404, demo noindex, sitemap, social image and screenshots", async ({ page, request }) => {
  const missing = await request.get("/this-page-does-not-exist");
  expect(missing.status()).toBe(404);
  const robots = await request.get("/robots.txt");
  expect(await robots.text()).toContain("Disallow: /");
  const sitemap = await request.get("/sitemap.xml");
  expect(sitemap.status()).toBe(200);
  const xml = await sitemap.text();
  for (const route of routes) expect(xml).toContain(`http://localhost:3000${route}</loc>`);
  const og = await request.get("/opengraph-image");
  expect(og.status()).toBe(200);
  expect(og.headers()["content-type"]).toContain("image/png");
  await page.goto("/");
  const structured = JSON.parse((await page.locator('script[type="application/ld+json"]').textContent())!);
  expect(structured.name).toBe("Nayyar Dental Associates");
  expect(structured).not.toHaveProperty("aggregateRating");
  expect(structured).not.toHaveProperty("openingHours");
  for (const [label, width, height] of [["desktop", 1440, 1000], ["tablet", 768, 1024], ["mobile", 390, 844]] as const) {
    await page.setViewportSize({ width, height });
    await page.goto("/");
    await page.evaluate(() => document.fonts.ready);
    await page.screenshot({ path: `test-results/home-${label}.png`, fullPage: true, animations: "disabled" });
    await page.screenshot({ path: `test-results/hero-${label}.png`, animations: "disabled" });
  }
  await page.goto("/contact");
  await page.screenshot({ path: "test-results/contact-mobile.png", fullPage: true, animations: "disabled" });
  for (const route of ["services", "about", "privacy"]) {
    await page.goto(`/${route}`);
    await page.screenshot({ path: `test-results/${route}-mobile.png`, fullPage: true, animations: "disabled" });
    await page.setViewportSize({ width: 1440, height: 1000 });
    await page.screenshot({ path: `test-results/${route}-desktop.png`, fullPage: true, animations: "disabled" });
    await page.setViewportSize({ width: 390, height: 844 });
  }
});
