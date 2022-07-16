import React from "react";

// components
import { Grid, Text } from "./elements";

const Error = () => {
  return (
    <Grid isFlex2 height='100vh' bg='var(--white)'>
      <Text type='h1'>에러가 발생하였습니다.</Text>
    </Grid>
  );
};

export default Error;
