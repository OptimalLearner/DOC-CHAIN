import StudentDashboard from "views/StudentDashboard";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Student Profile",
    icon: "nc-icon nc-circle-09",
    component: StudentDashboard,
    layout: "/student",
  }
];

export default dashboardRoutes;
