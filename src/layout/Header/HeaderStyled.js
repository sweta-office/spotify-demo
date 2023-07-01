import { styled } from "styled-components";

const HeaderStyled = styled.div`
.navBackground{
    background: ${({ theme }) => theme.colors.background2};
    padding: 12px 12px 8px 12px;
    border-radius: 8px;  

}
.buttonPosition{
    display: flex;
    justify-content: flex-end;
    width: -webkit-fill-available;
}
.sign{
font-size: 20px;
font-weight: ${({ theme }) => theme.fontWeight.semibold};
color: ${({ theme }) => theme.colors.descriptionText};
cursor: pointer;
}
.sign:hover{
    color: ${({ theme }) => theme.colors.white};
transition: all 0s ease 0s;
margin:0 auto;
}
`;

export default HeaderStyled;