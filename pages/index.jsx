import React,{ useState, useRef } from 'react';
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layouts/layout'
import Swiper from '../components/commons/swiper/Swiper'
import FlipSwiper from '../components/commons/swiper/FlipSwiper'
import ItemList from '../components/commons/items/ItemList'
import FadeIn from '../components/commons/fadeIn'
// import Loader from '../components/commons/loader'
import Kokuban from '../components/commons/Kokuban'
// import Header from '../components/layouts/Header'
import Footer from '../components/layouts/Footer'
import { css } from '@emotion/react'
import Box from '@material-ui/core/Box';
import { Typography, Container } from '@material-ui/core'


export default function Home() {
  const el = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [sp, setSp] = useState(true);

  // React.useEffect(()=> {
  //   setSp(isSmartPhone());
  // },[])

  React.useEffect(()=> {
    if (el.current){
      setTimeout(
        function () {
          setVideoLoaded(true);
        }, "1000"
      )
    }
  },[el.current])

  const isSmartPhone = () => {
    if (process.browser) { 
      if (navigator.userAgent.match(/iPhone|Android.+Mobile/)) {
        return true;
      } else {
        return false;
      }
    }
  }

  return (
      <Layout home>

        <Head>
          <title>{siteTitle}</title>
        </Head>
        <div css={Wrapper}>
          {/* <Header /> */}
          <Box className="videoBox">
            <video id="bg-video" ref={el} autoPlay muted playsInline loop >
              {/* <source src={sp ? "/videos/spTop.mp4" : "/videos/pcTop.mp4"} type="video/mp4"></source> */}
              <source src="/videos/pcTop.mp4" type="video/mp4"></source>
              Sorry, your browser doesn't support embedded videos.
            </video>
          </Box>
          <Box className="centerBox">
            { videoLoaded &&
              <FadeIn><Typography  variant="h2" className="title title-upper wf-hannari">定食屋　一富士</Typography></FadeIn>
            }
          </Box>
          { videoLoaded && 
          <>
            <Container css={StyledContainer}>
              <FadeIn>
                <Box className="styledContent gallery">
                  <Typography  variant="h5" className="itemList-title">ギャラリー</Typography>
                    <Swiper />
                </Box>
              </FadeIn>
              <Box className="styledContent">
                <Typography  variant="h5" className="information">一富士からのお知らせ</Typography>
                  <FadeIn>
                    <Kokuban />
                  </FadeIn>
              </Box>
              <Box className="styledContent">
                <Typography  variant="h5" className="itemList-title">お品書き</Typography>
                <FadeIn>
                  <FlipSwiper />
                </FadeIn>
              </Box>
              <Box className="styledContent">
                <FadeIn>
                  <ItemList />
                </FadeIn>
              </Box>
            </Container>

            <Container css={Access}>
              <Box className="styledContent">
                <Typography  variant="h5" className="information">アクセス</Typography>
                <FadeIn>
                  <Box className="ac-table ">
                    <table>
                      <tbody>
                        <tr>
                          <td className="acess-title">住所</td>
                          <td><span className="inline">〒169-0075</span><span className="inline">新宿区高田馬場4-34−3</span></td>
                        </tr>
                        <tr>
                          <td className="acess-title">TEL</td>
                          <td>03-3368-0251</td>
                        </tr>
                        <tr>
                          <td className="acess-title">営業時間</td>
                          <td>11:00～15:00,16:00～20:00</td>
                        </tr>
                        <tr>
                          <td className="acess-title">定休日</td>
                          <td>土日、祝日</td>
                        </tr>
                        <tr>
                          <td className="acess-title">席数</td>
                          <td><span className="inline">カウンター6席/</span><span className="inline"> テーブル20席</span></td>
                        </tr>
                        <tr>
                          <td className="acess-title">交通手段</td>
                          <td><span className="inline">JR山手線 / 西武新宿</span> <span className="inline">高田馬場駅より徒歩約15分</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </Box>
                  <Box>
                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.701916320762!2d139.69450745062787!3d35.708952280090585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d36ae895555%3A0x91965c540d07c9ca!2z5LiA5a-M5aOr!5e0!3m2!1sja!2sjp!4v1628416628546!5m2!1sja!2sjp" width="400" height="300" style={{border: "none"}} allowfullscreen="" loading="lazy"></iframe> */}
                  </Box>
                </FadeIn>
              </Box>
            </Container>
          </>}
        </div>
        { videoLoaded && <Footer />}
      </Layout>
  )
}
const Wrapper = css`
  position: relative;
  .videoBox{
    position: relative;
    padding-top: 56.25%;
  }
  #bg-video {
    position: absolute;
    top: 0;
    width: 100%;
    /* height: 56.25vw; */
    background-attachment: fixed; // 中央揃えになるように、fixed。
    background-position: center; // positionも中央に。
    background-size: cover; // 画面サイズに応じてサイズを可変するように設定。
    z-index: 1;
  }
  .centerBox{

    position: absolute;
    top: 5rem;
    right: 50%;
    left: 50%;
    z-index: 100;
  }
  .title{
    font-family: "M PLUS 1p";
    z-index: 100;
    color: #fff;
    writing-mode: vertical-rl;
  }
  @media (max-width: 475px) {
    .centerBox{
      top: .5%;
    }
    .title{
      font-size: 2.5rem;
    }
  } 
`;

const StyledContainer = css`
  max-width: 768px;
  margin: 0 auto;
  .styledContent{
    margin: 3rem 0;
    .information{
      margin: 1rem 0;
      text-align: right;
    }
    .concept{
      margin: 1rem 0;
    }
  }
  .itemList-title{
    margin: 1rem 0;
    text-align: left;
  }
  .gallery{
    min-height: 260px;
  }
`;

const Access = css`
  max-width: 768px;
  margin: 0 auto;
  .styledContent{
    margin: 3rem 0;
    .ac-table{
      padding: 25px 0 50px 0;
      text-align: left;
    }
    .information{
      margin: 1rem 0;
      text-align: right;
    }
    .concept{
      margin: 1rem 0;
    }
    .acess-title {
      width: 20%;
    }
    .inline{
      display: inline-block;
    }
    @media (max-width: 475px) {
      .acess-title {
        width: 25%;
      }
    }
  }

`;