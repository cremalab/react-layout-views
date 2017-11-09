import { configure } from '@storybook/react';
import 'loki/configure-react';

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
