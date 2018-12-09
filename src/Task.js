import React from 'react';
import { shape, string, func } from 'prop-types';

function Task({ task: { id, title, state }, onArchiveTask, onPinTask }) {
	return (
		<div className={`list-item ${state}`}>
			<label className="checkbox">
				<input
					type="checkbox"
					defaultChecked={state === Task.stateTypes.ARCHIVED}
					disabled={true}
					name="checked"
				/>
				<span 
					className="checkbox-custom"
					onClick={() => onArchiveTask(id)}
				/>
			</label>

			<div className="title">
				<input 
					type="text" 
					value={title} 
					readOnly={true} 
					placeholder="Input title" 
					style={{ 'text-overflow': 'ellipsis'}}
				/>
			</div>

			<div className="actions" onClick={e => e.stopPropagation()}>
				{state !== Task.stateTypes.ARCHIVED && (
					<a onClick={() => onPinTask(id)}>
						<span className="icon-star"></span>
					</a>
				)}
			</div>
		</div>
	);
}

Task.stateTypes = {
	PINNED: 'TASK_PINNED',
	ARCHIVED: 'TASK_ARCHIVED'
};

Task.propTypes = {
	task: shape({
		id: string.isRequired,
		title: string.isRequired,
		state: string.isRequired
	}),
	onArchiveTask: func,
	onPinTask: func
};

export default Task;
