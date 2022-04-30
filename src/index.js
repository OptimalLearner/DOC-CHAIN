import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
import "./assets/css/demo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import AdminLayout from "layouts/Admin.js";
import CompanyLayout from "layouts/Company.js";
import StudentLayout from "layouts/Student.js"

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/institute" render={(props) => <AdminLayout {...props} />} />
      <Route path="/company/" render={(props) => <CompanyLayout {...props} />} />
      <Route path="/student/" render={(props) => <StudentLayout {...props} />} />
      <Redirect from="/" to="/institute/dashboard" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
