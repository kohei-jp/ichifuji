
import {useEffect} from 'react'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layouts/layout'
import Swiper from '../components/commons/swiper/Swiper'
import Header from '../components/layouts/Header'
import Image from 'next/image'
import { css } from '@emotion/react'
import Link from 'next/link'
import Box from '@material-ui/core/Box';
import { Typography, Container } from '@material-ui/core'


export default function Home() {

  useEffect(() => {
    const video = document.getElementById("bg-video");
    video.play();
  },[]);

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div css={Wrapper}>
        <Header />
        <Box className="wrapperVideo">
          <video id="bg-video" preload="auto" loop autoPlay muted playsInline >
            <source src="/videos/cooking.mp4" type="video/mp4"></source>
          </video>
        </Box>
        <Box className="centerBox">
          <Typography  variant="h2" className="title title-upper">定食屋　一富士</Typography>
        </Box>
        <Container css={StyledContainer}>
          <Box className="styledContent">
            <Typography  variant="h5" className="information">一富士からのお知らせ</Typography>
            <Box>
              <Swiper />
            </Box>
          </Box>
          <Box className="styledContent">
            <Typography  variant="h5" className="concept">Information</Typography>
            <Box>
              <Typography  variant="h2" className="concept_content">The Experience</Typography>
            </Box>
          </Box>

        </Container>
      </div>




        {/* <div className="header-title">
          <img src="/images/logo_transparent.png" />
        </div> */}
    </Layout>
  )
}
const Wrapper = css`
  position: relative;
  .wrapperVideo {
    z-index: 1;
    #bg-video {
      /* background: url('/images/profile.jpg') no-repeat; // 動画が再生を始めるまで、cssのほうでも背景を設定します。 */
      width: 100%;
      background-attachment: fixed; // 中央揃えになるように、fixed。
      background-position: center; // positionも中央に。
      background-size: cover; // 画面サイズに応じてサイズを可変するように設定。
      z-index: 1;
    }
  }
  .centerBox{
    position: absolute;
    top: 20%;
    right: 50%;
    left: 50%;
    z-index: 100;
  }
  .title{
    z-index: 100;
    color: #fff;
    writing-mode: vertical-rl;
  }
`;

const StyledContainer = css`
  max-width: 800px;
  margin: 0 auto;
  .styledContent{
    margin: 3rem 0;
    .information{
      text-align: right;
    }
  }
`;