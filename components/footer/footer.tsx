import React from 'react'

function Footer() {
    return (
        <footer className='flex justify-evenly'>
            <div className="flex-col justify-center items-center ">
                <a href="#">서비스약관</a>
                <a href="#">개인정보처리방침</a>
                <a href="#">청소년보호정책</a>
                <a href="#">광고문의</a>
                <a href="#">고객센터</a>
            </div>
            <b className="copyright">Copyright © Cyworld Communications All right reserved</b>
        </footer>
    )
}

export default Footer
