import { StaticImageData } from 'next/image';
import cyworldLogo from "./img/imgcylogo.svg"


interface link {
    "name": string; "link": string;
}

export const navBar: link[] = [
    { "name": "메일", "link": "#" },
    { "name": "뉴스", "link": "#" },
    { "name": "판", "link": "#" },
    { "name": "TV", "link": "#" },
    { "name": "톡톡", "link": "#" },
    { "name": "툰앤북", "link": "#" },
    { "name": "게임", "link": "#" },
    { "name": "쇼핑", "link": "#" },
    { "name": "더보기", "link": "#" },
]

export const midHeader: link[] = [
    { "name": "미니홈피", "link": "#" },
    { "name": "도토리", "link": "#" },
    { "name": "기프티콘", "link": "#" },
    { "name": "내PC제어", "link": "#" },
    { "name": "부가서비스", "link": "#" },
]
export const midHeader2: link[] = [
    { "name": "공지사항", "link": "#" },
    { "name": "고객센터", "link": "#" },
]

export const cyMainLogo: StaticImageData = cyworldLogo

// footer
export const footer: link[] = [
    { "name": "서비스약관", "link": "#" },
    { "name": "개인정보처리방침", "link": "#" }, 
    { "name": "광고문의", "link": "#" },
    { "name": "고객센터", "link": "#" },
]