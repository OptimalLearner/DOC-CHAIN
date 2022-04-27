import React, { Component, useState } from "react";
import { useLocation, NavLink } from "react-router-dom";
import axios from "axios";

import { Nav } from "react-bootstrap";

import logo from "assets/img/reactlogo.png";

function Sidebar({ color, image, routes, name }) {

  // window.onload = async () => {
  //   console.log('hehehehehehe xD')
  //   await axios.post(`${process.env.REACT_APP_BACKEND_DOMAIN}initialDashboard`)
  //     .then(res => {
  //       console.log(res.data);
  //       setName(res.data.name);
  //       setCode(res.data.code);
  //     })
  //     .catch(error => {
  //       console.log('Error while fetching!');
  //     })
  //     console.log('hohohoho')
  // }

  const location = useLocation();
  const activeRoute = (routeName) => {
    return location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  return (
    <div className="sidebar" data-image={image} data-color={color}>
      <div
        className="sidebar-background"
        style={{
          backgroundImage: "url(" + image + ")",
        }}
      />
      <div className="sidebar-wrapper">
        <div className="logo d-flex align-items-center justify-content-center flex-column w-100">
          <a className="simple-text" href="#" style={{ cursor: "pointer" }}>
            DOC-CHAIN
          </a>
          <hr style={{border: '1px solid #FFF', width: '80%', margin: '5px 0 15px'}} />
          <span className="text-small text-center"> {name} </span>
        </div>
        <Nav>
          {routes.map((prop, key) => {
            if (!prop.redirect)
              return (
                <li
                  className={
                    prop.upgrade
                      ? "active active-pro"
                      : activeRoute(prop.layout + prop.path)
                  }
                  key={key}
                >
                  <NavLink
                    to={prop.layout + prop.path}
                    className="nav-link"
                    activeClassName="active"
                  >
                    <i className={prop.icon} />
                    <p>{prop.name}</p>
                  </NavLink>
                </li>
              );
            return null;
          })}
        </Nav>
      </div>
    </div>
  );
}

export default Sidebar;
