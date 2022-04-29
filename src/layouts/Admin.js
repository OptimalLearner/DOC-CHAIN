import React, { Component, useState } from "react";
import { useLocation, Route, Switch } from "react-router-dom";

import AdminNavbar from "components/Navbars/AdminNavbar";
import Footer from "components/Footer/Footer";
import Sidebar from "components/Sidebar/Sidebar";

import routes from "routes.js";

import sidebarImage from "assets/img/sidebar-4.jpg";
import axios from "axios";

function Admin() {
  let [name, setName] = useState('')
  let [code, setCode] = useState('')
  let [fe, setFe] = useState('')
  let [se, setSe] = useState('')
  let [te, setTe] = useState('')
  let [be, setBe] = useState('')

  window.onload = async () => {
    console.log('hehehehehehe xD')
    await axios.post(`${process.env.REACT_APP_BACKEND_DOMAIN}initialDashboard`)
      .then(res => {
        console.log(res.data);
        setName(res.data.data.name);
        setCode(res.data.data.code);
        setFe(res.data.fe);
        setSe(res.data.se);
        setTe(res.data.te);
        setBe(res.data.be);
      })
      .catch(error => {
        console.log('Error while fetching!');
      })
      console.log('hohohoho')
  }

  const [image, setImage] = React.useState(sidebarImage);
  const [color, setColor] = React.useState("black");
  const [hasImage, setHasImage] = React.useState(true);
  const location = useLocation();
  const mainPanel = React.useRef(null);
  const getRoutes = (routes, name, code) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/institute") {
        return (
          <Route
            path={prop.layout + prop.path}
            render={(props) => <prop.component {...props} name={name} code={code} fe={fe} se={se} te={te} be={be} />}
            key={key}
            code={code}
          />
        );
      } else {
        return null;
      }
    });
  };
  
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainPanel.current.scrollTop = 0;
    if (
      window.innerWidth < 993 &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
      var element = document.getElementById("bodyClick");
      element.parentNode.removeChild(element);
    }
  }, [location]);

  return (
    <>
      <div className="wrapper">
        <Sidebar color={color} image={hasImage ? image : ""} routes={routes} name={name} />
        <div className="main-panel" ref={mainPanel}>
          <AdminNavbar />
          <div className="content">
            <Switch>{getRoutes(routes, name, code, fe, se, te, be)}</Switch>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Admin;
