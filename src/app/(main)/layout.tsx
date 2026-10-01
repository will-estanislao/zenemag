import Header from "./header";
import "@/app/globals.css";
import { Orbitron } from 'next/font/google';
import { Lexend_Deca } from "next/font/google";

const orbitron = Orbitron({
    subsets: ["latin"],
});

const lexend = Lexend_Deca({
    subsets: ["latin"],
});

export default function MainLayout({ children }: { children: React.ReactNode }) {

    /**
     * Need a way to tell what the page title is from the page, might need to turn header to a component
     */

    return (
        <html lang="en" className={orbitron.className}>
            <body className="flex flex-col">
                <div className="backdrop-blur-xs">
                    <Header />
                </div>
                <main className='flex-1 mt-15 mb-15 ml-50 mr-50 pl-20 pr-20'>
                    {children}
                </main>
                <hr />
                <div className="backdrop-blur-xs">
                    <footer className="flex justify-center shrink-0 mt-5 mb-5 text-shadow-lg/50">
                        <p>Zene Magazine &copy; 2026</p>
                    </footer>
                </div>
            </body>
        </html>
    );
}