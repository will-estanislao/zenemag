import ImageCards from './imageCards';

export default function Photos() {

    return (
        <div id="pin" className="bg-[#3f8ae4]/75 p-10 min-w-md">
            <div className='bg-[#FFFF]/75 rounded-t-xl text-black pl-10 pr-10 pt-10 '>
                <div className="pb-5">
                    <h2 className="text-xl font-bold">Photo Gallery</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quidem quis esse nihil, facere natus.</p>
                </div>
            
                <hr />
            </div>
            <div className='bg-[#FFFF]/75 rounded-b-xl p-10 md:h-175 overflow-y-scroll'>
                <div className="columns-1 space-y-4 mt-5 lg:columns-2 xl:columns-3 xl:gap-3 bg-[#FFFF]/75 p-5">
                    <ImageCards />
                </div>
            </div>
            <div id="end"></div>
        </div>
    );
}