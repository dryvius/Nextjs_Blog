import Hero from "@/components/hero";
import homeJpg from "../../../../public/home.jpg";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Reliability",
    description: "Reliability page",
};

export default function Reliability() {
    return <Hero imgUrl={homeJpg} altText="Reliability" content="Welcome to Reliability Page" />;
}
