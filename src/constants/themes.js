import breakPonts from './styles/breakPoints';
import styledColors from './styles/colors';
import fonts from './styles/fonts';
import margins from './styles/margins';
import paddings from './styles/paddings';

const commonStyles = {
  colors: {
    ...styledColors
  },
  media: {
    ...breakPonts
  },
  fontFamily: fonts.fontFamily,
  fontWeight: fonts.fontWeight,
  fontSize: {
    ...fonts.fontSizes
  },
  padding: { ...paddings },
  margin: { ...margins }
};

export const lightTheme = {
  background: styledColors.lightBg,
  color: styledColors.lightFontColor,
  ...commonStyles
};

export const darkTheme = {
  background: styledColors.darkBg,
  color: styledColors.darkFontColor,
  ...commonStyles
};
