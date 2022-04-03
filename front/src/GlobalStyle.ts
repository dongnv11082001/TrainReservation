import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    user-select: none;
  }
  ::-webkit-scrollbar{
    display: none;
  }
  img{
    width:100%;
    height:100%;
    object-fit: cover;
  }
  .login-form {
  max-width: 300px;
  }
  .login-form-forgot {
    float: right;
  }
  .login-form-forgot {
    float: left;
  }
  .ant-list-items{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 10px;
    padding: 2rem 5%;
  }
  .ant-spin-container,.ant-spin-nested-loading,.ant-list{
    width: 100% !important;
  }
`

export const TextSize20 = styled.div`
  font-size: 20px;    
`