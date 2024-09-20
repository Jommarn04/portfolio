import Link from "next/link"
import { Button } from "./ui/button"



/////components
import Nav from "./Nav"
import MobileNav from "./MobileNav"


export default function Header() {
    return <header className="py-8 px-8 xl:py-0 text-white xl:flex justify-center ">
        <div className="xl:fixed xl:pt-10 container mx-auto z-10 flex justify-between items-center xl:bg-primary">

            {/* logo */}
            <Link href={'/'}>
                <h1 className="text-3xl font-semibold"> Film <span className="text-accent">.</span></h1>
            </Link>

            {/* desktop nav */}
            <div className="hidden xl:flex items-center gap-8">
                <Nav />
                <Link href={'/'}>
                    <Button>Hire me</Button>
                </Link>
            </div>

            {/* mobile nav  */}
            <div className="xl:hidden">
                <MobileNav/>
            </div>
        </div>
    </header>
}