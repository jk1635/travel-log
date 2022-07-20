import React from "react";
import { NavLink } from "react-router-dom";

// components
import { Grid } from "../../common/components/elements";

const Navbar = () => {
  const menus = [
    { name: "지난 여행", path: "/" },
    { name: "떠날 여행", path: "/travelplan" },
  ];

  return (
    <Grid
      display='flex'
      justifyContent='space-around'
      alignItems='center'
      padding='1rem 0 2rem 0'
    >
      {menus.map((menu, index) => {
        return (
          <Grid width='10rem' textAlign='center'>
            <NavLink
              to={menu.path}
              key={index}
              className='active'
              style={({ isActive }) => ({
                color: isActive ? "var(--main)" : "#C4C4C4",
                fontWeight: "bold",
                fontSize: "1.8rem",
              })}
            >
              {menu.name}
            </NavLink>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Navbar;
