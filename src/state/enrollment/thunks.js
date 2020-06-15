import axios from "axios";

import
{
    fetchRegisteredCourses,
} from "./actions";

// Thunk creators for enrollment
export const fetchRegisteredCoursesThunk = (studentId) => (dispatch) =>
{
    return axios.get(`/api/students/${studentId}/courses`)
    .then((res) => res.data)
    .then((courses) => dispatch(fetchRegisteredCourses(courses)))
    .catch((err) => console.error(err));
};