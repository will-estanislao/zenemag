import { retrieveByID } from "@/app/(frontend)/api/payloadPosts";
import RichTextViewer from "@/app/(frontend)/components/richTextViewer";

export default async function Page({
  params,
}: {
  params: Promise<{ postID: string | number }>
  }) {
  const { postID } = await params;
  const id = { postID }.postID;

  const retrievedPost = await retrieveByID(id);
  console.log({ postID });
  console.log("Slug: " + { postID });
  console.log(retrievedPost);


    return (
      <div>
            show blog post info here:
        Title: {retrievedPost.title}
        Author: <p> </p>
            <br />
        Content: {retrievedPost.content && <RichTextViewer data={retrievedPost.content} />}
        </div>
    );
}