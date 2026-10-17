import { fetchByID } from "@/lib/payloadPosts";
import RichTextViewer from "@/app/components/richTextViewer";
import { User } from "@/payload-types";

export default async function Page({
  params,
}: {
  params: Promise<{ postID: string | number }>
  }) {
  const { postID } = await params;
  const id = { postID }.postID;
  const retrievedPost = await fetchByID(id);
  const user = retrievedPost.username as User;
  const username = user.username;

  //console.log({ postID });
  //console.log("Slug: " + { postID });
  //console.log(retrievedPost.username);

    return (
      <div >
        <h2>Title: {retrievedPost.title}</h2>
        <h3>Author: {username}</h3>
        <br />
        Content: {retrievedPost.content && <RichTextViewer data={retrievedPost.content} />}
        </div>
    );
}