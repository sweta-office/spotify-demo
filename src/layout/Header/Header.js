
import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import RoundButton from '../../components/Button/RoundButton'
import HeaderStyled from './HeaderStyled'
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";

const Header = () => {
    return (
        <>
            <HeaderStyled>
                <Navbar sticky='top' fixed='top' expand="sm" className='navBackground'>
                    <AiFillLeftCircle color='#fff' size={30} className='mx-2' />
                    <AiFillRightCircle color='#fff' size={30} />
                    <div className='buttonPosition'>
                        <div className="mx-5">
                            <h6 className='sign mt-2'>Sign up</h6>
                        </div>
                        <RoundButton
                            buttonText={"Log in"} />
                    </div>
                    </Navbar>
            </HeaderStyled>
        </>
    )
}

export default Header
