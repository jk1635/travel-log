import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import api from "../../common/utils/API";

// swiper
import { SwiperSlide } from "swiper/react";
import ImageSwiper from "../../common/utils/ImageSwiper";

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
import { PlaceList, Background } from "./";

const Home = () => {
  // const navigate = useNavigate();
  const PATH = process.env.REACT_APP_IMAGE_URL;
  const [area, setArea] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const lng = 127.1479532;
  const lat = 35.8242238;
  // const lng = 126.9784147;
  // const lat = 37.5666805;

  useEffect(() => {
    const getLocationData = async () => {
      try {
        setError(null);
        setLoading(true);
        const response = await api.get(`/locations`);
        console.log("data", response.data);
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
        <Background>
          <Grid position='relative' marginBottom='2rem'>
            <Text
              center
              type='h1'
              size='3rem'
              color='var(--white)'
              padding='4rem 0 4rem 0'
            >
              Travel Log
            </Text>
            <Metrics />
            <RoundEdge />
          </Grid>
        </Background>

        <Grid>
          <Text
            type='h1'
            size='2.2rem'
            color='var(--black)'
            padding='2rem'
          >
            지난 여행
          </Text>
          <Line />
          <PlaceList area={area} />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
