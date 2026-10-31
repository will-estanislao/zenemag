import { fetchByID } from "@/lib/payloadPosts";
import RichTextViewer from "@/app/components/richTextViewer";
import { User } from "@/payload-types";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ postID: string | number }>
  }) {
  const { postID } = await params;
  const id = { postID }.postID;
  const retrievedPost = await fetchByID(id);
  if (!retrievedPost) {
    notFound();
  }

  const user = retrievedPost.username as User;
  const username = user.username;

    return (
      <div className='bg-[#e8772f]/70 p-10'>
        <div className='bg-[#FFFF]/75 rounded-xl text-black font-[arial] p-10'>
          <h2 className="font-bold text-3xl">{retrievedPost.title}</h2>
          <h3 className="font-bold">Written By: {username} | Posted on: {new Date(retrievedPost.createdAt).toLocaleDateString()}</h3>
          <hr />
          <div className="mt-5 mb-5">
            {retrievedPost.content && <RichTextViewer data={retrievedPost.content} />}
          </div>
          <hr />
          <div className="text-center mt-5">
            <Link href="/blog/archive" className="bg-[#39cfeb] text-white text-shadow-lg p-2 rounded-2xl ml-2">Archive</Link>
            <Link href="#" className="bg-[#a1d32d] text-white text-shadow-lg p-2 rounded-2xl ml-2">Return to Top</Link>
          </div>
        </div>
      </div>
    );
}