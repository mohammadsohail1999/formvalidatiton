import { Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import React from "react";

const Sidebar = () => {
  // const drawerWidth = 240;

  const Links = [
    {
      title: "home",
      to: "/",
      icon: "fas fa-home",
    },
    {
      title: "My Wardrobe",
      to: "wardrobe",
      icon: "fas fa-tshirt",
    },
    {
      title: "Orders",
      to: "/orders",
      icon: "fas fa-list",
    },
    { title: "My Friend", to: "/friends", icon: "fas fa-user-friends" },
    { title: "My Background", to: "/background", icon: "fas fa-image" },
    { title: "chats", to: "/chats", icon: "far fa-comment-dots" },
    { title: "Gifts", to: "/gifts", icon: "fas fa-gift" },
  ];

  return (
    <div className="sidebar">
      <Toolbar sx={{ padding: 0 }}>
        <div className="logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/2560px-Adidas_Logo.svg.png"
            alt="logo"
          />
        </div>
        <Typography variant="h5" marginLeft="10px">
          Virdrobe
        </Typography>
      </Toolbar>
      <ul className="sidelinks_wrapper">
        {Links.map((el) => (
          <li key={el.title} className="sidelinks">
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#fff" : "#4a4a4a",
                background: isActive ? "#66180d" : "transparent",
                width: "100%",
                display: "inline-block",
              })}
              to={el.to}
            >
              <i style={{ marginRight: "15px" }} className={el.icon}></i>
              <Typography variant="p">{el.title}</Typography>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
