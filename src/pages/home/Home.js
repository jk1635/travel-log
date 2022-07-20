import React, { useState, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import api from "../../common/utils/API";
import styled from "styled-components";
// components
import { Error, Loading, Line, RoundEdge } from "../../common/components";
import { Grid } from "../../common/components/elements";
import { Logo, Metrics, Background } from "./";

const Home = () => {
  const [area, setArea] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getLocationData = async () => {
      try {
        setError(null);
        setLoading(true);
        const response = await api.get(`/locations`);
        // console.log("data", response.data);
        setArea(response.data);
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        setError(error);
      }
      setLoading(false);
    };
    getLocationData();
  }, []);

  const menus = [
    { name: "지난 여행", path: "/" },
    { name: "떠날 여행", path: "/travelplan" },
  ];

  if (loading) return <Loading />;
  if (error) return <Error />;
  if (!area) return null;
  return (
    <>
      <Grid isFlex flexDirection='column'>
        <Background area={area}>
          <Grid position='relative' marginBottom='2rem'>
            <Logo />
            <Metrics />
            <RoundEdge rightRadius='38px' />
          </Grid>
        </Background>
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
        <Line />
        <Outlet context={{ area }} />
      </Grid>
    </>
  );
};

export default Home;
