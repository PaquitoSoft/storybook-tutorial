import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Provider } from 'react-redux';

import { InboxScreen } from './InboxScreen';
import { defaultTasks } from './lib/store';

const store = {
	getState() {
		return { tasks : defaultTasks }
	},
	subscribe() {
		return 0;
	},
	unsubscribe() {
		return 0;
	},
	dispatch(_action) {
		console.log('Dispatching action:', _action.type);
		action('dispatch');
	}
};

storiesOf('InboxScreen', module)
	.addDecorator(story => <Provider store={store}>{story()}</Provider>)
	.add('default', () => <InboxScreen />)
	.add('error', () => <InboxScreen error="My mistake" />);
