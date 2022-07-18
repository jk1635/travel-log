import React, { useState, useEffect } from "react";
import styled from "styled-components";
import api from "../../common/utils/API";

// swiper
import { SwiperSlide } from "swiper/react";
import ImageSwiper from "../../common/utils/ImageSwiper";

// components
import { Error, Loading } from "../../common/components";
import { Grid, Text } from "../../common/components/elements";
import { backgroundImage, namsanImage } from "../../common/assets";
import { Metrics } from "./";

const Home = () => {
  const apiKey = process.env.REACT_APP_SERVICE_API_KEY;
  const [region, setRegion] = useState(null);
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
        console.log("data", response.data[0]);
        setRegion(response.data[0]);
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
  if (!region) return null;
  return (
    <>
      <Grid isFlex flexDirection='column'>
        <BackgroundImg>
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
        </BackgroundImg>
        {/* </Grid> */}
        <Grid isFlex2>
          <Grid
            padding='2.5rem'
            zIndex='1'
            cursor='pointer'
            bg='white'
            // height='100vh'
          >
            <ImageSwiper>
              <>
                <SwiperSlide>
                  <img
                    style={{
                      maxWidth: "100%",
                      objectFit: "cover",
                      backgroundSize: "contain",
                    }}
                    src={region.firstimage[0].url}
                    alt='photos'
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    style={{
                      maxWidth: "100%",
                      objectFit: "cover",
                      backgroundSize: "contain",
                    }}
                    src={namsanImage}
                    alt='photos'
                  />
                </SwiperSlide>
              </>
            </ImageSwiper>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

const BackgroundImg = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  max-width: 100%;
  object-fit: cover;
`;

const RoundEdge = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  width: 100%;
  height: 2rem;
  background-color: #ffffff;
  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
  z-index: 2;
  border: 1px solid red;
`;

export default Home;
