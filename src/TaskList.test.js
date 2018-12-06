import React from 'react';
import ReactDOM from 'react-dom';

import TaskList from './TaskList';
import { withPinnedTasks } from './TaskList.stories';

describe('TaskList', () => {

	it('Should render pinned tasks at the start of the list', () => {
		const div = document.createElement('div');
		const events = {
			onPinTask: jest.fn(),
			onArchiveTask: jest.fn()
		};

		ReactDOM.render(
			<TaskList tasks={withPinnedTasks} {...events} />,
			div
		);

		const firstTask = div.querySelector('.list-item input[type="text"]');
		expect(firstTask.value).toEqual(withPinnedTasks[withPinnedTasks.length - 1].title);

		ReactDOM.unmountComponentAtNode(div);
	});

});