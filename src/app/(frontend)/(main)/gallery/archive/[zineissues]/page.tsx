import { NotFound } from "next/navigation"
import PDFViewer from "../../_components/_magazine/pdfViewer"

export default async function Page({
  params,
}: {
  params: Promise<{ zineissues: string }>
    }) {
    // We got the slug... use that to ask for the 
    
  const { zineissues } = await params
  //const { slug } = use(params);
  console.log("Slug: " + { zineissues });
  // If the slug given is not existing, in DB, show message of this issue not found, return to the gallery
    return (
      <div>
          <PDFViewer />
        </div>
    );
}
