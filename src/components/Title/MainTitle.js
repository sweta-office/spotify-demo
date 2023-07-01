import React from 'react'
import TitleStyled from './TitleStyled'

const MainTitle = ({mainTitle}) => {
    return (
        <>

        <TitleStyled><span className='mainTitle'>
        {mainTitle}
    </span></TitleStyled>
        </>
    )
}

export default MainTitle