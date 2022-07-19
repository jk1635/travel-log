import React, { useState, useEffect } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
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
import { Metrics, Navbar } from "./";
import DriveEtaIcon from "@mui/icons-material/DriveEta";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import { PlaceList, Background, MultipleMarkerMap } from "./";
export const TabA = () => {
  return <p>A</p>;
};

export const TabB = () => {
  return <p>B</p>;
};
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
        // console.log("data", response.data);
        setArea(response.data);

        // const tempList = [];
        // const data = () => {
        //   for (let i = 0; i < area[i].length; i++) {
        //     const temp =
        //     tempList.push(...temp);
        //     // return list;
        //   }
        // };
        // console.log("area", tempList);
        // return tempList;
        // console.log("area", tempList);
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
  // for (let i = 1; i <= resultNum; i++) {
  //   detailGalleryUrl.push(response.data.gallery_contents[i].car_url);
  // }
  if (loading) return <Loading />;
  if (error) return <Error />;
  if (!area) return null;
  return (
    <>
      <Grid isFlex flexDirection='column'>
        <Background area={area}>
          <Grid position='relative' marginBottom='2rem'>
            <Text
              center
              type='h1'
              size='3rem'
              color='var(--white)'
              padding='4rem 0 1rem 0'
            >
              Travel Log
            </Text>
            <Metrics />
            <RoundEdge />
          </Grid>
        </Background>

        <Navbar />
        <Link to='past' >
          A
        </Link>
        <Link to='future' >
          B
        </Link>
        <Outlet />
        <Grid>
          {/* <Text type='h1' size='2.2rem' color='var(--black)' padding='2rem'>
            지난 여행
          </Text> */}
          <Line />
        </Grid>
        <Grid padding='2rem'>
          <MultipleMarkerMap area={area} />
        </Grid>
        <PlaceList area={area} />
      </Grid>
    </>
  );
};

export default Home;
