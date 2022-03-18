import React, { ButtonHTMLAttributes } from "react"



const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
    const { className, ...rest } = props
    return (
        <button className={`${className} base-button`} {...rest} />
    )
}

export default Button
