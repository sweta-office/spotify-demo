import React from 'react'
import TitleStyled from './TitleStyled'

const Description = ({description}) => {
    return (
        <>

        <TitleStyled><span className='description'>
        {description}
    </span></TitleStyled>
        </>
    )
}

export default Description