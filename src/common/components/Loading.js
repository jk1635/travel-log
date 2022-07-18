import React from "react";

// components
import { Grid, Text } from "./elements";

const Loading = () => {
  return (
    <Grid isFlex2 height='100vh' bg='var(--white)' cursor='wait'>
      <Text type='h1' size='2rem'>
        로딩 중입니다.
      </Text>
    </Grid>
  );
};

export default Loading;
