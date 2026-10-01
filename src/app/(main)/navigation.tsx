'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import styles from './mainstyles.module.css';

export default function Navigation() {
    // Add in image to the object also store
    // Store need to open to new tab - have to programmatically define it

    const navLinks = [
        { name: "Home", href: "/home", src: "/navicons/white/sprite-home.png", alt: "Home Icon", bg: "bg-[#42caa6]" },
    { name: "About", href: "/about", src: "/navicons/white/sprite-about.png", alt: "About Icon", bg: "bg-[#a1d32d]" },
    { name: "Gallery", href: "/gallery", src: "/navicons/white/sprite-gallery.png", alt: "Gallery Icon", bg: "bg-[#e14b57]"},
    { name: "Blog", href: "/blog/archive", src: "/navicons/white/sprite-blog.png", alt: "Blog Icon", bg: "bg-[#e8772f]" },
        { name: "Submit", href: "/submit", src: "/navicons/white/sprite-submit.png", alt: "Submission Icon", bg: "bg-[#e8d032]"},
    {name: "Store", href:"https://www.etsy.com/ca/shop/ZadehArt", src: "/navicons/white/sprite-store.png", alt: "Store Icon", bg: "bg-[#3f8ae4]" },
        ];
    
    const pathname = usePathname();

    return (
        <nav className='flex justify-center items-center'>
            {navLinks.map((link) => {
                const isActive = pathname === link.href ||
                    (pathname.startsWith(link.href) && link.href !== "/");
                
                return (
                    <div key={link.name} className={`${isActive ? 'bg-[#39cfeb]/50 border-2 border-[#FFFF]' : link.bg} pl-2.5 pr-2.5 rounded-4xl m-2  hover:bg-[#39cfeb] ${styles.linkNavAnimation}`}>
                    <Link className='flex items-center justify-center font-bold tracking-widest text-shadow-lg/25 p-1' href={link.href} key={link.name}>
                        <Image
                            src={link.src}
                            width={32}
                            height={32}
                                alt={link.alt}
                                className='mr-2 w-auto h-auto'
                        ></Image>
                        {link.name.toLowerCase()}
                        </Link>
                    </div>
                );
            })}
        </nav>
    );
}