import { css } from '@emotion/react'
import { Typography, Box, Container } from '@material-ui/core'

const Kokuban = () => {
  return (
    <Container css={kokuban}>
      <Typography>・営業時間について(8/9現在)</Typography>
      <Typography>　月〜金曜日</Typography>
      <Typography>　(10:00〜15:00、16:00〜20:00)</Typography>
      <Typography>・夏季休暇</Typography>
      <Typography>　8/9〜8/13</Typography>
      <Typography>・アルバイト募集しております。</Typography>
      <Typography>　年齢: 18〜60歳くらい迄</Typography>
      <Typography>　　詳細はご連絡ください。</Typography>
    </Container>
  )
}

export default Kokuban

const kokuban = css`
  position: relative;
  margin: 2em auto;
  padding: 1em;
  width: 90%; /* ボックス幅 */
  background: #004C26; /* ボックス背景色 */
  color: #fff; /* 文章色 */
  border: 8px solid #064739; /* 枠線 */
  border-radius: 3px; /* 角の丸み */
  box-shadow: 0 0 5px #333, 0 0 5px #555 inset;
  text-align: left;
  &:before,
  &:after {
    position: absolute;
    content: '';
    bottom: 0;
  } 
  &:before {
    width: 20px; 
    right: 10px;
    border: solid 3px #ffff00; /*チョーク（黄色）*/
    border-radius: 3px 2px 0 2px;
  }
  &:after {
    width: 15px; 
    right: 45px;
    border: solid 3px #fff; /*チョーク（白） */
    border-radius: 8px 5px 2px 5px;
  }
`;
