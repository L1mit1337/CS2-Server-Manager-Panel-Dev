import type { Metadata } from 'next'
import "./globals.css";
import localFont from "next/font/local";

const myFont = localFont({
    src: './Alibaba-PuHuiTi-Medium.ttf',
    display: 'swap',
})

export const metadata: Metadata = {
    title: 'CSGO服务器管理面板',
    description: '作者:L1mit',
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ch" data-theme="dark" className={myFont.className}>
      <body >

        {children}
      </body>
    </html>
  );
}
