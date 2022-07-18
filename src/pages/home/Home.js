import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
          <Text
            type='h1'
            size='2rem'
            color='var(--black)'
            padding='1.4rem  2rem'
          >
            지난 여행
          </Text>
          <Grid width='auto' height='1px' margin='0 2rem 0 2rem' bg='#EBEBEB' />
          <Grid
            padding='2.5rem 0 2rem 2rem'
            zIndex='1'
            cursor='pointer'
            bg='white'
          >
            <ImageSwiper shape='overflow'>
              {area.map((areas, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Grid
                      width='100%'
                      radius='8px'
                      border='1px solid var(--bordergray)'
                    >
                      <Link
                        to={`/detail/${areas.contentid}`}
                        state={{ data: area }}
                      >
                        <Image
                          width='100%'
                          height='45rem'
                          maxHeight='70%'
                          radius='8px 8px 0 0'
                          objectFit='cover'
                          backgroundSize='contain'
                          backgroundPosition='center'
                          // onClick={() => {
                          //   navigate(`/detail/${locations.contentid}`);
                          // }}
                          // state={{ data: area }}
                          src={`${PATH}` + areas.thumbnail}
                          alt='photos'
                        />
                      </Link>
                      <Grid isFlex2 padding='1rem 2rem'>
                        <Grid width='25rem' isFlex whiteSpace='nowrap'>
                          <Text type='h1' color='var(--balck)' size='2rem'>
                            {areas.dep}
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
                            {areas.addr2}
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
                            <Text size='1.2rem' lineHeight='2rem' bold>
                              DEP {areas.depdate}
                            </Text>
                            <Text size='1.2rem' lineHeight='2rem' bold>
                              ARR {areas.arrdate}
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
