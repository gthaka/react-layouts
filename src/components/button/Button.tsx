import React, { FC } from 'react'
// import CircleSpinner from '../loader/CircleSpiner'
// import {CircleLoader} from '../../assets/'

interface ButtonProps {
    className?: string;
    children?: React.ReactNode;
    disabled?: boolean;
}

const Button: FC<ButtonProps> = props => {
    const {children,...btnProps} = props;
    console.log(btnProps)
    return (
        <button {...btnProps} >
            {props.children}
        </button>
    )
}

export default Button