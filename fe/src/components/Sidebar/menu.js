import {
    faHouse,
    faUserGraduate,
    faBookOpen,
    faBook,
    faPerson,
    faChalkboardTeacher,
    faAward,
    faReceipt,
    faGraduationCap,
    faFilter,
    faAsterisk,
} from '@fortawesome/free-solid-svg-icons';

export const menu = [
    {
        icon: faHouse,
        title: 'Trang Chủ',
        to: '/',
        items: [],
    },
    {
        icon: faUserGraduate,
        title: 'Quản lý học viên',
        items: [
            {
                title: 'Hồ sơ',
                icon: faBook,
                to: '/students/profile',
            },
            {
                title: 'Báo cáo *',
                icon: faBookOpen,
                to: '/students/report',
            },
        ],
    },
    {
        icon: faPerson,
        title: 'Quản lý đào tạo',
        items: [
            {
                title: 'Quản lý giảng viên',
                icon: faChalkboardTeacher,
                to: '/teachers/profile',
            },
            {
                title: 'Quản lý lớp học',
                icon: faChalkboardTeacher,
                to: '/class',
            },
            {
                title: 'Lập lịch học',
                icon: faChalkboardTeacher,
                to: '/schedule',
            },
            {
                title: 'Quản lý điểm',
                icon: faAward,
                to: '/grades',
            },
            {
                title: 'Quản lý môn học',
                icon: faReceipt,
                to: '/subjects',
            },
            {
                title: 'Quản lý tốt nghiệp *',
                icon: faGraduationCap,
                to: '/',
            },
            {
                title: 'Xử lý học vụ *',
                icon: faFilter,
                to: '/',
            },
            {
                title: 'Khác *',
                icon: faAsterisk,
                to: '/',
            },
        ],
    },
];
