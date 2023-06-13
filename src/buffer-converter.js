import getBuffer from './buffer.js';

export default class ArrayBufferConverter {
  constructor() {
    this.buffer = getBuffer();
    this.str = '';
  }

  load(buffer) {
    const bufferView = new Uint16Array(buffer);
    this.str = String.fromCharCode(...bufferView);
    return this.str;
  }

  toString() {
    const bufferView = new Uint16Array(this.buffer);
    const str = String.fromCharCode(...bufferView);
    return str;
  }
}

const buf = new ArrayBufferConverter();
console.log(buf.toString());
