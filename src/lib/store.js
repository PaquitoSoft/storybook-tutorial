import { createStore } from 'redux';

export const actions = {
	PIN_TASK: 'PIN_TASK',
	ARCHIVE_TASK: 'ARCHIVE_TASK'
};

export const pinTask = taskId => ({ type: actions.PIN_TASK, payload: { taskId } });
export const archiveTask = taskId => ({ type: actions.ARCHIVE_TASK, payload: { taskId } });

function taskStateReducer(taskState) {
	return (state, action) => {
		return {
			...state,
			tasks: state.tasks.map(
				task => (task.id === action.payload.taskId ? { ...task, state: taskState } : task)
			)
		}
	};
}

export const reducer = (state, action) => {
	switch (action.type) {
		case actions.ARCHIVE_TASK:
			return taskStateReducer('TASK_ACHIVED')(state, action);
		case actions.PIN_TASK:
			return taskStateReducer('PIN_ACHIVED')(state, action);
		default:
			return state;
	}
};

const defaultTasks = [
	{ id: '1', title: 'Something', state: 'TASK_INBOX' },
	{ id: '2', title: 'Something more', state: 'TASK_INBOX' },
	{ id: '3', title: 'Something else', state: 'TASK_INBOX' },
	{ id: '4', title: 'Something again', state: 'TASK_INBOX' },
];

export default createStore(reducer, { tasks: defaultTasks });
