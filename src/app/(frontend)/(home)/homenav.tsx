import Link from "next/link";

export default function Homenav() {
    
    const navLinks = [
        { name: "Home", href: "/home", src: "/navicons/white/sprite-home.png", alt: "Home", bg: "bg-[#42caa6]" },
        { name: "About", href: "/about", src: "/navicons/white/sprite-about.png", alt: "About", bg: "bg-[#a1d32d]" },
        { name: "Gallery", href: "/gallery", src: "/navicons/white/sprite-gallery.png", alt: "Gallery", bg: "bg-[#e14b57]"},
        { name: "Blog", href: "/blog/archive", src: "/navicons/white/sprite-blog.png", alt: "Blog", bg: "bg-[#e8772f]" },
        { name: "Submit", href: "/submit", src: "/navicons/white/sprite-submit.png", alt: "Submission", bg: "bg-[#e8d032]"},
        {name: "Store", href:"https://www.etsy.com/ca/shop/ZadehArt", src: "/navicons/white/sprite-store.png", alt: "Store", bg: "bg-[#3f8ae4]" },
    ];

    const showLinks = navLinks.map(link =>
        <Link className="row-span-1 col-span-1 w-75 md:w-full h-15 mb-5 
        bg-blue-400 pl-10 md:pl-25 text-3xl font-extrabold uppercase tracking-[.35em] content-center text-shadow-black text-shadow-xs"
            href={link.href}
            key={link.name}>
            {link.name}
        </Link>
    );
    
    return (
        <>
            {showLinks}
        </>
    );
}