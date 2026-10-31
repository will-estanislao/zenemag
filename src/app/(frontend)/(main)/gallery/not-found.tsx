import Link from "next/link";

export default function NotFound() {
    return (
        <div className="text-center flex items-center flex-col h-full">
            <h1 className="font-bold text-2xl">Not Found</h1>
            <p>Could not find requested resource</p>
            <Link className="font-bold mt-5 bg-[#e14b57] p-5 rounded-4xl" href="/gallery">Return to Gallery</Link>
        </div>
    );
}