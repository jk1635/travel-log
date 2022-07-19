import React from "react";
import styled from "styled-components";

// components
import { Grid, Image, Text } from "../../common/components/elements";
import { travelerIcon, starIcon } from "../../common/assets";
import useFadeIn from "../../common/utils/useFadeIn";
import useCountUp from "../../common/utils/useCountUp";

import PublicIcon from "@mui/icons-material/Public";

const Metrics = () => {
  const VisitsCount = useCountUp(0, 120, 2);
  const DistanceCount = useCountUp(0, 853, 2);
  const RankCount = useCountUp(0, 89, 2);
  return (
    <Grid
      mobileColumn
      isFlex
      padding='2rem'
      margin='1rem 0 1rem 0'
      flexWrap='wrap'
    >
      <div {...useFadeIn("first", 0.7, 20)}>
        <Grid
          marginTop='1rem'
          textAlign='center'
          padding='1rem 1.4rem'
          border='1px solid var(--white)'
          radius='6px'
          bg='rgba(255,255,255,0.4)'
        >
          <Text
            margin='0 0 10px 0'
            color='var(--black)'
            size='1.4rem'
            whiteSpace='nowrap'
          >
            Visited Cities
          </Text>

          <Text color='var(--black)' size='20px' whiteSpace='nowrap'>
            <Image
              type='icon'
              margin='0 1rem -0.1rem 0'
              size='20'
              src={travelerIcon}
              alt='travelerIcon'
            />
            <strong>{VisitsCount}</strong>
          </Text>
        </Grid>
      </div>
      <div {...useFadeIn("second", 0.7, 20)}>
        <Grid
          marginTop='1rem'
          textAlign='center'
          padding='1rem 1.4rem'
          border='1px solid var(--white)'
          radius='6px'
          bg='rgba(255,255,255,0.4)'
        >
          <Text
            margin='0 0 10px 0'
            color='var(--black)'
            size='1.4rem'
            whiteSpace='nowrap'
          >
            Distance
          </Text>
          <Text color='var(--black)' size='20px'>
            <PublicIcon
              sx={{
                fontSize: 20,
                margin: "0 1rem -0.3rem 0",
                color: "#FFFFFF",
              }}
            />
            <strong>{DistanceCount}Km</strong>
          </Text>
        </Grid>
      </div>
      <div {...useFadeIn("third", 0.7, 20)}>
        <Grid
          marginTop='1rem'
          textAlign='center'
          padding='1rem 1.4rem'
          border='1px solid var(--white)'
          radius='6px'
          bg='rgba(255,255,255,0.4)'
        >
          <Text
            margin='0 0 10px 0'
            color='var(--black)'
            size='1.4rem'
            whiteSpace='nowrap'
          >
            Ranking
          </Text>
          <Text color='var(--black)' size='20px'>
            <Image
              type='icon'
              margin='0 1rem -0.1rem 0'
              size='18'
              src={starIcon}
            />
            <strong>{RankCount}</strong>
          </Text>
        </Grid>
      </div>
    </Grid>
  );
};

export default Metrics;
