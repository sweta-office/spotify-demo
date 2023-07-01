import React from 'react'
import TitleStyled from './TitleStyled'

const Title = ({title}) => {
    return (
        <>

        <TitleStyled>
            <span className='smallTitle'>
                {title}
            </span>
        </TitleStyled>
        </>
    )
}

export default Title