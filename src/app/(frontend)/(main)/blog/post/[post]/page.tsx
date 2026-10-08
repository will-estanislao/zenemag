export default async function Page({
  params,
}: {
  params: Promise<{ post: string }>
    }) {
    // We got the slug... use that to ask for the 
    
  const { post } = await params
  //const { slug } = use(params);
  console.log("Slug: " + { post });
  // If the slug given is not existing, in DB, show message of this issue not found, return to the gallery
    return (
      <div>
          show blog post info here
        </div>
    );
}