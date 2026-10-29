import Image from "next/image";
import Homenav from "./homenav";
import homeStyle from "./home.module.css"
import { fetchFirstPost } from "@/lib/payloadPosts";
import Link from "next/link";

export default async function Home() {

  const allPosts = await fetchFirstPost();
  const post = allPosts.map(data =>
    <div key={0} className="flex">
      <Link href={`/blog/archive/${data.id}`} className="font-lexend font-bold text-[#4e758b] hover:text-[#3f8ae4] text-xs md:text-sm lg:text-base">
        {data.title} - {new Date(data.createdAt).toLocaleDateString()}
      </Link>
      <p className="ml-2 font-extrabold animate-bounce text-[#e14b57] text-shadow-xs">NEW! </p>
      </div>
  );
    
  return (
      <main>
      <div className="mt-7 mb-5 flex justify-between min-w-full flex-wrap-reverse md:flex-wrap-reverse lg:flex-nowrap">
        <div className={`${homeStyle.textStroke} flex flex-col grow`}>
          <Homenav />
        </div>
        <div className="grow-0 lg:ml-5 ml-0 lg:w-1/2 w-full mb-5">
        <div className={`bg-[#e8772f]/70 p-10 ${homeStyle.newsBox}`}>
          <div className="bg-[#FFFF]/75 rounded-xl text-black p-10">
            <h2 className="font-bold text-xl">What's New With Zene?</h2>
            <hr />
            <div className="mt-5">
              <p className="font-lexend mb-5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, totam repellendus. Nihil porro velit quasi?
              </p>
              {post}
            </div>
          </div>
          </div>
          </div>
        </div>
      </main>
  );
}