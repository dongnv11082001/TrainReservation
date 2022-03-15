import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    user-select: none;
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
`

export const FormWrapper = styled.div`
  width: 480px;
`