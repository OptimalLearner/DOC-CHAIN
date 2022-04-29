import Dashboard from "views/CompanyDashboard.js";
import Applications from "views/Applications";
import Verification from 'views/Verification';

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/company",
  },
  {
    path: "/applications",
    name: "Applications",
    icon: "nc-icon nc-circle-09",
    component: Applications,
    layout: "/company",
  },
  {
    path: "/verify",
    name: "Verification",
    icon: "nc-icon nc-circle-09",
    component: Verification,
    layout: "/company",
  },
];

export default dashboardRoutes;
