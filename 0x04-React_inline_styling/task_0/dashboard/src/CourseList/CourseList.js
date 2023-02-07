import PropTypes from 'prop-types';
import CourseListRow from './CourseListRow';
import React, { Fragment }from 'react';
import './CourseList.css';
import CourseShape from './CourseShape';

function CourseList({ listCourses }) {
	return (
		<table id='CourseList'>
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

CourseList.propTypes = {
	listCourses: PropTypes.arrayOf(CourseShape)
};

CourseList.defaultProps = {
	listCourses: []
};

export default CourseList;
