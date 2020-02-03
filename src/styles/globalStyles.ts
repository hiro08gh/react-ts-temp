import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyles = createGlobalStyle`
  ${normalize}
  * {
    box-sizing: border-box;
  }
  html,
  body {
    background-color: #FFF;
    color: #333;
    font-size:62.5%;
    font-kerning: normal
    font-family: Verdana, Roboto, 'Droid Sans', '游ゴシック', YuGothic, 'メイリオ', Meiryo,
		'ヒラギノ角ゴ ProN W3', 'Hiragino Kaku Gothic ProN', 'ＭＳ Ｐゴシック', sans-serif;
    line-height: 1.5;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    width: 100%;
  }
  a {
    text-decoration: none;
    cursor: pointer;
  }
  p,
  dl,
  ol,
  ul,
  pre,
  blockquote {
    margin-top: 1em;
    margin-bottom: 1em;
  }
  ul {
    
    padding-left: 0;
  }
  li {
    list-style: none;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 500;
    line-height: 1.25;
    margin-top: 1em;
    margin-bottom: 0.5em;
  }
  p {
    font-size: 1.6rem;
  }
  h1 { font-size: 2.25em; }
  h2 { font-size: 2.4rem; }
  h3 { font-size: 1.25em; }
  h4 { font-size: 1em; }
  h5 { font-size: 0.875em; }
  h6 { font-size: 0.75em; }
  input {
      text-rendering: auto;
      color: initial;
      letter-spacing: normal;
      word-spacing: normal;
      text-transform: none;
      text-indent: 0px;
      text-shadow: none;
      display: inline-block;
      text-align: start;
      margin: 0em;
      font: 400 13.3333px Arial;
  }
  button {
    outline: none;
  }
`;
