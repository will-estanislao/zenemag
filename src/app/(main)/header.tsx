'use client';

import { usePathname } from 'next/navigation';
import Image from 'next/image';
import styles from './mainstyles.module.css';
import Navigation from "./navigation";
import { trimPath } from './utils';

export default function Header() {

    const currentPath = usePathname();
    const logoObject = { width: 200, height: 150, alt: "Zene Magazine Logo" };
    console

    return (
        <>
            <div className='flex justify-between items-center pl-5 pr-5 pt-2 pb-2'>
            <h1 className={`${styles.letterSpaceWide} ${styles.headerFont} ${styles.textStroke} text-shadow-lg/50`}>{trimPath(currentPath)}</h1><a href="/home">
            <Image
                src={'/logos/zenelogo.png'}
                width={logoObject.width}
                height={logoObject.height}
                        alt={logoObject.alt}
                        className='w-auto h-auto'
                ></Image>
                </a>
            </div>
            <hr /><Navigation /><hr />
        </>
    );
}