import React from 'react';
import PropTypes from 'prop-types';

function CourseListRow(props) {
  let cell;
  if (!props.isHeader) {
    cell = (
      <>
      <td>{props.textFirstCell}</td>
      <td>{props.textSecondCell}</td>
      </>
    );
  }
  else {
    if (props.textSecondCell) {
      cell = (
        <>
        <th>{props.textFirstCell}</th>
        <th>{props.textSecondCell}</th>
        </>
      );
    }
    else cell = (<th colSpan='2'>{props.textFirstCell}</th>);
  }
  return(<tr>{cell}</tr>);
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.string,
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;
