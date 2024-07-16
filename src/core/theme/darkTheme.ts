import { colors } from '../constans/colors';
import { themes } from '../constans/theme';
import { baseTheme } from './baseTheme';

export const darkTheme = {
  ...baseTheme,
  name: themes.DARK,
  colors: {
    bg: {
      primary: colors.deepSea[500],
    },
    input: {
      bg: { primary: colors.slate[500] },
    },
    card: {
      bg: {
        primary: colors.slate[500],
        secondary: colors.teal[500],
      },
    },
    btn: {
      primary: colors.limeGreen[500],
    },
    tabs: {
      bgSelected: colors.limeGreen[800],
    },
    font: {
      primary: colors.silver[50],
      secondary: colors.silver[500],
    },
    divider: {
      primary: colors.deepSea[400],
    },
  },
};
