import { footer } from '@/ingedients/ingedients'

function Footer() {
    return (
        <footer className='flex justify-evenly'>
            <div className="flex-col justify-center items-center ">
                {footer.map(v => <a href={v.link}>{v.name}</a>)}
            </div>
            <b className="copyright">Copyright © Cyworld Communications All right reserved</b>
        </footer>
    )
}

export default Footer
