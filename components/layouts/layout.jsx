import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../../styles/utils.module.css'
import Link from 'next/link'
import { css } from '@emotion/react'
import {useEffect} from 'react'
import Container from '@material-ui/core/Container';

const name = 'Ichifuji'
export const siteTitle = '一富士'

export default function Layout({ children, home }) {

  return (
    <div css={container}>
      <link href="https://fonts.googleapis.com/earlyaccess/hannari.css" rel="stylesheet" />
      <main>{children}</main>
    </div>
  )
}

const container = css`
  .header{
    z-index: 100;
    height: 60px;
    /* background-color: rgb(245,199,104); */
    background-color: rgba(255,255,255,.9);
    img{
      height: 100%;
    }
  }
`;

