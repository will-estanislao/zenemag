import VideoCard from './videoCard'

export default function Videos() {
    return (
        <div className="bg-[#e8d032]/75 p-10">
            <div className='bg-[#FFFF]/75 rounded-xl text-black font-[arial] p-10'>
                <div className="pb-5">
                    <h2 className="text-xl font-bold">See Zene In Action!</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quidem quis esse nihil, facere natus.</p>
                </div>
                <hr />
                <VideoCard  />
            </div>
        </div>
    );
}