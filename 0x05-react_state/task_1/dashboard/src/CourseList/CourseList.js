import React, { Fragment }from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';

function CourseList({ listCourses }) {
	return (
		<table id='CourseList' className={css(styles.CourseList)}>
			<thead>
				<CourseListRow textFirstCell="Available courses" isHeader={true} />
				<CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
			</thead>
			<tbody>
				{
					listCourses.length === 0 && (
						<CourseListRow
							textFirstCell="No course available yet"
							isHeader={false}
						/>
					)
				}
				{
					listCourses && listCourses.map((newCourse) => (
						<CourseListRow 
							key={newCourse.id}
							textFirstCell={newCourse.name}
							textSecondCell={newCourse.credit}
							isHeader={false}
						/>
					))
				}
			</tbody>
		</table>
	);
}

const styles = StyleSheet.create({
	CourseList: {
		width: '90%',
		margin: '50px auto',
		border: '1px solid lightgray',
		borderCollapse: 'collapse'
	}
});

CourseList.propTypes = {
	listCourses: PropTypes.arrayOf(CourseShape)
};

CourseList.defaultProps = {
	listCourses: []
};

export default CourseList;
