import React from "react";
import { useOutletContext } from "react-router-dom";

// components
import { Grid } from "../../common/components/elements";
import { PlaceList, MultipleMarkerMap } from "./";

const TravelLog = () => {
  const { area } = useOutletContext();
  return (
    <>
      <Grid padding='2rem'>
        <MultipleMarkerMap area={area} />
      </Grid>
      <PlaceList area={area} />
    </>
  );
};

export default TravelLog;
