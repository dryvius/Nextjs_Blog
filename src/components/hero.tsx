import Image, { StaticImageData } from "next/image";

interface HeroProps {
    imgUrl: StaticImageData;
    altText: string;
    content: string;
}

export default function Hero(props: HeroProps) {
    return (
        <div className="relative h-screen bg-red-500">
            <div className="absolute inset-0">
                <Image src={props.imgUrl} alt={props.altText} fill style={{ objectFit: "cover" }} />
                <div className="absolute inset-0 bg-gradient-to-r from-black/100"></div>
            </div>
            <div className="flex items-center justify-center h-full">
                <h1 className="text-white text-6xl z-10">{props.content}</h1>
            </div>
        </div>
    );
}
