import { styled } from "styled-components";

const RoundedButton = styled.div`
.blackButton{
    background: transparent;
color:  ${({ theme }) => theme.colors.white};
font-size: 16px;
border-radius: 500px;
transition-duration: 33ms;
    transition-property: background-color, border-color, color, box-shadow, filter, transform;
font-weight: ${({ theme }) => theme.fontWeight.bold};
height: 48px;
padding: 8px 20px 8px 10px;
cursor: pointer; 
border: 1px solid  ${({ theme }) => theme.colors.button};
}
.blackButton:hover{
    border: 2px solid  ${({ theme }) => theme.colors.white};

}
.roundedButton{
background: ${({ theme }) => theme.colors.buttonBackground};
color:  ${({ theme }) => theme.colors.black};
font-size: 16px;
font-weight: ${({ theme }) => theme.fontWeight.semiBold};
height: 48px;
padding: 8px 32px 8px 32px;
cursor: pointer;
    }
.roundedButton:hover{
    transition: all 0s ease 0s;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    }`
    ;

export default RoundedButton;
