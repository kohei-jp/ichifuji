
import React from "react";
import { css } from '@emotion/react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Typography, Container } from '@material-ui/core'
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';

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
    <div css={StyledSwiper}>
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
          <Box className="slide">
            <Box className="note">
              <Typography  variant="h5">
              <Typography  variant="h5" className="ribbon">・営業時間</Typography><br />
                　9:30 〜 20:00<br/>
                ・定休日<br/>
                　土・日曜、祝日<br/>
                　
                <p className="bottom"><QueryBuilderIcon/><span>2021年8月1日更新</span></p>
              </Typography>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box className="slide">
            <Box className="note">
              <Typography  variant="h5">
              <Typography  variant="h5" className="ribbon">・夏季休暇のご案内</Typography><br />
                　8/7 〜 8/13<br/>
                　
                <p className="bottom"><QueryBuilderIcon/><span>2021年8月1日更新</span></p>
              </Typography>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box className="slide">
            <Box className="note">
              <Typography  variant="h5">
              <Typography  variant="h5" className="ribbon">・アルバイト募集中</Typography><br />
                　9:30 〜 20:00<br/>
                　週3日以上出勤可能な方<br/>
                　18〜60歳位<br/>
                ・時給　1,025円以上
                　
                <p className="bottom"><QueryBuilderIcon/><span>2021年6月1日更新</span></p>
              </Typography>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box className="styledImage">
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
          </Box>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

const StyledSwiper = css`
  .swiper-container {
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
  }
  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 250px;
    height: 200px;
  }
  .swiper-slide img {
    display: block;
    border-radius: 10px;
    width: 100%;
    height: 200px;
  }

  .slide {
    position: relative;
    width: 250px;
    height: 200px;
    padding: 1rem;
    background-color: lightyellow;
    /* background-color: #eee9e6; */
    border-radius: 10px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    .note{
      background-image:
      linear-gradient(
        90deg,
        rgba(0,0,0,0) 0%,
        rgba(0,0,0,0) 50%,
        #ffff 50%,
        #ffff 50%
      ),
      linear-gradient(
        180deg,
        rgba(0,0,0,0) 0%,
        rgba(0,0,0,0) 97%,
        #999 97%,
        #999 100%
      );
      background-size: 8px 100%, 100% 1.7em;
      line-height:1.7;
      .ribbon {
        display: inline-block;
        position: relative;
        padding: 2px 20px;
        font-size: 18px;/*フォントサイズ*/
        color: #FFF;/*フォントカラー*/
        background: #a6d3c8;/*リボンの色*/
      }
      .ribbon:before {
        position: absolute;
        content: '';
        top: 100%;
        left: 0;
        border: none;
        border-bottom: solid 10px transparent;
        border-right: solid 15px rgb(149, 158, 155);/*折り返し部分*/
      }


    }
    .bottom {
      position: absolute;
      bottom: 5px;
      right: 10px;
      color: gray;
      font-size: 1.5rem;
      .MuiSvgIcon-root{
        vertical-align: bottom;
      }
    }
  }
`;
