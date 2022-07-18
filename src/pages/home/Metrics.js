import React from "react";
import styled from "styled-components";

// components
import { Grid, Image, Text } from "../../common/components/elements";
import { travelerIcon, starIcon } from "../../common/assets";
import useFadeIn from "../../common/utils/useFadeIn";
import useCountUp from "../../common/utils/useCountUp";

import PublicIcon from "@mui/icons-material/Public";

const Metrics = () => {
  const VisitsCount = useCountUp(0, 424, 2);
  const RankCount = useCountUp(0, 125, 2);
  const AuthorityCount = useCountUp(0, 89, 2);
  return (
    <Grid isFlex padding='2rem' margin='5rem 0 1rem 0' flexWrap='wrap'>
      <div {...useFadeIn("first", 0.7, 20)}>
        <Grid
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
            Visits
          </Text>

          <Text color='var(--black)' size='20px' whiteSpace='nowrap'>
            <Image
              margin='0 1rem -0.1rem 0'
              size='20'
              src={travelerIcon}
              alt='travelerIcon'
            />
            <strong>{VisitsCount}M</strong>
          </Text>
        </Grid>
      </div>
      <div {...useFadeIn("second", 0.7, 20)}>
        <Grid
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
            Global Rank
          </Text>
          <Text color='var(--black)' size='20px'>
            <PublicIcon
              sx={{
                fontSize: 20,
                margin: "0 1rem -0.3rem 0",
                color: "#FFFFFF",
              }}
            />
            <strong>{RankCount}</strong>
          </Text>
        </Grid>
      </div>
      <div {...useFadeIn("third", 0.7, 20)}>
        <Grid
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
            Authority Score
          </Text>
          <Text color='var(--black)' size='20px'>
            <Image margin='0 1rem -0.1rem 0' size='18' src={starIcon} />
            <strong>{AuthorityCount}</strong>
          </Text>
        </Grid>
      </div>
    </Grid>
  );
};

export default Metrics;
