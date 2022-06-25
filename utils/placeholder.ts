const keyString =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

const triplet = (v1: number, v2: number, v3: number) =>
  keyString.charAt(v1 >> 2) +
  keyString.charAt(((v1 & 3) << 4) | (v2 >> 4)) +
  keyString.charAt(((v2 & 15) << 2) | (v3 >> 6)) +
  keyString.charAt(v3 & 63);

export const rgbDataURL = (r: number, g: number, b: number) =>
  `data:image/gif;base64,R0lGODlhAQABAPAA${
    triplet(0, r, g) + triplet(b, 255, 255)
  }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;
