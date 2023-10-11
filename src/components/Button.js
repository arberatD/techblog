"use client"
import Link from "next/link"

export default function Button(props) {
    return (
        <Link href={props.href}>
            <button className="btn-hover color-4" type="button" >{props.buttonText}</button>
        </Link>
    )
}