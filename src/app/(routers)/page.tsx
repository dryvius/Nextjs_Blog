import Hero from "@/components/hero";
import homeJpg from "../../../public/home.jpg";
import { Metadata } from "next";

// 静态元数据 - 指定当前页面的信息
export const metadata: Metadata = {
    title: "Home",
    description: "Home page",
};

export default function Home() {
    return <Hero imgUrl={homeJpg} altText="home" content="Welcome to Home Page" />;
}
