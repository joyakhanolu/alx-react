import React from 'react';
import PropTypes from 'prop-types';

class BodySection extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { title, children } = this.props;
		return (
			<React.Fragment>
				<div className="bodySection">
					<h2>{title}</h2>
					{children}
				</div>
			</React.Fragment>
		);
	}
}

BodySection.propTypes = {
	title: PropTypes.string
};

BodySection.defaultProps = {
	title: ""
};

export default BodySection;
