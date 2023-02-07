import React from 'react';
import PropTypes from 'prop-types';
import BodySection from './BodySection';
import "./BodySectionWithMarginBottom.css";

class BodySectionWithMarginBottom extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<React.Fragment>
				<div className="bodySectionWithMargin">
					<BodySection { ...this.props} />
				</div>
			</React.Fragment>
		);
	}
}

BodySectionWithMarginBottom.propTypes = {
	title: PropTypes.string
};

BodySectionWithMarginBottom.defaultProsp = {
	title: ""
};

export default BodySectionWithMarginBottom;
