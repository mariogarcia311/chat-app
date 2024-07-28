import 'styled-components/native';
import { darkTheme } from '../src/core/theme/darkTheme';

type ThemeInterface = typeof darkTheme;
declare module 'styled-components/native' {
  export interface DefaultTheme extends ThemeInterface {}
}

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeInterface {}
}
