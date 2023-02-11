function rowState() {
	const [checkBoxState, setCheckBox] = useState(false);
	const updateCheckBox = () => {
		setCheckBox(!checkBoxState);
	}
	return { checkBoxState, updateCheckBox };
}

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
	const { checkBoxState, updateCheckBox } = rowState();
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
				<td>
					<input type='checkbox' onClick={updateCheckBox}/>
					{textFirstCell}
				</td>
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
		<tr style={stylesBackground} className={css(checkBoxState ? styles.rowChecked : '')}>{myElement}</tr>
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
	},

	rowChecked: {
		backgroundColor: '#e6e4e4'
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