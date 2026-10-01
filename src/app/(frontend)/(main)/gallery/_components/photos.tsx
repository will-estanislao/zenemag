import { getGalleryImgUrl } from '../_utils/utils';
import Image from 'next/image';
import { testGallery } from '../data';

export default function Photos() {
    const loadImages = testGallery.map(img =>
            <Image
                src={getGalleryImgUrl(img.imgID)}
                width={500}
                height={img.height}
                alt={'Image Test'}
                 key={img.id}
            />

    );

    return (
        <div id="pin" className="bg-[#3f8ae4] p-10">
            <div className='bg-[#FFFF]/75 rounded-t-xl text-black pl-10 pr-10 pt-10 '>
                <div className="pb-5">
                    <h2 className="text-xl font-bold">Photo Gallery</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quidem quis esse nihil, facere natus.</p>
                </div>
            
                <hr />
            </div>
            <div className='bg-[#FFFF]/75 rounded-b-xl p-10 md:h-175 overflow-y-scroll'>
                <div className="columns-2 gap-3 space-y-4 mt-5 md:columns-3 bg-[#FFFF]/75 p-5">
                    {loadImages}
                </div>
            </div>
            <div id="end"></div>
        </div>
    );
}