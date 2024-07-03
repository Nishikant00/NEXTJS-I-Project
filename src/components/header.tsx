'use client'
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigationLinks=[
    {
        href:'/',
        label:'Home',
    },
    {
        href:'/posts',
        label:'Posts',
    },
    {
        href:'/create',
        label:'Create',
    },
]

export default function Header() {
    const pathname=usePathname()
    return (
        <header className="px-4 py-3 flex justify-between items-center border-b">
            <Link href='/'>
            <Image src="https://png.pngtree.com/element_our/20190530/ourmid/pngtree-correct-icon-image_1267804.jpg" alt="NEXT LOGO" height="40" width="40"/>
            </Link>

            <nav>
                <ul className="flex gap-[20px] font-bold">
                  {
                    navigationLinks.map((link)=> (
                        <li key={link.href}>
                        <Link className={`${
                            pathname===link.href?"text-stone-800":"text-stone-500 "
                        }`} href={link.href}>
                        {link.label}
                        </Link>
                        </li>
                    ))
                  }
                </ul>
            </nav>
        </header>
    );
}
