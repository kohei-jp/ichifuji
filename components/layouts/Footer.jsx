
import { css } from '@emotion/react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div css={footer}>
      <p>Copyright ichifuji all rights reserved 2021</p>
    </div>
  )
};

export default Footer;

const footer = css`
  font-family: "Hannari";
  display: flex;
  justify-content: center;
  width: 100%;
  height: 60px;
`;