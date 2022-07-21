"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resizeImage = exports.routes = void 0;
const express_1 = __importDefault(require("express"));
const sharp_1 = __importDefault(require("sharp"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
//
const routes = express_1.default.Router();
exports.routes = routes;
const fsPromises = fs_1.default.promises;
const appRoot = path_1.default.resolve();
/* ======================================================== */
async function resizeImage(imageName, width, height) {
    if (!fs_1.default.existsSync(path_1.default.join('assets', 'resized'))) {
        fsPromises.mkdir(path_1.default.join('assets', 'resized'));
    }
    const outPath = path_1.default.join('assets', 'resized', `resized-w${width}-h${height}-${imageName}`);
    if (fs_1.default.existsSync(outPath)) {
        return path_1.default.join(appRoot, outPath);
    }
    await (0, sharp_1.default)(path_1.default.join('assets', 'full', imageName))
        .resize(height, width)
        .toFile(outPath)
        .then((info) => {
        console.log('Image resized successfully\n', info);
    })
        .catch((err) => {
        throw err;
    });
    return path_1.default.join(appRoot, outPath);
}
exports.resizeImage = resizeImage;
/* ======================================================== */
routes.get('/', (req, res) => {
    if (req.query.imgName == undefined ||
        req.query.imgName?.length == 0 ||
        req.query.width?.length == 0 ||
        req.query.height?.length == 0) {
        res.send('wrong input');
    }
    else {
        const imgName = req.query.imgName;
        const w = parseInt(req.query.width);
        const h = parseInt(req.query.height);
        resizeImage(imgName, w, h).then((imgPath) => {
            res.sendFile(imgPath);
        });
    }
});
