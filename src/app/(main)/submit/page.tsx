import styles from '../mainstyles.module.css';

export default function Submission() {
    return (
        <div>
            <h1 className='text-3xl font-bold mb-15 underline text-shadow-lg/50 tracking-widest text-center text-nowrap'>Got Mail?</h1>
            <div className={`${styles.main} ${styles.tabContent} p-10 bg-[#e8772f]`}>
                <div className='bg-[#FFFF]/75 rounded-xl text-black font-[arial] p-10'>
                <h2 className='font-extrabold text-2xl mb-5'>Submit Your Work For Zene Issue #4!!</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum recusandae error expedita.
                    Architecto nisi iusto aspernatur eaque. Quibusdam architecto quidem consequatur! Minima, eaque quod!
                    Molestias deserunt assumenda officiis nesciunt similique. Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Sunt dolore quae dicta nisi laborum culpa, incidunt id numquam aspernatur odit, amet delectus rerum
                    non sed! Nostrum esse autem tempora natus ratione quas aliquam accusamus assumenda optio at magnam odio dolorem,
                    aliquid molestiae, commodi voluptatibus repellendus minus. Perferendis maxime perspiciatis dolore.
                    </p>
                </div>
            </div>
        </div>
    );
}