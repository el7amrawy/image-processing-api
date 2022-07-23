import sharp from "sharp";
import path from "path";
import fs from "fs";
const fsPromises = fs.promises;
const appRoot = path.resolve();
/**
 * =====================================
 */
const resizeImage = async (
  imageName: string,
  width: number,
  height: number
): Promise<string> => {
  const outDir = path.join(appRoot, "assets", "resized"),
    inPath = path.join(appRoot, "assets", "full", imageName),
    outPath = path.join(outDir, `resized-w${width}-h${height}-${imageName}`);
  try {
    if (!fs.existsSync(outDir)) {
      fsPromises.mkdir(outDir);
    }
    if (fs.existsSync(outPath)) {
      return outPath;
    } else {
      await sharp(inPath)
        .resize(width, height)
        .toFile(outPath)
        .then((info) => {
          console.log("image resized successfully\n", info);
        })
        .catch((err) => {
          throw err;
        });
    }
  } catch (err) {
    if (err) console.log(err);
  }
  return outPath;
};
export default resizeImage;
