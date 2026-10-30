import IssueInfo from "./issueInfo";
import { testData } from "../../_utils/data";

export default function Magazine() {

    const issueCardList = testData.map(dataObject =>
        <div key={dataObject.id}>
            <IssueInfo
                issueDetails={
                    {
                        id: dataObject.id,
                        title: dataObject.title,
                        subtitle: dataObject.subtitle,
                        coverID: dataObject.coverID,
                        description: dataObject.description,
                        url: dataObject.url,
                        storeUrl: dataObject.storeurl
                    }}                
            />
        </div>
    );
    
    return (
            <div className='bg-[#e14b57]/75 p-10 min-w-md'>
                <div className='bg-[#FFFF]/75 rounded-xl text-black font-[arial] p-10'>
                        <div className="pb-5">
                            <h2 className="text-xl font-bold">Zene Magazine Online Archive</h2>
                            <p>Check out previously released Zene Magazine issues!</p>
                        </div>
                        <hr />
                    <div className="pt-5 grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">{issueCardList}</div>
                </div>
            </div>
    );
}