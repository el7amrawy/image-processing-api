import express from "express";
import sharp from "sharp";
import path from "path";
import fs from "fs";
//
const routes = express.Router();
const fsPromises = fs.promises;
const appRoot = path.resolve();
/* ======================================================== */
async function resizeImage(imageName: string, width: number, height: number) {
  if (!fs.existsSync(path.join("assets", "resized"))) {
    fsPromises.mkdir(path.join("assets", "resized"));
  }
  const outPath = path.join(
    "assets",
    "resized",
    `resized-w${width}-h${height}-${imageName}`
  );
  if (fs.existsSync(outPath)) {
    return path.join(appRoot, outPath);
  }
  await sharp(path.join("assets", "full", imageName))
    .resize(height, width)
    .toFile(outPath)
    .then((info) => {
      console.log("Image resized successfully\n", info);
    })
    .catch((err) => {
      throw err;
    });
  return path.join(appRoot, outPath);
}
/* ======================================================== */
routes.get("/", (req, res) => {
  if (
    !fs.existsSync(req.query.imgName as unknown as string) ||
    req.query.imgName == undefined ||
    req.query.imgName?.length == 0 ||
    req.query.width?.length == 0 ||
    req.query.height?.length == 0
  ) {
    res.send("wrong input");
  } else {
    const imgName = req.query.imgName as unknown as string;
    const w = parseInt(req.query.width as unknown as string);
    const h = parseInt(req.query.height as unknown as string);
    resizeImage(imgName, w, h).then((imgPath) => {
      res.sendFile(imgPath);
    });
  }
});
//
export { routes, resizeImage };
