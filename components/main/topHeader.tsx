import { navBar } from '@/ingedients/ingedients'
import Link from 'next/link'
import React from 'react'

export default function TopHeader(props: {session: boolean}) {
  return (
    <div className="flex justify-end m-2">

            <ul className="flex justify-around">
                {props.session ?
                    <li className="mr-2"><a href="#">로그인</a></li>
                    :
                    <li className="mr-2"><a href="#">로그아웃</a></li>}
                {navBar.map(v => <li className="mx-2"><Link href={v.link}>{v.name}</Link></li>)}

            </ul>
        </div>
  )
}
