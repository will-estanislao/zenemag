import Image from "next/image";
import Homenav from "./homenav";
import '@/app/globals.css';

export default function Home() {

  // Hover related stuff 

  return (
      <main>
        <div className="mt-5 mb-5 grid grid-cols-2 gap-10 pl-10 pr-10">
          <Homenav />
        <div className="bg-[#e8772f] p-10 h-25 md:h-50">
          <div className="bg-[#FFFF]/75 rounded-xl text-black p-10">
            <h2>News container</h2>
            <p className="font-lexend">
              Current news / blog post
            </p>
          </div>
          </div>
        </div>
      </main>
  );
}
