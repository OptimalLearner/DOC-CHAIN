import Dashboard from "views/Dashboard.js";
import UserProfile from "views/UserProfile.js";
import TableList from "views/TableList.js";
import Notifications from "views/Notifications.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/institute",
  },
  {
    path: "/user",
    name: "Add Student",
    icon: "nc-icon nc-circle-09",
    component: UserProfile,
    layout: "/institute",
  },
  {
    path: "/table",
    name: "Get Student List",
    icon: "nc-icon nc-notes",
    component: TableList,
    layout: "/institute",
  },
  {
    path: "/feedback",
    name: "Feedback",
    icon: "nc-icon nc-bell-55",
    component: Notifications,
    layout: "/institute",
  },
];

export default dashboardRoutes;
