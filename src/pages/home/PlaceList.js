import React from "react";
import { Link } from "react-router-dom";

// swiper
import { SwiperSlide } from "swiper/react";
import ImageSwiper from "../../common/utils/ImageSwiper";

// components
import { Grid, Text, Image } from "../../common/components/elements";
import { completedStamp } from "../../common/assets";
import DriveEtaIcon from "@mui/icons-material/DriveEta";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";

const PlaceList = ({ area }) => {
  const PATH = process.env.REACT_APP_IMAGE_URL;
  return (
    <Grid padding='2.5rem 0 2rem 2rem' zIndex='1' cursor='pointer' bg='white'>
      <ImageSwiper shape='overflow'>
        {area.map((areas, index) => {
          return (
            <SwiperSlide key={index}>
              <Grid
                width='100%'
                radius='8px'
                border='1px solid var(--bordergray)'
              >
                <Link to={`/detail/${areas.contentid}`} state={{ data: area }}>
                  <Image
                    width='100%'
                    height='45rem'
                    maxHeight='70%'
                    radius='8px 8px 0 0'
                    objectFit='cover'
                    backgroundSize='contain'
                    backgroundPosition='center'
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
  );
};

export default PlaceList;
