import React, { useEffect } from "react";

import { locationIcon } from "../../common/assets";

const MultipleMarkerMap = ({ area }) => {
  useEffect(() => {
    const { naver } = window;
    var mapContainer = document.getElementById("map"); // 지도를 표시할 div

    const mapOptions = {
      disableDoubleTapZoom: false,
      disableDoubleClickZoom: true,
      disableTwoFingerTapZoom: false,
      scrollWheel: false,
      center: new naver.maps.LatLng(36.368217651137215, 127.42027827403757), // 지도의 중심좌표
      zoomControl: true,
      zoomControlOptions: {
        style: naver.maps.ZoomControlStyle.SMALL,
        position: naver.maps.Position.TOP_RIGHT,
      },
      zoom: 7, // 지도의 확대 레벨
    };

    var map = new naver.maps.Map("map", mapOptions); // 지도를 생성합니다

    // 마커를 표시할 위치와 title 객체 배열입니다
    var positions = [
      {
        title: area[0].title,
        latlng: new naver.maps.LatLng(area[0].mapy, area[0].mapx),
      },
      {
        title: area[1].title,
        latlng: new naver.maps.LatLng(area[1].mapy, area[1].mapx),
      },
      {
        title: area[2].title,
        latlng: new naver.maps.LatLng(area[2].mapy, area[2].mapx),
      },
      {
        title: area[3].title,
        latlng: new naver.maps.LatLng(area[3].mapy, area[3].mapx),
      },
      {
        title: area[4].title,
        latlng: new naver.maps.LatLng(area[4].mapy, area[4].mapx),
      },
      {
        title: area[5].title,
        latlng: new naver.maps.LatLng(area[5].mapy, area[5].mapx),
      },
      {
        title: area[6].title,
        latlng: new naver.maps.LatLng(area[6].mapy, area[6].mapx),
      },
    ];

    // 마커 이미지의 이미지 주소입니다
    // var imageSrc =
    //   "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

    for (var i = 0; i < positions.length; i++) {
      // // 마커 이미지의 이미지 크기 입니다
      // var imageSize = new naver.maps.Size(24, 35);

      // // 마커 이미지를 생성합니다
      // var markerImage = new naver.maps.Map(imageSrc, imageSize);

      // 마커를 생성합니다
      new naver.maps.Marker({
        icon: {
          url: `${locationIcon}`,
          content:
            '<div style="width: 24px; height: 24px; border-radius: 50%; background-color: var(--white); display: flex; align-items: center; justify-content: center;">' +
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
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커를 표시할 위치
        title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        // image: markerImage, // 마커 이미지
      });
    }
    // // 가져온 모든 함수는 window 객체 안에 있다.
    // const { naver } = window;

    // const container = document.getElementById("map");

    // const lng = area.mapx;
    // const lat = area.mapy;

    // const location = new naver.maps.LatLng(lat, lng);

    // const mapOptions = {
    //   disableDoubleTapZoom: false,
    //   disableDoubleClickZoom: true,
    //   disableTwoFingerTapZoom: false,
    //   scrollWheel: false,
    //   center: location,
    //   zoomControl: true,
    //   zoomControlOptions: {
    //     style: naver.maps.ZoomControlStyle.SMALL,
    //     position: naver.maps.Position.TOP_RIGHT,
    //   },
    // };

    // const map = new naver.maps.Map("map", mapOptions);
    // new naver.maps.Marker({
    //   position: location,
    //   map: map,
    //   icon: {
    //     url: `${locationIcon}`,
    //     content:
    //       '<div style="width: 24px; height: 24px; border-radius: 50%; background-color: var(--main); display: flex; align-items: center; justify-content: center;">' +
    //       "<img src=" +
    //       "{url} " +
    //       'style="width: 16px; height: 18px; display: block; max-width: none; max-height: none;" ' +
    //       '-webkit-user-select: none; position: absolute; top: 0; left: 0;">' +
    //       "</div>",

    //     // 화면에 나타나는 마커의 크기
    //     size: new naver.maps.Size(32, 32),
    //     // 아이콘 이미지의 크기입니다.
    //     scaledSize: new naver.maps.Size(32, 32),
    //     // 스프라이트 이미지의 아이콘을 사용할 때 이미지의 원점
    //     origin: new naver.maps.Point(0, 0),
    //     // 지도 위에 놓이는 마커의 위치와 일치시킬 아이콘의 기준 위치
    //     anchor: new naver.maps.Point(12, 34),
    //   },
    // });
    // // console.log(map);
  }, []);

  return (
    <div
      id='map'
      style={{
        width: "100%",
        height: "46rem",
        maxWidth: "100%",
        borderRadius: 8,
      }}
    ></div>
  );
};

export default MultipleMarkerMap;
