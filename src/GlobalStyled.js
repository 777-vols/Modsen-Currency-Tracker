import styledColors from '@constants/styles/colors';
import paddings from '@constants/styles/paddings';
import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
html {
	box-sizing: border-box;

  ::-webkit-scrollbar {
	  width: ${paddings.twelve}px;
  }

  ::-webkit-scrollbar-track {
	  background: ${styledColors.darkGreyColor};
  }

  ::-webkit-scrollbar-thumb {
	  background: ${styledColors.greenColor};
	  border-radius: 10px;
	  border: 1px solid ${styledColors.greyColor};
  }
}

*,
*::after,
*::before {
	box-sizing: inherit;
}

ul[class],
ol[class] {
	padding: ${paddings.zero};
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
	margin: ${paddings.zero};
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
