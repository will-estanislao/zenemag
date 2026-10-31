import { fetchVideos } from '@/lib/payloadPosts';
import { testVideo } from '../_utils/data';

export default async function VideoCard() {

    const videos = await fetchVideos();
    const loadVideos = videos.map(video =>
        <div key={video.id} className='bg-white/50 flex p-5 flex-col lg:flex-row'>
                <video
                    muted
                    loop
                    controls
                    preload="none"
                    width={480}
                    className='aspect-video bg-black min-w-xs'
                >
                    <source src={video?.url!} type={video?.mimeType!} />
                </video>
            <div className='pl-5 pr-15'>
                    <h3 className="text-2xl font-bold mb-1 mt-5 lg:mt-0">{ video?.alt }</h3>
                    <p className='mt-5'>{video?.description}</p>
            </div>
            </div>

    )

    return (
        <div className="mt-10">
            {loadVideos}
        </div>
    );
}