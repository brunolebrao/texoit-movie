'use client';

import Header from 'components/Header';

import { Container } from '@mui/material';
import ThemeRegistry from 'theme/ThemeRegistry';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeRegistry>
      <Header>
        <Container>{children}</Container>
      </Header>
    </ThemeRegistry>
  );
}
