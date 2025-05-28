import { notFound } from "next/navigation";

export default function TestPage() {
    // 局部的 404 页面，需要通过调用 notFound 函数来触发最近的 not-found 页面文件
    notFound();

    return <div></div>;
}
