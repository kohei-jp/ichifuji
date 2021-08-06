
import {useEffect} from 'react'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { css } from '@emotion/react'
import Link from 'next/link'
import Box from '@material-ui/core/Box';


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
        <div className="wrapperVideo">
          <video id="bg-video" preload="auto" loop autoPlay muted playsInline >
            <source src="/videos/cooking.mp4" type="video/mp4"></source>
          </video>
        </div>
        <div className="header-title">
          <p>タイトル</p>
        </div>
      </div>
    </Layout>
  )
}
const Wrapper = css`
  position: relative;
  /* ----- 背景用の動画ファイル ----- */
  .wrapperVideo {
    position: relative;  //横幅がウィンドウズサイズの縦幅よりもはみ出てしまう場合に、左にずらすために指定。
  }

  #bg-video {
    /* background: url('/images/profile.jpg') no-repeat; // 動画が再生を始めるまで、cssのほうでも背景を設定します。 */
    width: 100%;
    background-attachment: fixed; // 中央揃えになるように、fixed。
    background-position: center; // positionも中央に。
    background-size: cover; // 画面サイズに応じてサイズを可変するように設定。
    // z-indexは調整してください。
    z-index: 1;
  }
  /* ----- 背景の上に表示させたいコンテンツ ----- */
  .header-title{
    position: absolute; 
    top:    50%;
    bottom: 50%;
    right:  40%;
    left:   40%;
    box-shadow: 10px 10px 15px -10px;
    z-index: 100; 
    display: flex;
    width:  400px;
    height: 400px;
    border-radius: 20px;
    background-color: rgba(255,255,255,.6);
    justify-content: center;
    align-items: center;
    text-align:center;
    margin: auto;
  }
`;