import React from 'react';
import { storiesOf } from '@storybook/react';

import { TaskList } from './TaskList';
import { task, actions } from './Task.stories';

export const defaultTasks = [
	{ ...task, id: '1', title: 'Task 1' },
	{ ...task, id: '2', title: 'Task 2' },
	{ ...task, id: '3', title: 'Task 3' },
	{ ...task, id: '4', title: 'Task 4' },
	{ ...task, id: '5', title: 'Task 5' },
	{ ...task, id: '6', title: 'Task 6' },
];

export const withPinnedTasks = [
	...defaultTasks.slice(0, 5),
	{
		id: '6',
		title: 'Task (6) Pinned',
		state: 'TASK_PINNED'
	}
];

const withArchivedTasks = [
	...defaultTasks.slice(0, 3),
	{
		id: '10',
		title: 'Task 10 (Archived)',
		state: 'TASK_ARCHIVED'
	}
];

storiesOf('TaskList', module)
	.addDecorator(story => {
		return (<div style={{ padding: '3rem' }}>{story()}</div>);
	})
	.add('default', () => {
		return (<TaskList tasks={defaultTasks} {...actions} />);
	})
	.add('withPinnedTasks', () => {
		return (<TaskList tasks={withPinnedTasks} {...actions} />);
	})
	.add('withArchivedTasks', () => {
		return (<TaskList tasks={withArchivedTasks} {...actions} />);
	})
	.add('loading', () => {
		return (<TaskList loading tasks={[]} {...actions} />);
	})
	.add('empty', () => {
		return (<TaskList tasks={[]} {...actions} />);
	});
