import { notFound } from "next/navigation"
import PDFViewer from "../../_components/_magazine/pdfViewer"
import { fetchIssueData } from "../../_utils/utils"

export default async function Page({
  params,
}: {
  params: Promise<{ zineissues: string }>
    }) {
  const { zineissues } = await params

  console.log("Slug: " + { zineissues }.zineissues);

  const issueData = await fetchIssueData({zineissues}.zineissues);
  if (!issueData) {
    notFound();
  }

    return (
      <div>
        <PDFViewer issue={ {zineissues}.zineissues} />
        </div>
    );
}
