import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

// components
import { Line, RoundEdge } from "../../common/components";
import { Grid, Image, Text } from "../../common/components/elements";
import { SpotMarkerMap, PhotosList } from "./";
import {
  locationDarkIcon,
  locationEmptyIcon,
  phoneIcon,
  homeIcon,
} from "../../common/assets";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
const Detail = () => {
  const location = useLocation();

  const area = location.state.data;

  // console.log("contentid", area.contentid);
  // console.log("location", location.pathname);

  return (
    <Grid flexDirection='column' width='auto'>
      <Grid position='relative'>
        <PhotosList area={area[6]} />
        <Grid
          position='absolute'
          top='0'
          left='0'
          padding='2.5rem'
          zIndex='3'
          cursor='pointer'
        >
          {/* <Image width='3rem' src={backIcon} alt='back' /> */}
          <Link to='/'>
            <ArrowBackIosIcon
              sx={{
                fontSize: 25,
                color: "var(--white)",
                filter: "drop-shadow(1px 1px 4px var(--bordergray))",
              }}
            />
          </Link>
        </Grid>
        <RoundEdge leftRadius='16px' rightRadius='16px' bottom='0' />
      </Grid>

      <Grid
        display='flex'
        justiftContent='space-between'
        flexDirection='column'
        padding='0rem 2rem 3rem 2rem'
      >
        <Grid>
          <Text
            type='h1'
            size='2.2rem'
            color='var(--black)'
            margin='1rem 0 1.1rem 0'
          >
            {area[6].addr2}
          </Text>
        </Grid>
        <Grid display='flex' alignItems='center' marginBottom='1rem'>
          <Image type='icon' src={locationDarkIcon} />
          <Text size='1.4rem' margin='0 0 0 0.4rem' whiteSpace='nowrap'>
            {area[6].title}
          </Text>
        </Grid>
      </Grid>

      <Line />

      <Grid display='flex' flexDirection='column' padding='2rem'>
        <Grid padding='1rem 0'>
          <Text type='h1' size='1.7rem'>
            지역 정보
          </Text>
        </Grid>
        <Grid margin='1rem 0'>
          <SpotMarkerMap area={area[6]} />
        </Grid>

        <Grid
          display='flex'
          justifyContent='flex-start'
          margin='1rem 0 0.9rem 0'
          flexDirection='column'
        >
          <Grid isFlex marginBottom='0.5rem'>
            <Image size='18' type='icon' src={locationEmptyIcon} />
            <Grid>
              <Text
                type='span'
                color='var(--black)'
                size='1.4rem'
                margin='0 0 0 0.8rem'
              >
                {area[6].addr1}
              </Text>
            </Grid>
          </Grid>
          <Grid isFlex marginBottom='0.5rem'>
            <Image size='18' type='icon' src={phoneIcon} />
            <Grid>
              <Text
                type='span'
                color='var(--black)'
                size='1.4rem'
                margin='0 0 0 0.8rem'
              >
                {area[6].tel}
              </Text>
            </Grid>
          </Grid>
          <Grid isFlex marginBottom='0.5rem'>
            <Image size='18' type='icon' src={homeIcon} />
            <Grid>
              <Text
                type='span'
                color='var(--gray)'
                size='1.4rem'
                whiteSpace='nowrap'
                margin='0 0 0 0.8rem'
                cursor='pointer'
                onClick={() => window.open(`${area[6].site}`)}
              >
                링크 바로가기
              </Text>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Detail;
