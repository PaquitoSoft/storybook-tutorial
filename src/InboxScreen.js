import React from 'react';
import { connect } from 'react-redux';
import { string } from 'prop-types';

import TaskList from './TaskList';

const Error = () => (
	<div className="page lists-show">
		<div className="wrapper-message">
			<span className="icon-face-sad" />
			<div className="title-message">Ouch!</div>
			<div className="subtitle-message">Something went wrong</div>
		</div>
	</div>
);

export function InboxScreen({ error }) {
	if (error) {
		return <Error />
	}

	return (
		<div className="page lists-show">
			<nav>
				<h1 className="title-page">
					<span className="title-wrapper">Taskbox</span>
				</h1>
			</nav>
			<TaskList />
		</div>
	);
}

InboxScreen.propTypes = {
	error: string
};

const mapStateToProps = ({ error }) => ({ error });

export default connect(mapStateToProps)(InboxScreen);
