'use client';

import { Roboto } from 'next/font/google';

import { NextAppDirEmotionCacheProvider } from './EmotionCache';

import { CssBaseline } from '@mui/material';
import { createTheme, ThemeOptions, ThemeProvider } from '@mui/material/styles';
const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin']
});

const themeOptions: ThemeOptions = {
  typography: {
    fontFamily: roboto.style.fontFamily,
    fontSize: 12
  },
  palette: {
    background: {
      default: '#a1a1a1f'
    }
  }
};

const theme = createTheme(themeOptions);

export default function ThemeRegistry({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
