import ZineCard from "./zineCard";

export default function Magazine() {
    
    return (
        <div className='bg-[#e14b57] p-10'>
            <div className='bg-[#FFFF]/75 rounded-xl text-black font-[arial] p-10'>
                <div className="pb-5">
                    <h2 className="text-xl font-bold">Zene Magazine Online Archive</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quidem quis esse nihil, facere natus.</p>
                </div>
                <hr />
                <div className="pt-5 grid grid-cols-2 gap-8 md:grid-cols-3">
                    <ZineCard />
                </div>
            </div>
        </div>
    );
}