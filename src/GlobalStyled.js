import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
html {
	box-sizing: border-box;

  ::-webkit-scrollbar {
	  width: 12px;
  }

  ::-webkit-scrollbar-track {
	  background: rgb(39, 39, 39);
  }

  ::-webkit-scrollbar-thumb {
	  background: rgb(22, 218, 12);
	  border-radius: 10px;
	  border: 1px solid rgb(39, 39, 39);
  }
}

*,
*::after,
*::before {
	box-sizing: inherit;
}

ul[class],
ol[class] {
	padding: 0;
}

ul[class] {
	list-style: none;
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ul,
ol,
li,
figure,
figcaption,
blockquote,
dl,
dd {
	margin: 0;
	font-size: inherit;
}

input,
button,
textarea,
select {
	font: inherit;
}

a {
	text-decoration: none;
}`;

export default Global;
