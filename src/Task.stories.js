import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Task from './Task';

export const task = {
	id: '1',
	title: "Test task",
	state: 'TASK_INBOX',
	updatedAt: new Date(2028, 0, 9, 1, 0)
};

export const actions = {
	onPinTask: action('onPinTask'),
	onArchiveTask: action('onArchiveTask')
};

storiesOf('Task', module)
	.add('default', () => {
		return (<Task task={task} {...actions} />);
	})
	.add('pinned', () => {
		return (<Task task={{ ...task, state: 'TASK_PINNED' }} {...actions} />);
	})
	.add('archived', () => {
		return (<Task task={{ ...task, state: 'TASK_ARCHIVED'}} {...actions} />);
	});
