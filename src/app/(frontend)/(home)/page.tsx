import Image from "next/image";
import Homenav from "./homenav";
import homeStyle from "./home.module.css"

export default function Home() {
    
  return (
      <main>
      <div className="mt-7 mb-5 grid grid-cols-2 gap-4 pl-10 pr-10">
        <div className={`grid grid-cols-subgrid row-span-6 ${homeStyle.textStroke} ${homeStyle.linkNavAnimation} gap-2`}>
          <Homenav />
        </div>
        <div className={`bg-[#e8772f]/70 p-10 grid-cols-1 grid grid-col-subgrid col-start-2 ml-10 ${homeStyle.newsBox}`}>
          <div className="bg-[#FFFF]/75 rounded-xl text-black p-10">
            <h2 className="font-bold text-xl">What's New With Zene?</h2>
            <hr />
            <div className="mt-5">
              <p className="font-lexend mb-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, totam repellendus. Nihil porro velit quasi?
            </p>
            <p className="font-lexend mb-2">
              Newest Blog Post Preview
            </p>
            </div>
          </div>
        </div>
        </div>
      </main>
  );
}
