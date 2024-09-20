'use client'

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import Link from "next/link"
import { CiMenuFries } from 'react-icons/ci';

const links = [
    {
        name: 'Home',
        path: '#home',
    },
    {
        name: 'Services',
        path: '#services',
    },
    {
        name: 'Resume',
        path: '#resume',
    },
    {
        name: 'Work',
        path: '#work',
    },
    {
        name: 'Contact',
        path: '#contact',
    },
]

export default function MobileNav() {

    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                {/* logo */}
                <div className="mt-32 mb-40 text-center text-2xl">
                    <Link href={'/'} className="">
                        <h1 className="text-4xl font-semibold ">
                            Film<span className="text-accent">.</span>
                        </h1>
                    </Link>
                </div>
                {/* nav */}
                <nav className="flex flex-col justify-conter items-center gap-8">
                    {links.map((link, index) => {
                        return <Link href={link.path} key={index} className="capitalize hover:text-accent transition-all">
                            {link.name}
                        </Link>
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    );
}