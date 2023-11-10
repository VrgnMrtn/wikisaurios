import Link from "next/link"

export const Footer = () => {
    return (
        <div className="sticky navbar flex flex-col justify-center italic">
            <div className="mb-2">2023 Virginia Martín Álvarez NextJS</div>
            <div><Link className="underline hover:text-secondary" href={"https://icon-icons.com/search/icons/dinosaur"}>SVGs by Icon-icons</Link></div>
        </div>
    )
}