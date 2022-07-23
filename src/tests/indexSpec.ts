import app from "..";
import supertest from "supertest";
//
const request = supertest(app);
//
describe("test endpoint responses", () => {
  const w = 350,
    h = 250,
    name = "fjord.jpg";
  //
  it("testing /api/img endpoint", (done) => {
    request
      .get(`/api/img?imgName=${name}&width=${w}&height=${h}`)
      .then((response) => {
        expect(response.status).toBe(200);
      });
    done();
  });
  it("expect server to response with an image", (done) => {
    request
      .get(`/api/img?imgName=${name}&width=${w}&height=${h}`)
      .then((response) => {
        expect(response.type).toEqual("image/jpeg");
      });
    done();
  });
  it("expect server to respond with an alert", (done) => {
    request
      .get(`/api/img?imgName=${name}&width=-1&height=${h}`)
      .then((response) => {
        expect(response.text).toEqual(
          "<script>alert('please enter a positive width')</script>"
        );
      });
    done();
  });
});
