import Link from 'next/link';
import styles from '../mainstyles.module.css';

export default function Submission() {
    return (
        <div>
            <h1 className='text-3xl font-bold mb-15 underline text-shadow-lg/50 tracking-widest text-center text-nowrap'>Got Mail?</h1>
            <div className={`${styles.tabContent} p-10 bg-[#e8d032]`}>
                <div className='bg-[#FFFF]/75 rounded-xl text-black p-10'>
                <h2 className='font-extrabold text-2xl mb-5'>Submit Your Work For Zene Issue #4!!</h2>
                <p>
                    Summary: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum recusandae error expedita.
                        Architecto nisi iusto aspernatur eaque. Quibusdam architecto quidem consequatur! Minima, eaque quod!
                    
                    </p>
                    <div className='flex justify-center mt-15'>
                        
                        <Link className='p-5 cursor-pointer text-shadow-xs font-extrabold bg-[#39cfeb]/75 rounded-2xl underline text-white text-xl outline-white outline-2'
                        href="mailto:info@zenemag.com">
                        &gt;&gt; Email your work to: info@zenemag.com &lt;&lt;
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}