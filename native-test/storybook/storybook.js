/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions, global-require */

import { AppRegistry } from 'react-native';
import { getStorybookUI, configure, storiesOf } from '@storybook/react-native';
import 'loki/configure-react-native';
import stories from '../../stories';

// import stories
configure(() => {
  stories('native', storiesOf)
}, module);

const StorybookUI = getStorybookUI({ port: 7007, host: 'localhost' });
AppRegistry.registerComponent('Loki', () => StorybookUI);
export default StorybookUI;
