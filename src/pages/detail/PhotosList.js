import React from "react";

// swiper
import { SwiperSlide } from "swiper/react";
import ImageSwiper from "../../common/utils/ImageSwiper";

// components
import { Grid, Image } from "../../common/components/elements";

const PhotosList = ({ area }) => {
  const PATH = process.env.REACT_APP_IMAGE_URL;
  return (
    // <Grid padding='2.5rem 0 2rem 2rem' zIndex='1' cursor='pointer' bg='white'>
    <ImageSwiper>
      {area.firstimage.map((areas, index) => {
        return (
          <SwiperSlide key={index}>
            <Grid width='100%'>
              {/* <Link to={`/detail/${areas.contentid}`} state={{ data: area }}> */}
              <Image
                width='100%'
                height='45rem'
                maxHeight='70%'
                // radius='8px 8px 0 0'
                objectFit='cover'
                backgroundSize='contain'
                backgroundPosition='center'
                src={`${PATH}` + areas.url}
                alt='photos'
              />
              {/* </Link> */}
            </Grid>
          </SwiperSlide>
        );
      })}
    </ImageSwiper>
    // </Grid>
  );
};

export default PhotosList;
