import React from 'react';
import { Link } from 'react-router-dom';
import { fetchStudents } from '../redux/store';
import { connect } from 'react-redux';

const DUMMY_DATA = [
  {
    id: 1,
    fullName: 'Jordan Walke',
    firstName: 'Jordan',
    lastName: 'Walke',
    email: 'jw@react.com'
  },
  {
    id: 2,
    fullName: 'Dan Abramov',
    firstName: 'Dan',
    lastName: 'Avramov',
    email: 'da@react.com'
  }
];

class StudentList extends React.Component {
  constructor (props) {
    super(props);
  }
  componentDidMount () {
    this.props.fetch();
  }

  render () {
    return (
      <ul>
        {this.props.students.map(student => (
          <li key={student.id}>
            <div>
              <p>Name: {student.fullName}</p>
              <p>Email: {student.email}</p>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    students: state.students
  };
};

const mapDispatchToProps = dispatch => ({
  fetch: () => {
    dispatch(fetchStudents());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(StudentList);

// export default StudentList;
