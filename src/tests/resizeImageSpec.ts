import path from "path";
import resizeImage from "../utilities/resizeImage";
//

describe("Image resizing tests", () => {
  const w = 350,
    h = 250,
    name = "icelandwaterfall.jpg",
    outPath = path.join(
      path.resolve(),
      "assets",
      "resized",
      `resized-w${w}-h${h}-${name}`
    );
  it("Expect the function to not throw error", async () => {
    expect(await resizeImage(name, w, h)).not.toThrowError;
  });
  it("Expect the function to throw error", async () => {
    expect(await resizeImage("kllkkl", w, h)).toThrowError;
  });
  it("Expect the function to return resized image path", async () => {
    expect(await resizeImage(name, w, h)).toBe(outPath);
  });
});
