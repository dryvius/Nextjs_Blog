import Hero from "@/components/hero";
import homeJpg from "../../../../public/home.jpg";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Scale",
    description: "Scale page",
};

export default function Scale() {
    return <Hero imgUrl={homeJpg} altText="Scale" content="Welcome to Scale Page" />;
}
