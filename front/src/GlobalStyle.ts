import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
      margin:0;
      padding:0;
      box-sizing: border-box;
    }
    .swiper {
      width: 100%;
      height: 100%;
      margin-left: auto;
      margin-right: auto;
    }
    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;
      height: calc((100% - 30px) / 2) !important;
      display: flex;
      justify-content: center;
      align-items: center;
    }
`