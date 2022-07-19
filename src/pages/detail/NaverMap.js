import React, { useEffect } from "react";

import { locationIcon } from "../../common/assets";

const NaverMap = ({ tourSpot }) => {
  useEffect(() => {
    // 가져온 모든 함수는 window 객체 안에 있다.
    const { naver } = window;

    const container = document.getElementById("map");

    const lng = tourSpot.mapx;
    const lat = tourSpot.mapy;

    const location = new naver.maps.LatLng(lat, lng);

    const mapOptions = {
      disableDoubleTapZoom: false,
      disableDoubleClickZoom: true,
      disableTwoFingerTapZoom: false,
      scrollWheel: false,
      center: location,
      zoomControl: true,
      zoomControlOptions: {
        style: naver.maps.ZoomControlStyle.SMALL,
        position: naver.maps.Position.TOP_RIGHT,
      },
    };

    const map = new naver.maps.Map("map", mapOptions);
    new naver.maps.Marker({
      position: location,
      map: map,
      icon: {
        url: `${locationIcon}`,
        content:
          '<div style="width: 24px; height: 24px; border-radius: 50%; background-color: var(--main); display: flex; align-items: center; justify-content: center;">' +
          "<img src=" +
          "{url} " +
          'style="width: 16px; height: 18px; display: block; max-width: none; max-height: none;" ' +
          '-webkit-user-select: none; position: absolute; top: 0; left: 0;">' +
          "</div>",

        // 화면에 나타나는 마커의 크기
        size: new naver.maps.Size(32, 32),
        // 아이콘 이미지의 크기입니다.
        scaledSize: new naver.maps.Size(32, 32),
        // 스프라이트 이미지의 아이콘을 사용할 때 이미지의 원점
        origin: new naver.maps.Point(0, 0),
        // 지도 위에 놓이는 마커의 위치와 일치시킬 아이콘의 기준 위치
        anchor: new naver.maps.Point(12, 34),
      },
    });
    // console.log(map);
  }, []);

  return (
    <div
      id='map'
      style={{
        width: "46rem",
        height: "18.4rem",
        maxWidth: "100%",
        borderRadius: 8,
      }}
    ></div>
  );
};

export default NaverMap;
