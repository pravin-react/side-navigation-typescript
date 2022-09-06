import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const SidebarLink = styled(Link)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 3.75rem;
    font-size: 15px;
    padding: 2rem;
    text-decoration: none;
    color: #ffffff;
    border: 0.1px solid #ddd;
    &:hover {
        background-color: #1f1f1b;
        border-left: 4px solid #9c27b0;
        color:#fff;
        text-decoration: none;
    }
    &:visited {
        color:#fff;
        text-decoration: none;
    }
`;
const SidebarLabel = styled.span`
    margin-left: 1rem;
`;
const DropdownLink = styled(Link)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 3.75rem;
    font-size: 15px;
    padding-left: 5rem;
    text-decoration: none;
    color: #ffffff;
    &:hover {
        background-color: #9c27b0;
        color:#fff;
    }
`;
const DropdownLinkChild = styled(Link)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 3.75rem;
    font-size: 15px;
    padding-left: 7rem;
    text-decoration: none;
    color: #ffffff;
    &:hover {
        background-color: #9c27b0;
        color:#fff;
    }
`;
const Submenu = ({ item }: any,path:string) => {
  const [currPath, setCurrPath] = useState("");
  const location = useLocation();
  const [subNav, setsubNav] = useState(false);

  const [subNavMenu, setsubNavMenu] = useState(false);
  const showsubNav = () => setsubNav(!subNav);
  const showsubNavMenu = () => setsubNavMenu(!subNavMenu);
  useEffect(() => {
    setCurrPath(window.location.pathname);
  }, [location]);

  return (
    <>
      <SidebarLink
        to={item.path}
        style={currPath === item.path ? { backgroundColor: "#9c27b0" } : {}}
        onClick={item.subNav && showsubNav}
      >
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subNav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subNav &&
        item.subNav?.map((item: any) => {
          return (
            <>
              <DropdownLink
                to={item.path}
                style={currPath === item.path ? { backgroundColor: "#9c27b0" } : {}}
                onClick={item.subNavMenus && showsubNavMenu}
              >
                {item.icon}
                <SidebarLabel>{item.title}</SidebarLabel>
                <p style={{ marginLeft: "60px" }}>
                  {" "}
                  {item.subNav && subNav
                    ? item.iconOpened
                    : item.subNavMenu
                    ? item.iconClosed
                    : item.iconClosed}
                </p>
              </DropdownLink>
              {subNavMenu &&
                item.subNavMenus?.map((item: any) => {
                  return (
                    <>
                    <DropdownLinkChild to={item.path}  style={currPath === item.path ? { backgroundColor: "#9c27b0" } : {}}>
                     
                      {item.icon}
                      <SidebarLabel>{item.title}</SidebarLabel>
                      {item.iconClosed}
                    </DropdownLinkChild>
                    </>
                  );
                })}
            </>
          );
        })}
    </>
  );
};

export default Submenu;
