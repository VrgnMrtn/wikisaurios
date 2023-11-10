'use client'

import Link from "next/link";
import style from './ActiveLink.module.css';
import { usePathname } from "next/navigation";
import Image from "next/image";

interface Props {
    path: string;
    text: string;
    img: string;
}

export const ActiveLink = ({path, text, img}: Props) => {

    const pathName = usePathname();

    return (
        <Link
            className={`${style.link}  ${path === pathName && style['active-link']}`}
            href={path}
        >
            <Image className="bg-secondary rounded-lg" src={img} alt={`nav item icon for ${text}`} width="50" height="50" /> 
            <label>{text}</label>
        </Link>
    )
}