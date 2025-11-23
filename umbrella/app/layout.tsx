import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Umbrella - التسوق العالمي المبسط",
  description: "منصة الشحن الدولي الأولى في ليبيا - تسوق من AliExpress, Alibaba, SHEIN و Taobao",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
