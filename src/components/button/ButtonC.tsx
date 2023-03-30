import React from 'react'
import {Button, Row, Col} from "antd";

export type ButtonProps = {
    children: React.ReactNode,
    className?: string,
    disabled?: boolean
    onClick?: () => void
}

const ButtonC: React.FC<ButtonProps> = ({
                                            children,
                                            className,
                                            disabled,
                                            onClick
                                        }) => {

    return (
        <Button
            size="large"
            disabled={disabled}
            onClick={() => {
                onClick && onClick()
            }}
            className={`text-[#ffffff] outline-none px-[17px] sm:px-[31px] py-[17px] rounded-[50px] flex items-center justify-center hover:opacity-80 bg-white text-[18px] disabled:text[#C9C9C9] disabled:bg-[#F8F8F8] ${className}`}>
            {children}
        </Button>
    )
}

export default ButtonC