import VideoCard from './videoCard'

export default function Videos() {
    return (
        <div className="bg-[#e8d032]/75 p-5 lg:p-10 min-w-md">
            <div className='bg-[#FFFF]/75 rounded-xl text-black p-10'>
                <div className="pb-5">
                    <h2 className="text-xl font-bold">See Zene In Action!</h2>
                    <p></p>
                </div>
                <hr />
                <VideoCard  />
            </div>
        </div>
    );
}