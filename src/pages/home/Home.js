import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import api from "../../common/utils/API";

// components
import { Error, Loading, Line, RoundEdge } from "../../common/components";
import { Grid } from "../../common/components/elements";
import { Logo, Metrics, Background, Navbar } from "./";

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
        <Navbar />
        <Line />
        <Outlet context={{ area }} />
      </Grid>
    </>
  );
};

export default Home;
