import React, { Fragment }from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
	const styleRow = { backgroundColor: '#f5f5f5ab' };
	const styleHeaderRow = { backgroundColor: '#deb5b545' };

	let myElement;
	if (isHeader === true) {
		if (textSecondCell === null) {
			myElement = <th colSpan="2" className={css(styles.headerRow)}>{textFirstCell}</th>;
		} else {
			myElement = (
				<Fragment>
					<th className={css(styles.defaultRow)}>{textFirstCell}</th>
					<th className={css(styles.defaultRow)}>{textSecondCell}</th>
				</Fragment>
			);
		}
	} else {
		myElement = (
			<Fragment>
				<td>{textFirstCell}</td>
				<td>{textSecondCell}</td>
			</Fragment>
		);
	}

	let stylesBackground;

	if (isHeader) {
		stylesBackground = styleHeaderRow;
	} else {
		stylesBackground = styleRow;
	}
	return (
		<tr style={stylesBackground}>{myElement}</tr>
	);
}

const styles = StyleSheet.create({
	headerRow: {
		fontfamily: 'Arial, Helvetica, sans-serif',
		textAlign: 'center'
	},

	defaultRow: {
		fontfamily: 'Arial, Helvetica, sans-serif',
		borderbottom: '1px solid lightgray',
		height: '25px',
		textAlign: 'left'
	}
});

CourseListRow.propTypes = {
	isHeader: PropTypes.bool,
	textFirstCell: PropTypes.string.isRequired,
	textSecondCell: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	])
};

CourseListRow.defaultProps = {
	isHeader: false,
	textSecondCell: null
};

export default CourseListRow;
