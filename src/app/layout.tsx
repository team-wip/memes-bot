import '@/styles/globals.css';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { Roboto } from 'next/font/google';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/styles/theme';
import AppNavbar from '@/components/layout/AppNavbar';
import Header from '@/components/layout/Header';
import SideMenu from '@/components/layout/SideMenu';
import { Box, Stack } from '@mui/material';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={roboto.variable}>
      <body className="bg-slate-100">
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
          <Box sx={{ display: 'flex' }}>
            <SideMenu />
            <AppNavbar />
              <Stack
                spacing={2}
                sx={{
                  alignItems: 'center',
                  mx: 3,
                  pb: 5,
                  mt: { xs: 8, md: 0 },
                  width: '100%',
                }}
              >
                <Header />
                {children}
              </Stack>
          </Box>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
};