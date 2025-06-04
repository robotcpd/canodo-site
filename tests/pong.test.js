const { JSDOM } = require('jsdom');
const path = require('path');

describe('Play Pong button', () => {
  let dom;
  let document;
  beforeAll(async () => {
    dom = await JSDOM.fromFile(path.join(__dirname, '../index.html'), {
      runScripts: 'dangerously',
      resources: 'usable'
    });

    await new Promise(resolve => {
      dom.window.addEventListener('load', resolve);
    });

    document = dom.window.document;
  });

  test('clicking Play Pong hides button and shows game', () => {
    const playBtn = document.getElementById('playBtn');
    const pongContainer = document.getElementById('pong-container');

    const getDisplay = el => dom.window.getComputedStyle(el).display;

    expect(getDisplay(playBtn)).not.toBe('none');
    expect(getDisplay(pongContainer)).toBe('none');

    playBtn.dispatchEvent(new dom.window.Event('click'));

    expect(getDisplay(playBtn)).toBe('none');
    expect(getDisplay(pongContainer)).toBe('flex');
  });
});
