import { testVideo } from '../data';

export default function VideoCard() {
    return (
        <div className="mt-10">
            <div className='bg-white/50 flex pt-5 pb-5'>
                <video
                    muted
                    loop
                    controls
                    width="540"
                    height={testVideo.at(0)?.height}
                    preload="none"
                    className='ml-5 mr-10'
                >
                    <source src='/movieex.mp4' type="video/mp4" />
                </video>
            <div className='pl-5 pr-15'>
                    <h3 className="text-2xl font-bold mb-1">{ testVideo.at(0)?.title }</h3>
                    <p>Date: { testVideo.at(0)?.date}</p>
                    <p className='mt-5'>{testVideo.at(0)?.description}</p>
            </div>
            </div>
        </div>
    );
}