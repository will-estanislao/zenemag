import Link from 'next/link';
import styles from '../mainstyles.module.css';

export default function Submission() {
    return (
        <div>
            <h1 className='text-3xl font-bold mb-15 underline text-shadow-lg/50 tracking-widest text-center text-nowrap'>Got Mail?</h1>
            <div className={`${styles.tabContent} p-10 bg-[#e8d032]`}>
                <div className='bg-[#FFFF]/75 rounded-xl text-black p-10'>
                    <h2 className='font-extrabold text-2xl mb-5'>Submit Your Work For Zene Issue #5!!</h2>
                    <hr />
                    <p className='pt-5 pb-5'>
                        Zene Magazine is currently accepting submissions for Issue 005, set to release in the Fall of 2027. Submissions are open until May 1st, 2027. We welcome work from artists, writers, photographers of
                        all disciplines. Accepted submissions may include written pieces &#40;such as essays, poetry, short stories or interviews&#41;, digital artwork, and high quality images or scans of visual artwork.
                    </p>
                    <p className='pt-5 pb-5'>
                        Please send your work to info@zenemag.com, along with the date the piece was created. In your submission email, please include a brief biography that specifies your age, full name
                        &#40;first and last&#41;, artist name &#40;if applicable&#41;, primary region you work in, medium&#40;s&#41; you work with, and core themes or styles in your work or submitted piece.
                        Please ensure photos of any works are high quality photos or scans. Please do not send your submissions via Google Drive.
                    </p>
                    <div className='flex justify-center mt-7'>
                        <Link className='p-5 text-nowrap cursor-pointer text-shadow-xs font-extrabold bg-[#39cfeb]/75 rounded-2xl underline text-white lg:text-xl outline-white outline-2 text-xs '
                        href="mailto:info@zenemag.com">
                        &gt;&gt; Email your work to: info@zenemag.com &lt;&lt;
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}