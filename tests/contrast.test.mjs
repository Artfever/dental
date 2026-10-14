import test from "node:test";
import assert from "node:assert/strict";

function luminance(hex) {
  const rgb = hex.match(/[a-f\d]{2}/gi).map(value => parseInt(value, 16) / 255).map(value => value <= .04045 ? value / 12.92 : ((value + .055) / 1.055) ** 2.4);
  return rgb[0] * .2126 + rgb[1] * .7152 + rgb[2] * .0722;
}
test("approved text pairs meet WCAG AA contrast", () => {
  for (const [foreground, background] of [["#242824", "#F7F5EE"], ["#565E57", "#F7F5EE"], ["#344337", "#FFFEFA"], ["#344337", "#E9E9E0"], ["#A84F38", "#F7F5EE"], ["#565E57", "#E9E9E0"], ["#DCE3D7", "#242824"]]) {
    const values = [luminance(foreground), luminance(background)].sort((a,b) => b-a);
    const ratio = (values[0] + .05) / (values[1] + .05);
    assert.ok(ratio >= 4.5, `${foreground} on ${background}: ${ratio.toFixed(2)}`);
  }
});
