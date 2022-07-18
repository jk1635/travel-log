import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import api from "../../common/utils/API";

// swiper
import { SwiperSlide } from "swiper/react";
import ImageSwiper from "../../common/utils/ImageSwiper";

// components
import { Error, Loading } from "../../common/components";
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

const Home = () => {
  const navigate = useNavigate();
  const PATH = process.env.REACT_APP_IMAGE_URL;
  const [location, setLocation] = useState(null);
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
        setLocation(response.data);
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
  if (!location) return null;
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

        <Grid>
          <Grid padding='2rem' zIndex='1' cursor='pointer' bg='white'>
            <Text
              padding='0 2rem 0 0'
              type='h1'
              size
              color='var(--black)'
              margin='0 0 1.2rem 0'
            >
              지난 여행
            </Text>
            <ImageSwiper>
              {location.map((locations, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Grid
                      width='100%'
                      radius='8px'
                      border='1px solid var(--bordergray)'
                    >
                      <Image
                        width='100%'
                        height='45rem'
                        maxHeight='70%'
                        radius='8px 8px 0 0'
                        objectFit='cover'
                        backgroundSize='contain'
                        backgroundPosition='center'
                        onClick={() => {
                          navigate(`/detail/${locations.contentid}`);
                        }}
                        src={`${PATH}` + locations.thumbnail}
                        alt='photos'
                      />
                      <Grid isFlex2 padding='1rem 2rem'>
                        <Grid width='25rem' isFlex whiteSpace='nowrap'>
                          <Text type='h1' color='var(--balck)' size='2rem'>
                            {locations.dep}
                          </Text>
                          <TrendingFlatIcon
                            sx={{
                              fontSize: 15,
                              color: "#909090",
                            }}
                          />
                          <DriveEtaIcon
                            sx={{
                              fontSize: 20,
                              color: "#909090",
                            }}
                          />
                          <TrendingFlatIcon
                            sx={{
                              fontSize: 15,
                              color: "#909090",
                            }}
                          />
                          <Text type='h1' color='var(--balck)' size='2rem'>
                            {locations.addr2}
                          </Text>
                        </Grid>
                      </Grid>

                      <Grid isFlex2 padding='1rem 2rem 2rem 2rem'>
                        <Grid width='30rem' isFlex margin='1rem 0 0 0'>
                          <Grid
                            textAlign='center'
                            width='10rem'
                            padding='1rem 0'
                            whiteSpace='nowrap'
                          >
                            <Text size='1.1rem' lineHeight='2rem' bold>
                              DEP {locations.depdate}
                            </Text>
                            <Text size='1.1rem' lineHeight='2rem' bold>
                              ARR {locations.arrdate}
                            </Text>
                          </Grid>

                          <Grid
                            // position='relative'
                            width='7rem'
                            height='7rem'
                            textAlign='center'
                            // border='1px solid var(--bordergray)'
                          >
                            <Image
                              // position='absolute'
                              maxWidth='100%'
                              maxHeight='100%'
                              src={completedStamp}
                              alt='stamp'
                              // jeonbukCharacter,
                              // gangwonCharacter,
                              // sangjuCharacter,
                              // seoulCharacter,
                              // jongroCharacter
                            />

                            {/* <img
                              style={{
                                margin: "1.7rem 0 0 -7rem",
                                // backgroundPosition: "cover",
                                // backgroundBlendMode: "overlay",
                              }}
                              src={barImage}
                              alt=''
                            /> */}

                            {/* <Text>여행 완료</Text> */}
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </SwiperSlide>
                );
              })}
            </ImageSwiper>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

// const Button = styled.button`
//   width: 9rem;
//   radius: 8px;
//   cursor: pointer;
//   font-size: 1.2rem;
//   padding: 0.5rem 1rem;
// `;

const BackgroundImg = styled.div`
  width: 100%;
  background-color: var(--gray);
  /* display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  max-width: 100%;
  object-fit: cover; */
`;

const RoundEdge = styled.div`
  position: absolute;
  width: 100%;
  height: 2rem;
  background-color: #ffffff;
  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
  z-index: 2;
  /* border: 1px solid red; */
`;

export default Home;
