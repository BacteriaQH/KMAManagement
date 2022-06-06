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

const routes = [
    { path: '/', component: Home },

    { path: '/students/profile', component: StudentProfile },
    { path: '/students/profile/add', component: AddStudent },
    { path: '/students/profile/edit', component: EditStudent },
    { path: '/students/profile/list', component: ListStudent },

    { path: '/students/report', component: Report },
    { path: '/students/report/report2', component: Report2 },

    { path: '/teachers/profile', component: TeacherProfile },
    { path: '/teachers/profile/add', component: AddTeacher },
    { path: '/teachers/profile/edit', component: EditTeacher },
    { path: '/teachers/profile/list', component: ListTeacher },

    { path: '/grades', component: GradeManagement },
    { path: '/grades/add', component: AddGrade },
    { path: '/grades/find', component: FindGrade },
];

export default routes;
