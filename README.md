# Image Processing API

Image processing API that resizes images

## Setting up the server

insatall

```bash
npm i
```

build

```bash
npm run build
```

runnig server

```bash
node ./dist/.
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

## linting

```bash
  npm run lint
```

## Dependencies

- express
- sharp
