import getBuffer from './buffer.js';

export default class ArrayBufferConverter {
  constructor() {
    this.buffer = getBuffer();
  }

  load(buffer) {
    this.buffer = buffer;
    /* const bufferView = new Uint16Array(buffer);
    const bufferViewInner = new Uint16Array(this.buffer);
    for (let i = 0; i < bufferViewInner.length; i++) {
      bufferViewInner[i] = bufferView[i];
    } */
  }

  toString() {
    const bufferView = new Uint16Array(this.buffer);
    const str = String.fromCharCode(...bufferView);
    return str;
  }
}

const buf = new ArrayBufferConverter();
console.log(buf.toString());
