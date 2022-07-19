import React from "react";
import { Link, NavLink } from "react-router-dom";

// components
import { Error, Loading, Line, RoundEdge } from "../../common/components";
import { Grid, Text, Image } from "../../common/components/elements";
import {
  backgroundImage,
  completedStamp,
  barImage,
  // jongroCharacter,
  // jeonbukCharacter,
  // gangwonCharacter,
  // sangjuCharacter,
  // seoulCharacter,
} from "../../common/assets";
import { Metrics } from "./";
import DriveEtaIcon from "@mui/icons-material/DriveEta";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import { PlaceList, Background, MultipleMarkerMap } from "./";

const Navbar = () => {
  const menus = [
    { name: "지난 여행", path: "/past" },
    { name: "떠날 여행", path: "/future" },
  ];
  return (
    <>
      <Grid
        display='flex'
        justifyContent='space-evenly'
        alignItems='center'
        padding='2rem'
      >
        {menus.map((menu, index) => {
          return (
            <Grid width='auto' padding='0.5rem'>
              <Grid
                width='10rem'
                textAlign='center'
                // cursor='pointer'
                // onClick={() => alert("준비 중입니다.")}
              >
                <NavLink
                  to={menu.path}
                  key={index}
                  className='active'
                  style={({ isActive }) => ({
                    color: isActive ? "var(--main)" : "gray",
                    fontSize: "1.4rem",
                    fontWeight: "bold",
                  })}
                >
                  <span>{menu.name}</span>
                </NavLink>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default Navbar;
