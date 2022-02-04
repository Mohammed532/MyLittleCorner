import { FC } from 'react'
import { Button } from 'semantic-ui-react'

interface Props {
    className?: string;
    text: string;
    type: 'primary' | 'secondary';
    fill: 'lite' | 'full'

}

const CustomButton:FC<Props> = ({ className, text, type, fill}: Props) => {
    return (
        <Button 
          className = {undefined}
          text = {text}
        />
    )
}

export default CustomButton