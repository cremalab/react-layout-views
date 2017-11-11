import 'loki/configure-react';
import { configure } from '@storybook/react';

const req = require.context('../src/stories', true, /\.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
