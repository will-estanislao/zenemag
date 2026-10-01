import Image from "next/image";
import galleryStyle from '../gallery.module.css';
import { testData } from "../data";
import { getCoverImgUrl } from "../_utils/utils";

export default function ZineCard() {
    const issueCard = testData.map(dataObject =>
        <div key={dataObject.id} className={`p-5 cursor-pointer bg-[#FFFF]/75 ${galleryStyle.magazineCard}`}>
            <h3 className="font-bold text-lg">{dataObject.title}</h3>
            <h4 className="italic font-light text-sm">{dataObject.subtitle}</h4>
            <div className="cursor-pointer h-50 justify-center flex mt-2 mb-4">
                <Image
                    src={getCoverImgUrl(dataObject.coverID)}
                    width={135}
                    height={450}
                    alt="Zene Issue Cover"
                    className="border-amber-600 border-2 justify-self-center"
                />
            </div>
            <p className="cursor-default">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, rerum adipisci. Velit assumenda, itaque aperiam dolorem vel rerum labore illo. Aliquam atque impedit harum rem neque beatae fugit veniam dolorum repellat, quibusdam rerum error corporis!</p>
            <br />
            <p className="">Read Me!</p>
        </div>);

    return (
        <>{issueCard}</>
    );
}