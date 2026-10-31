import Magazine from "./_components/_magazine/magazine";
import Photos from "./_components/photos";
import Tabs from "./_components/tabs";
import Videos from "./_components/videos";

export default function Gallery() {

    return (
        <div>
            <h1 className='text-3xl font-bold mb-15 underline text-shadow-lg/50 tracking-widest text-center text-nowrap'>Zene Magazine Gallery</h1>
            <Tabs photos={<Photos />} videos={<Videos />} />
        </div>
    );
}