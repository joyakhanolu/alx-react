import React from 'react';
import PropTypes from 'prop-types';

function WithLogging(Component) {
	const wrappedComponent = Component.displayName || Component.name || 'Component';

	class HOC extends React.Component {
		componentDidMount() {
			console.log(`Component ${wrappedComponent} is mounted`);
		}

		componentWillUnmount() {
			console.log(`Component ${wrappedComponent} is going to unmount`);
		}

		render() {
			return (
				<Component { ...this.props } />
			);
		}
	}
	HOC.displayName = `WithLogging(${wrappedComponent})`;
	return HOC;
}

export default WithLogging;
