import styles from '../mainstyles.module.css';

export default function About() {
    return (
        <>
            <h1 className='text-3xl font-bold mb-15 underline text-shadow-lg/50 tracking-widest text-center text-nowrap'>About Zene Magazine</h1>
            <div className={`${styles.main} ${styles.tabContent} p-10 bg-[#a1d32d]/70 min-w-full`}>
                <div className='bg-[#FFFF]/75 rounded-xl text-black font-[arial] p-10 lg:min-w-full'>
                    <h2 className='font-extrabold text-2xl mb-2'>Origins of Zene</h2>
                    <hr />
                <p className='mt-3'>
                    Zene Magazine is an independently produced publication that highlights the work of contemporary artists, creatives, and businesses. Produced in Durham Region, Ontario, by a small team of volunteers, the magazine places a strong emphasis on Canadian artists while also featuring voices and work from the international arts community. Through interviews, features, and visual showcases, Zene aims to share compelling creative work and support a growing network of artists. We prioritize accessibility in each issue, and do not charge submission fees to artists sending in their work for consideration. 
                    </p>
                </div>
            </div>
        </>
    );
}