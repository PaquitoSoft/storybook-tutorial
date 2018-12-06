import React from 'react';
import { bool, arrayOf, func } from 'prop-types';

import Task from './Task';

function LoadingRow() {
	return (
		<div className="loading-item">
			<span className="glow-checkbox"></span>
			<span className="glow-text">
				<span>Loading</span> <span>cool</span> <span>state</span>
			</span>
		</div>
	);
}

function EmptyList() {
	return (
		<div className="list-items">
			<div className="wrapper-message">
				<span className="icon-check"></span>
				<div className="title-message">You have no tasks</div>
				<div className="subtitle-message">Sit back and relax</div>
			</div>
		</div>
	);
}

function TaskList({ loading = false, tasks, onPinTask, onArchiveTask }) {
	const events = {
		onPinTask, 
		onArchiveTask
	};

	if (loading) {
		return (
			<div className="list-items">
				{Array.apply(null, Array(6)).map((_, index) => <LoadingRow key={index} />)}
			</div>
		);
	}

	if (!tasks.length) {
		return (<EmptyList />)
	}

	const orderedTasks = [
		...tasks.filter(task => task.state === Task.stateTypes.PINNED),
		...tasks.filter(task => task.state !== Task.stateTypes.PINNED),
	];

	return (
		<div className="list-items">
			{orderedTasks.map(task => <Task key={task.id} task={task} {...events} />)}
		</div>
	);
}

TaskList.propTypes = {
	loading: bool,
	tasks: arrayOf(Task.propTypes.task).isRequired,
	onPinTask: func.isRequired,
	onArchiveTask: func.isRequired
};

export default TaskList;
