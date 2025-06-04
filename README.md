# Canodo Site

This repository contains the static site for **Canodo**. A small Jest setup is
included to verify basic behaviour of the Pong demo.

## Running tests

1. Install dependencies using `npm install` (requires Node.js).
2. Run the test suite with `npm test`.

The tests use JSDOM to load `index.html` and simulate clicking the **Play Pong**
button. When clicked, the button should hide itself and reveal the game
container.
