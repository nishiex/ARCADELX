import type { Metadata } from "next";
import localFont from 'next/font/local';

const bricolage = localFont({
  src: [
    { path: '../public/fonts/Bricolage_Grotesque/BricolageGrotesque-ExtraLight.ttf', weight: '200', style: 'normal' },
    { path: '../public/fonts/Bricolage_Grotesque/BricolageGrotesque-Light.ttf', weight: '300', style: 'normal' },
    { path: '../public/fonts/Bricolage_Grotesque/BricolageGrotesque-Regular.ttf', weight: '400', style: 'normal' },
    { path: '../public/fonts/Bricolage_Grotesque/BricolageGrotesque-Medium.ttf', weight: '500', style: 'normal' },
    { path: '../public/fonts/Bricolage_Grotesque/BricolageGrotesque-SemiBold.ttf', weight: '600', style: 'normal' },
    { path: '../public/fonts/Bricolage_Grotesque/BricolageGrotesque-Bold.ttf', weight: '700', style: 'normal' },
    { path: '../public/fonts/Bricolage_Grotesque/BricolageGrotesque-ExtraBold.ttf', weight: '800', style: 'normal' }
  ],
  variable: '--font-display',
  display: 'swap',
});

const spaceGrotesk = localFont({
  src: [
    { path: '../public/fonts/Space_Grotesk/SpaceGrotesk-Light.ttf', weight: '300', style: 'normal' },
    { path: '../public/fonts/Space_Grotesk/SpaceGrotesk-Regular.ttf', weight: '400', style: 'normal' },
    { path: '../public/fonts/Space_Grotesk/SpaceGrotesk-Medium.ttf', weight: '500', style: 'normal' },
    { path: '../public/fonts/Space_Grotesk/SpaceGrotesk-SemiBold.ttf', weight: '600', style: 'normal' },
    { path: '../public/fonts/Space_Grotesk/SpaceGrotesk-Bold.ttf', weight: '700', style: 'normal' }
  ],
  variable: '--font-body',
  display: 'swap',
});

import "./globals.css";

export const metadata: Metadata = {
  title: "ArcadeLX | Move different",
  description: "The next-generation motion-sensing gaming kiosk.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={bricolage.variable + ' ' + spaceGrotesk.variable}><head><link rel="stylesheet" href="/.tailwind-generated.css" /></head><body>{children}</body></html>
  );
}



