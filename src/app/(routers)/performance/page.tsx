import Hero from "@/components/hero";
import homeJpg from "../../../../public/home.jpg";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Performance",
    description: "Performance page",
};

export default function Performance() {
    return <Hero imgUrl={homeJpg} altText="Performance" content="Welcome to Performance Page" />;
}
