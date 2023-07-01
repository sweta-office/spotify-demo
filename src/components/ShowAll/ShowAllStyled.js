import { styled } from "styled-components";

const ShowAllStyled = styled.div`
.showAll{
    color:${({ theme }) => theme.colors.descriptionText};
    font-size: 14px;
font-weight: :${({ theme }) => theme.fontWeight.bold};
line-height: 22.4px;
}
.showAll:hover{
    border-bottom:2px solid ${({ theme }) => theme.colors.descriptionText};
    trasition: all 0s ease 0s;
}
`

export default ShowAllStyled;
