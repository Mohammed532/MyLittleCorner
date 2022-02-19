import { FC, MouseEvent } from 'react'
import Button from '@mui/material/Button'

interface Props {
    className?: string;
    disabled?: boolean
    link?: 'string';
    text: string;
    type: 'text' | 'contained' | 'outlined';
    color: 'primary' | 'secondary';
    onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

const CustomButton:FC<Props> = ({ className, text, type, color, disabled, link, onClick}) => {
    if(disabled === undefined) {disabled = false;}
    return (
        <Button className={className} onClick={onClick} variant={type} disabled={disabled} href={link} >
            {text}
        </Button>
    )
}

export default CustomButton