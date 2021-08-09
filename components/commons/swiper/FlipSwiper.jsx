
import React, { useRef, useState } from "react";
import { css } from '@emotion/react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Typography, Container } from '@material-ui/core'
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-flip/effect-flip.min.css"
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"


// import Swiper core and required modules
import SwiperCore, {
  EffectFlip,Pagination,Navigation
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([EffectFlip,Pagination,Navigation]);


export default function FlipSwiper() {

  return (
    <Container css={StyledContainer}>
      {/* <Typography variant="h5">Menu</Typography> */}
      <div css={Flip}>
        <Swiper effect={'flip'} grabCursor={true} pagination={true} navigation={true} className="mySwiper">
          <SwiperSlide><img src="/images/menu.png"/></SwiperSlide>
          <SwiperSlide><img src="/images/menu.png"/></SwiperSlide>
        </Swiper>
      </div>  
    </Container>
  )
}

const StyledContainer = css`
  margin: 50px 0;
`;

const Flip = css`
  margin: 2rem 0;
  .swiper-container {
    max-width: 700px;
    max-height: 500px;
    /* padding: 0 50px; 矢印分のスペースを削除 */
    padding: 0;

    @media (max-width: 475px) {
      .swiper-button-prev,
      .swiper-button-next{
        --swiper-navigation-size: 24px;
      }
    }
  }

  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100%;
    /* max-width: 600px !important;
    height: 600px; */
    img{
      width: 100%;
      /* max-width: 600px !important;
      height: 600px; */
    }
  }

  .swiper-slide img {
    // swiper-containerの width - padding の値
    display: block;
    max-width: 700px;
    max-height: 500px;
  }
`;