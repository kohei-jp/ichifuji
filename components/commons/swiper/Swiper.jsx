
import React from "react";
import { css } from '@emotion/react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Typography, Container } from '@material-ui/core'

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css"
import "swiper/components/pagination/pagination.min.css"

// import Swiper core and required modules
import SwiperCore, {
  EffectCoverflow,Pagination
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([EffectCoverflow,Pagination]);

export default function App() {
  return (
    <>
      <Swiper effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={'auto'} 
        coverflowEffect={{
          "rotate": 50,
          "stretch": 0,
          "depth": 100,
          "modifier": 1,
          "slideShadows": true
        }} 
        pagination={true} 
        className="mySwiper"
      >
        <SwiperSlide>
          <Box css={slide}>
            <Typography  variant="body">
              ・営業時間<br/>
              　9:30 〜 20:00<br/>
              ・定休日<br/>
              　土・日曜、祝日<br/>
            </Typography>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box css={slide}>
            <Typography  variant="body">
              ・アルバイト募集中<br/>
              　9:30 〜 20:00<br/>
              　週3日以上出勤可能な方
              　18〜60歳位
              ・時給<br/>
              　1,025円以上
            </Typography>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box css={slide}>
            <Typography  variant="body">
              ・アルバイト募集中<br/>
              　9:30 〜 20:00<br/>
              　週3日以上出勤可能な方
              　18〜60歳位
              ・時給<br/>
              　1,025円以上
            </Typography>
          </Box>
        </SwiperSlide>
        <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-2.jpg" /></SwiperSlide>
        <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-3.jpg" /></SwiperSlide>
      </Swiper>
    </>
  )
}

const slide = css`
  width: 200px;
  height: 200px;
  padding: 1rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;