import ArrayBufferConverter from '../buffer-converter.js';

test('test toString initial buffer', () => {
  const buf = new ArrayBufferConverter();
  const str = buf.toString();
  expect(str).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});

test('test toString after load buffer', () => {
  const buf = new ArrayBufferConverter();
  const data = 'Hey!';
  const bufToLoad = new ArrayBuffer(data.length * 2);
  const bufferView = new Uint16Array(bufToLoad);
  for (let i = 0; i < data.length; i++) {
    bufferView[i] = data.charCodeAt(i);
  }
  buf.load(bufToLoad);
  const str = buf.toString();
  expect(str).toBe('Hey!');
});
