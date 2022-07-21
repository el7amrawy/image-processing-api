# Image Processing API

Image processing API that resizes images

## installation & starting the server

```bash
npm i
```

```bash
npm start
```

## How to use

Pass the name of the image , width & height as query strings in the following url

### List of images:

- encenadaport
- fjord
- icelandwaterfall
- palmtunnel
- santamonica

#### URL :

```
http://localhost:3000/api/img?imgName=[name of the image].jpg&width=[width]&height=[height]
```

## Running Tests

```bash
  npm run test
```

## Dependencies

- express
- jasmine
- jasmine-spec-reporter
- nodemon
- sharp
- supertest
