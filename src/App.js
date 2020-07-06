/** @jsx jsx */

import { useState } from 'react';
import { jsx, css } from '@emotion/core';
import background from './static/background.jpg';
import logo from './static/Bitmap.png'
import fblogo from './static/fblogo.png'
import notice from './static/notice_number.png'
import triangle from './static/Triangle.png'

const styles = {
  wrapper: css`
    display: flex;
    width: 100%;
    height:100vh;
    background-image: url(${background});
    background-size: cover;
    background-position: center;
    align-items: center;
    justify-content: center;
  `,
  box: css`
  position: relative;
    box-sizing:border-box;
    display: flex;
    background-color: white;
    width: 420px;
    height:594px;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
  boxwrapper: css`
    max-width:250px;
    padding-top:56px;
  `,
  logowrapper: css`
    box-sizing:border-box;
    display: flex;
    flex-Direction: column;
    align-Items: center;
    justify-Content: center;
    padding: 1px 0 0 0;
    width: 100%;
  `,
  logo:css`
    width:210px;
    height:65px;
  `,
  logoTitle: css`
    letter-spacing: 3px;
    font-size: 16px;
    color: #000;
    padding: 34px 0 93px 0;
  `,
  boxcontent: css`
    display: flex;
    height:214px;
    width: 250px;
    /* flex-grow: 1; // 容器宽度变大时，占满剩余空间
    flex-shrink: 0; // 容器宽度变小时，不收缩 */
    flex-wrap:wrap;
    align-content:space-between;
  `,
  inputcontent:css`
    font-size: 13px;
    letter-spacing:1px;
    padding-left:10px;
    background-color:#FAFAFA;
    border: 1px solid #D0D0D0;
    box-sizing: border-box;
    width:100%;
  `,
  Btns:css`
    outline:none;
    border: none;
    box-sizing:border-box;
    height: 40px;
    width: 250px;
    max-width:250px;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  BtnsError:css`
    -moz-outline:2px solid red;
    -moz-outline-radius: 3px;
    box-shadow: 0 0 0 1px #D7263D;
    border: none;
`,
  loginBTN:css`
    width:250px;
    max-width:250px;
    background-color:#1CC1D0;
    color:#1CC1D0;
  `,
  fbloginBTN:css`
    width:250px;
    max-width:250px;
    background-color:#4266B2;
    color: #4266B2;
    position:relative;
  `,
  fblogo:css`
    width:30px;
    height:30px;
    border: 1px dashed #fff;
    position:absolute;
    left:10px;
    top:4px;
  `,
  buttonText:css`
    font-size:16px;
    font-weight:bold;
    letter-spacing:6px;
    color:#fff;
    display: flex;
  `,
  fbbuttonText:css`
    letter-spacing:0;
  `,
  boxBottom:css`
    padding: 24px 0 16px 0;
  `,
  PasswordSecLine:css`
    height:14px;
    background-color:#D8D8D8;
    width:1px;
    display:flex;
    align-self:center;
  `,
  linkIdWrapper:css`
    height: 20px;
    display: flex;
    justify-content:center;
  `,
  linkIdText:css`
    font-size:13px;
    color:#9B9B9B;
    letter-spacing: 2px;
    padding: 0 20px;
  `,
  linkIdButton:css`
    border: 0;
    background-color:transparent;
    outline:none;
    cursor: pointer;
  `,
  linkIdRegister:css`

  `,
  linkIdForgetPwd:css`
    
  `,
  contactNum:css`
    display:flex;
    justify-content:center;
    font-size:12px;
    letter-spacing:1px;
    padding-top:40px;
    color:#4A4A4A;
  `,
  loginErrorSec:css`
    margin-top:-37px;
    padding-bottom:20px;
    display:flex;
    align-items:center;
    letter-spacing:1px;
  `,
  loginError:css`
    font-size:12px;
    color:#D7263D;
  `,
  loginErrorIcon:css`
    width:16px;
    height:16px;
    padding-right:9px;
  `,
  resetPassword:css`
    display: flex;
    justify-content: center;
    align-items: center;
    position:absolute;
    top:11px;
    left:16px;
  `,
  resetPasswordＴitle:css`
    padding: 0 0 0 16px;
    font-size:16px;
    letter-spacing:1px;
  `,
  resetPasswordBox:css`
    position: absolute;
    top: 270px;
    left: 85px;
    width:250px;
  `,
  resetPasswordText:css`
    font-size:13px;
    letter-spacing:1px;
    flex-shrink:0;
  `,
  resetInputcontent:css`
    color: #989898;
  `,
  resetBtns:css`
    margin: 19px 0 18px 0;
    height:40px;
    outline:none;
    border-radius:3px;
    flex-shrink: 0;
  `,
  sentEmailBox:css`
  position: absolute;
  top: 270px;
  left: 85px;
  width:250px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`,
}

function Login() {
  const [loginSuccess, setloginSuccess] = useState(true);
  const [forgetPassword, setforgetPassword] = useState(true);
  const [sentEmail, setsentEmail] = useState(true);

  return (
    <div css={styles.wrapper}>
      <div css={styles.box}>
          {forgetPassword ? (
          <div id="mainloginPage" css={styles.boxwrapper}>
            <div css={styles.logowrapper}>
              <img src={logo} css={styles.logo} alt="兩廳院logo"/>
              <span css={styles.logoTitle}>節目排檔系統</span>
            </div>
            {loginSuccess ? null : (
              <div css={styles.loginErrorSec}>
              <img src={notice} css={styles.loginErrorIcon} alt="Error Icon"/>
              <span css={styles.loginError}>帳號或密碼錯誤，請重新輸入</span>
            </div>
            )}
            <div css={styles.boxcontent}>
              <input type="text" css={[styles.Btns, styles.inputcontent]} />
              <input type="password" css={[styles.Btns, styles.inputcontent]} />
              <button
                type="button"
                onClick={() => setloginSuccess(!loginSuccess)} 
                css={[styles.Btns, styles.loginBTN]}>
                <span css={styles.buttonText}>登入</span>
              </button>
              <button 
                type="button"
                css={[styles.Btns, styles.fbloginBTN]}>
                <img src={fblogo} css={styles.fblogo} alt="FBlogo" />
                <span css={[styles.buttonText, styles.fbbuttonText]}>Facebook登入</span>
              </button>
            </div>
            <div css={styles.boxBottom}>
              <div css={styles.linkIdWrapper}>
                <button
                  type="button"
                  css={styles.linkIdButton}>
                  <span css={[styles.linkIdText, styles.linkIdRegister]}>申請帳號</span>
                </button>
                <div css={styles.PasswordSecLine}></div>
                <button
                  type="button" 
                  onClick={() => setforgetPassword(!forgetPassword)}
                  css={styles.linkIdButton}>
                  <span css={[styles.linkIdText, styles.linkIdForgetPwd]}>忘記密碼？</span>
                </button>
              </div>
              <span css={styles.contactNum}>客服電話：(02)8877-6655</span>
            </div>
          </div>
          ) : (
          <div id="resetPasswordSec">
            {sentEmail ? (
              <fragment>
                <div css={styles.resetPassword}>
                  <img src={triangle} alt="三角形符號"/>
                  <span css={styles.resetPasswordＴitle}>重置帳號密碼</span>
                </div>
                <div css={styles.resetPasswordBox}>
                  <span css={styles.resetPasswordText}>請輸入註冊的電子信箱：</span>
                  <input type="text" value={"註冊的電子信箱"} css={[styles.inputcontent, styles.resetBtns, styles.resetInputcontent]}/>
                  <button 
                    type="button"
                    onClick={() => setsentEmail(!sentEmail)}
                    css={[styles.Btns, styles.loginBTN]}>
                    <span css={styles.buttonText}>下一步</span>
                  </button>
                </div>
            </fragment>
            ) : (
            <div css={styles.sentEmailBox}>
              <span css={styles.resetPasswordText}>請到您申請帳號的信箱中收取認證信</span>
              <button 
                type="button"
                onClick={() => setforgetPassword(!forgetPassword)}
                css={[styles.Btns, styles.loginBTN, styles.resetBtns]}>
                <span css={styles.buttonText}>回登入頁</span>
              </button>
            </div>
            )}
          </div>
          )}
      </div>
    </div>
  );
}

export default Login;
