import Header from "@/components/header";
import { ADLaM_Display } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// google 字体
const adlam = ADLaM_Display({
    subsets: ["latin"],
    weight: "400",
});
// 自定义字体
const myFont = localFont({
    src: "./fonts/UISDC-BiaoTiHei.ttf",
    display: "swap",
});

// layout 是服务端组件
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={myFont.className}>
                {/* header */}
                <Header />

                {children}
            </body>
        </html>
    );
}
