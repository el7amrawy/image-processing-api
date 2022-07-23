import express from "express";
import path from "path";
import fs from "fs";
import resizeImage from "../utilities/resizeImage";
//
const routes = express.Router();
const appRoot = path.resolve();
/* ======================================================== */
routes.get("/", (req, res) => {
  if (req.query.imgName == undefined) {
    res.send(`<script>alert('please pass the image name')</script>`);
  } else if (
    !fs.existsSync(
      path.join(
        appRoot,
        "assets",
        "full",
        req.query.imgName as unknown as string
      )
    )
  ) {
    res.send(`<script>alert("file doesn't exit")</script>`);
  } else if (req.query.width == undefined || req.query.width == "") {
    res.send(`<script>alert('please enter the width')</script>`);
  } else if (isNaN(parseInt(req.query.width as unknown as string))) {
    res.send(`<script>alert('please enter a valid width number')</script>`);
  } else if (parseInt(req.query.width as unknown as string) <= 0) {
    res.send(`<script>alert('please enter a positive width')</script>`);
  } else if (req.query.height == undefined || req.query.height == "") {
    res.send(`<script>alert('please enter the height')</script>`);
  } else if (isNaN(parseInt(req.query.height as unknown as string))) {
    res.send(`<script>alert('please enter a valid height')</script>`);
  } else if (parseInt(req.query.height as unknown as string) <= 0) {
    res.send(`<script>alert('please enter a positive height')</script>`);
  } else {
    resizeImage(
      req.query.imgName as unknown as string,
      parseInt(req.query.width as unknown as string),
      parseInt(req.query.height as unknown as string)
    )
      .then((path) => {
        res.sendFile(path);
      })
      .catch((err) => {
        if (err) {
          console.log(err);
          res.send(err);
        }
      });
  }
});
//
export default routes;
