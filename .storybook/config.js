import { configure } from '@storybook/react';
import 'storybook-chromatic/storybook-addon';

import '../src/index.css';

// const req = require.context('../src', true, /\.stories\.js$/)

function loadStories() {
  // require('../src/stories');
  // req.keys().forEach(filename => require(filename));
  require('../src/Task.stories');
  require('../src/TaskList.stories');
  require('../src/InboxScreen.stories');
}

configure(loadStories, module);
