import Image from "next/image";
import galleryStyle from '../../gallery.module.css'
import { getCoverImgUrl } from '../../_utils/utils';
import { useState } from "react";
import Flipbook from "./flipbook";

export default function IssueInfo({ issueDetails, isActive, onShow} ) {

    return (
        <>
        <div onClick={onShow} id={issueDetails.id} className={`p-5 cursor-pointer bg-[#FFFF]/75 ${galleryStyle.magazineCard}`}>
            <h3 className="font-bold text-lg">{issueDetails.title}</h3>
            <h4 className="italic font-light text-sm">{issueDetails.subtitle}</h4>
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
            <p className="">Read Me!</p>
            </div>
            {isActive ? (
                <div><Flipbook url={issueDetails.url} /></div>
            ) : (
                <div></div>
            )}
        </>
    );
}