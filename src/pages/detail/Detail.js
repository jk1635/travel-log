import React, { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";

// components
import { Error, Loading } from "../../common/components";
import { Grid, Image, Text } from "../../common/components/elements";
import NaverMap from "./NaverMap";

const Detail = () => {
  const PATH = process.env.REACT_APP_IMAGE_URL;
  const location = useLocation();

  const tourSpot = location.state.data[0];

  console.log("contentid", tourSpot.contentid);
  console.log("location", location.pathname);

  return (
    <div>
      <Grid>
        <NaverMap tourSpot={tourSpot} />
      </Grid>
    </div>
  );
};

export default Detail;
