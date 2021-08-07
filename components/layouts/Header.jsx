import { css } from '@emotion/react'
import Image from 'next/image'

const Header = () => {
  return (
    <div css={StyledHeader}>
      <Image src={"/images/logo_transparent.png"} alt="logo" width={120} height={80} />
    </div>
  )
}

export default Header

const StyledHeader = css`
  position: absolute;
  z-index: 100;
  height: 65px;
  width: 100%;
  background-color: rgba(255,255,255,.3);
  top: 0;
  display: flex;
  justify-content: space-between;
  img{
    height: 95%;
    margin: 0 0 0 1rem;
  }
  .logo{
    font-family: 'Alegreya Sans SC', sans-serif;
  }
  
`