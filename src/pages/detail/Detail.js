import React, { useState, useEffect } from "react";
import styled from "styled-components";
import api from "../../common/utils/API";

// components
import { Error, Loading } from "../../common/components";

const Detail = () => {
  const apiKey = process.env.REACT_APP_SERVICE_API_KEY;
  const [poi, setPoi] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const lng = 126.985542;
  const lat = 37.570229;

  useEffect(() => {
    const getLocationData = async () => {
      try {
        setError(null);
        setLoading(true);
        const response = await api.get(
          `/locationBasedList?serviceKey=${apiKey}`,
          {
            params: {
              apiKey,
              numOfRows: 20,
              pageNo: 1,
              MobileOS: "ETC",
              MobileApp: "init",
              contentTypeId: 15,
              arrange: "A",
              mapX: lng,
              mapY: lat,
              radius: 3000,
              listYN: "Y",
            },
          }
        );
        console.log("data", response.data);
        setPoi(response.data);
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
  if (!poi) return null;
  return <div>Detail</div>;
};

export default Detail;
