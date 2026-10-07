import Link from "next/link"

export default function Homenav() {
    
    const navLinks = [
        { name: "Home", href: "/", src: "/navicons/white/sprite-home.png", alt: "Home", bg: "bg-linear-to-r from-[#42caa6] to-[#a1d32d]/60" },
        { name: "About", href: "/about", src: "/navicons/white/sprite-about.png", alt: "About", bg: "bg-linear-to-r from-[#a1d32d] to-[#e14b57]/60" },
        { name: "Gallery", href: "/gallery", src: "/navicons/white/sprite-gallery.png", alt: "Gallery", bg: "bg-linear-to-r from-[#e14b57] to-[#e8772f]/60"},
        { name: "Blog", href: "/blog/archive", src: "/navicons/white/sprite-blog.png", alt: "Blog", bg: "bg-linear-to-r from-[#e8772f] to-[#e8d032]/60" },
        { name: "Submit", href: "/submit", src: "/navicons/white/sprite-submit.png", alt: "Submission", bg: "bg-linear-to-r from-[#e8d032] to-[#3f8ae4]/60"},
        {name: "Store", href:"https://www.etsy.com/ca/shop/ZadehArt", src: "/navicons/white/sprite-store.png", alt: "Store", bg: "bg-linear-to-r from-[#3f8ae4] to-[#42caa6]/60" },
    ];

    const hoverEffects = "hover:h-20 hover:inset-ring-2 hover:inset-ring-[#560d4a] hover:font-extrabold hover:drop-shadow-xl/75 hover:shadow-[#2fada0]";
    const transitionEffects = "transition-all delay-150 duration-400 ease-in-out";

    const showLinks = navLinks.map(link =>
        <Link id={link.alt} className={`row-span-1 col-span-1 w-75 md:w-full h-17 mb-5 pl-10 md:pl-25 
        text-4xl font-bold uppercase tracking-[.35em] content-center text-shadow-black 
        text-shadow-sm shadow-lg/20 ${link.bg} ${transitionEffects} ${hoverEffects}`}
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