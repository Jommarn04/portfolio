import Link from "next/link"


const Links = [
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

export default function Nav() {
    return(
        <>
        <nav className="flex gap-8">
                {Links.map((link, index) => {
                    return <Link 
                            href={link.path} 
                            key={index} 
                            className="capitalize font-medium hover:text-accent transition-all">
                        {link.name}
                    </Link>
                })}
            </nav>
        </>
            
    );
}


