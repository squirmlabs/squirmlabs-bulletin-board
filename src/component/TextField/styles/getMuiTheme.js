import merge from 'lodash.merge';
import { darken, fade, emphasize, lighten } from '../utils/colorManipulator';
import lightBaseTheme from './baseThemes/lightBaseTheme';
import zIndex from './zIndex';
import autoprefixer from '../utils/autoprefixer';
import callOnce from '../utils/callOnce';
import rtl from '../utils/rtl';
import compose from 'recompose/compose';
import {
  red500, grey400, grey500, grey600, grey700,
  transparent, lightWhite, white, darkWhite, lightBlack, black,
} from './colors';

/**
 * Get the MUI theme corresponding to a base theme.
 * It's possible to override the computed theme values
 * by providing a second argument. The calculated
 * theme will be deeply merged with the second argument.
 */
export default function getMuiTheme(muiTheme, ...more) {
  muiTheme = merge({
    zIndex,
    isRtl: false,
    userAgent: undefined,
  }, lightBaseTheme, muiTheme, ...more);

  const {spacing, fontFamily, palette} = muiTheme;
  const baseTheme = {spacing, fontFamily, palette};

  muiTheme = merge({
    textField: {
      textColor: palette.textColor,
      hintColor: palette.disabledColor,
      floatingLabelColor: palette.disabledColor,
      disabledTextColor: palette.disabledColor,
      errorColor: red500,
      focusColor: palette.primary1Color,
      backgroundColor: 'transparent',
      borderColor: palette.borderColor,
    },
  }, muiTheme, {
    baseTheme, // To provide backward compatibility.
    rawTheme: baseTheme, // To provide backward compatibility.
  });

  const transformers = [autoprefixer, rtl, callOnce].map((t) => t(muiTheme))
    .filter((t) => t);
  muiTheme.prepareStyles = compose(...transformers);

  return muiTheme;
}
