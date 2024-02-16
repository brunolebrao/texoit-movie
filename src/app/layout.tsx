import type { Metadata } from 'next';

import { Providers } from 'provider';

export const metadata: Metadata = {
  title: 'Golden Raspberry Awards',
  description: 'Golden Raspberry Awards'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}
