import { cyMainLogo, midHeader, midHeader2 } from '@/ingedients/ingedients'
import Link from 'next/link'
import React from 'react'




export default function MidHeader() {
    return (
        <div className="flex justify-between m-5">
            <ul className="flex justify-center items-center">
                <li>
                    <Link href="#" className="menu-list-item">
                        {/* <Image src="resources/img/img-cyworld_logo.png" alt="" width="250" height="80"> */}
                        <img className='w-60' src={cyMainLogo.src} alt="" />
                    </Link>
                </li>
                
            </ul>
            <ul className="flex justify-between m-2">
                {midHeader.map(v => <li className="m-1.5"><Link href={v.link}>{v.name}</Link></li>)}
            </ul>
            <ul className="flex justify-center items-center">
                {midHeader2.map(v => <li className="mx-1.5"><Link href={v.link}>{v.name}</Link></li>)}
            </ul>
        </div>
    )
}
