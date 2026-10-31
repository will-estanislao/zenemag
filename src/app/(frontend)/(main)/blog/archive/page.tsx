import { fetchAllPosts } from "@/lib/payloadPosts";
import Link from "next/link";

export default async function Archive() {
    const posts = await fetchAllPosts();

    const loadBlogLinks = posts.map(entry =>
        <li key={entry.id} className="odd:bg-white/50 even:bg-[#e8772f]/50 text-sm md:text-lg lg:text-xl font-semibold pl-5 pt-2 hover:animate-pulse h-12 align-middle">
        <Link href={{pathname:`/blog/archive/${entry.id}/`}} className="text-blue-600 underline">
            {entry.title} - {new Date(entry.createdAt).toLocaleDateString()}
            </Link>
            </li>
    );

    return (
        <div>
            <h1 className='text-3xl font-bold mb-15 underline text-shadow-lg/50 tracking-widest text-center text-nowrap'>Archive</h1>
            <div className='bg-[#e8772f]/70 p-10'>
                <div className='bg-[#FFFF]/75 rounded-xl text-black font-[arial] p-10'>
                    <div className="pb-5">
                    <h2 className="text-xl font-bold">Previous Blog Entries</h2>
                    <p>Read previous blog entries</p>
                    </div>
                    <hr />
                    <ul className="mt-5">
                        {loadBlogLinks}
                    </ul>
                </div>
            </div>
        </div>
    );
}