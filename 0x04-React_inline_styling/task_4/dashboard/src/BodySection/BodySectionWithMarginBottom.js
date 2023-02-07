import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from "aphrodite";
import BodySection from './BodySection';

class BodySectionWithMarginBottom extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<React.Fragment>
				<div className={css(styles.bodySectionWithMargin)}>
					<BodySection { ...this.props} />
				</div>
			</React.Fragment>
		);
	}
}

const styles = StyleSheet.create({
	bodySectionWithMargin: {
		marginBottom: '40px'
	}
});

BodySectionWithMarginBottom.propTypes = {
	title: PropTypes.string
};

BodySectionWithMarginBottom.defaultProsp = {
	title: ""
};

export default BodySectionWithMarginBottom;
