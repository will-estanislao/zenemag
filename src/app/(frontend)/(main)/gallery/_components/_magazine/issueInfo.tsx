import Link from "next/link";
import Image from "next/image";
import galleryStyle from '../../gallery.module.css'
import { getCoverImgUrl } from '../../_utils/utils';

export default function IssueInfo({ issueDetails }: { issueDetails: any }) {

    return (
        <>
        <div id={issueDetails.id} className={`p-5 bg-[#FFFF]/75 ${galleryStyle.magazineCard} min-w-xs h-full`}>
            <h3 className="font-bold text-lg">{issueDetails.title}</h3>
                <h4 className="italic font-light text-sm">{issueDetails.subtitle} - {issueDetails.date}</h4>
            <div className="cursor-pointer h-50 justify-center flex mt-2 mb-4">
                <Image
                    src={getCoverImgUrl(issueDetails.coverID)}
                    width={135}
                    height={450}
                    alt="Zene Issue Cover"
                    className="border-amber-600 border-2 justify-self-center"
                />
            </div>
            <p className="cursor-default">{issueDetails.description}</p>
                <br />
                {issueDetails.url ?
                    <Link href={`gallery/archive/${issueDetails.url}`} className="bg-[#39cfeb] text-white text-shadow-lg p-2 rounded-2xl ml-2">
                    Read Me!
                    </Link> : <p></p>
                }
                {issueDetails.storeUrl ?
                    <Link href={`#`} className={`cursor-pointer bg-[#a1d32d] text-white text-shadow-lg p-2 rounded-2xl ml-2`}>
                        Buy A Copy
                    </Link> : <p></p>
                }
            </div>
        </>
    );
}