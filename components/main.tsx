"use client"
import React, { useState } from 'react'
import TopHeader from './main/topHeader';
import MidHeader from './main/midHeader';



export default function Main() {
    const [session, setSession] = useState(true);

    return (
        <div>
            <header className='m-1'>
                <TopHeader session={session} />
                <MidHeader />
            </header>
        </div>


    )
}
