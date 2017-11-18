import 'loki/configure-react';
import { configure, storiesOf } from '@storybook/react';
import stories from '../../stories'

function loadStories() {
  stories('web', storiesOf)
}

configure(loadStories, module);
