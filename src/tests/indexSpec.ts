import supertest from 'supertest';
import app from '../index';
import { resizeImage } from '../api/index';
//
const request = supertest(app);
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
    expect(await resizeImage(nm, width, height)).not.toThrowError;
  });
  it('Expect the function to throw specifc error', () => {
    expect(
      resizeImage('ewq', width, height).catch((err) => {
        if (err) console.log(err);
      })
    ).toThrowError;
  });
});
