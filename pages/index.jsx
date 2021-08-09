
import {useEffect} from 'react'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layouts/layout'
import Swiper from '../components/commons/swiper/Swiper'
import FlipSwiper from '../components/commons/swiper/FlipSwiper'
import ItemList from '../components/commons/items/ItemList'
import Kokuban from '../components/commons/Kokuban'
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
        {/* <Header /> */}
        <Box className="wrapperVideo">
          <video id="bg-video" preload="auto" loop autoPlay muted playsInline >
            <source src="/videos/cooking.mp4" type="video/mp4"></source>
          </video>
        </Box>
        <Box className="centerBox">
          <Typography  variant="h2" className="title title-upper wf-hannari">定食屋　一富士</Typography>
        </Box>

        <Container css={StyledContainer}>
          <Box className="styledContent">
            <Typography  variant="h5" className="itemList-title">ギャラリー</Typography>
            <Box>
              <Swiper />
            </Box>
          </Box>
          <Box className="styledContent">
            <Typography  variant="h5" className="information">一富士からのお知らせ</Typography>
            <Box>
              <Kokuban />
            </Box>
          </Box>
          <Typography  variant="h5" className="itemList-title">お品書き</Typography>
          <div>
            <FlipSwiper />
          </div>
          <ItemList />
        </Container>

        <Container css={Access}>
          <Box className="styledContent">
            <Typography  variant="h5" className="information">アクセス</Typography>
            <Box className="ac-table">
              <table>
                <tr>
                  <td className="acess-title">住所</td>
                  <td>〒169-0075 東京都新宿区高田馬場４丁目３４−３</td>
                </tr>
                <tr>
                  <td className="acess-title">TEL</td>
                  <td>03-3368-0251</td>
                </tr>
                <tr>
                  <td className="acess-title">営業時間</td>
                  <td>11:00～15:00 16:00～20:00</td>
                </tr>
                <tr>
                  <td className="acess-title">定休日</td>
                  <td>土日、祝日</td>
                </tr>
                <tr>
                  <td className="acess-title">席数</td>
                  <td>カウンター 6席 / テーブル 20席</td>
                </tr>
                <tr>
                  <td className="acess-title">交通手段</td>
                  <td>JR山手線 / 西武新宿 高田馬場駅より徒歩約15分</td>
                </tr>
              </table>
            </Box>
            <Box>
              {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.701916320762!2d139.69450745062787!3d35.708952280090585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d36ae895555%3A0x91965c540d07c9ca!2z5LiA5a-M5aOr!5e0!3m2!1sja!2sjp!4v1628416628546!5m2!1sja!2sjp" width="400" height="300" style={{border: "none"}} allowfullscreen="" loading="lazy"></iframe> */}
            </Box>
          </Box>

        </Container>
      </div>

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
      top:1%;
    }
    .title{
      font-size: 3rem;
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
`;

const Access = css`
  max-width: 768px;
  margin: 0 auto;
  .styledContent{
    margin: 3rem 0;
    .ac-table{
      padding: 50px 0;
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
  }

`;