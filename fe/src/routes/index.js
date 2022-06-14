import Home from '../pages/Home';
//      student
//  profile
import StudentProfile from '../pages/StudentManagement/Profile';
import AddStudent from '../pages/StudentManagement/Profile/Add';
import EditStudent from '../pages/StudentManagement/Profile/Edit';
import ListStudent from '../pages/StudentManagement/Profile/List';

//  report
import Report2 from '../pages/StudentManagement/Report/Report2';

//      teacher
//  profile
import AddTeacher from '../pages/EducationManagement/TeacherManagement/Add';
import EditTeacher from '../pages/EducationManagement/TeacherManagement/Edit';
import ListTeacher from '../pages/EducationManagement/TeacherManagement/List';
import TeacherProfile from '../pages/EducationManagement/TeacherManagement';

//      grade
import AddGrade from '../pages/EducationManagement/GradeManagement/Add';
import FindGrade from '../pages/EducationManagement/GradeManagement/Find';
import GradeManagement from '../pages/EducationManagement/GradeManagement';
import Report from '../pages/StudentManagement/Report';

//      subject
import AddSubject from '../pages/EducationManagement/SubjectManagement/Add';
import ListSubject from '../pages/EducationManagement/SubjectManagement/List';
import SubjectManagement from '../pages/EducationManagement/SubjectManagement';
import Login from '../pages/Login';

const routes = [
    { path: '/', component: Home, defaultLayout: true },
    { path: '/login', component: Login, defaultLayout: false },
    { path: '/students/profile', component: StudentProfile, defaultLayout: true },
    { path: '/students/profile/add', component: AddStudent, defaultLayout: true },
    { path: '/students/profile/edit', component: EditStudent, defaultLayout: true }, //no
    { path: '/students/profile/list', component: ListStudent, defaultLayout: true },

    { path: '/students/report', component: Report, defaultLayout: true }, // no
    { path: '/students/report/report2', component: Report2, defaultLayout: true }, //no

    { path: '/teachers/profile', component: TeacherProfile, defaultLayout: true },
    { path: '/teachers/profile/add', component: AddTeacher, defaultLayout: true },
    { path: '/teachers/profile/edit', component: EditTeacher, defaultLayout: true }, //no
    { path: '/teachers/profile/list', component: ListTeacher, defaultLayout: true },

    { path: '/grades', component: GradeManagement, defaultLayout: true },
    { path: '/grades/add', component: AddGrade, defaultLayout: true },
    { path: '/grades/find', component: FindGrade, defaultLayout: true },

    { path: '/subjects', component: SubjectManagement, defaultLayout: true },
    { path: '/subjects/add', component: AddSubject, defaultLayout: true },
    { path: '/subjects/list', component: ListSubject, defaultLayout: true },
];

export default routes;
