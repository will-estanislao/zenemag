import { testEntry } from "../../gallery/data";

export default function Archive() {

    // Load in archive links
    const loadBlogLinks = testEntry.map(entry =>
        <li key={entry.id}>
        <a href="/blog/archive" className="text-blue-600">
            {entry.title} - {entry.date}
            </a>
            </li>
    );

    return (
        <div>
            <h1 className='text-3xl font-bold mb-15 underline text-shadow-lg/50 tracking-widest text-center text-nowrap'>Archive</h1>
            <div className='bg-[#e8772f]/70 p-10'>
                <div className='bg-[#FFFF]/75 rounded-xl text-black font-[arial] p-10'>
                    <div className="pb-5">
                    <h2 className="text-xl font-bold">Previous Blog Entries</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quidem quis esse nihil, facere natus.</p>
                    </div>
                    <hr />
                    <div>Search for an entry by date only </div>
                    <hr />
                    <ul className="mt-5">
                        {loadBlogLinks}
                    </ul>
                </div>
            </div>
        </div>
    );
}