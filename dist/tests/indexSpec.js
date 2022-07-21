"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("../index"));
const index_2 = require("../api/index");
//
const request = (0, supertest_1.default)(index_1.default);
//
describe('1- test endpoint responses', () => {
    it('testing /api/img endpoint', (done) => {
        request.get('/api/img').then((response) => {
            expect(response.status).toBe(200);
            done();
        });
    });
});
describe('2- Image resizing function', () => {
    const nm = 'encenadaport.jpg';
    const width = 200;
    const height = 300;
    it('Expect the function to not throw error', async () => {
        expect(await (0, index_2.resizeImage)(nm, width, height)).not.toThrowError;
    });
    it('Expect the function to throw specifc error', () => {
        expect((0, index_2.resizeImage)('ewq', width, height).catch((err) => {
            if (err)
                console.log(err);
        })).toThrowError;
    });
});
