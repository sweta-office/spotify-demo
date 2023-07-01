import { styled } from "styled-components";

const TitleStyled = styled.div`
.smallTitle{
    color: ${({ theme }) => theme.colors.white};
    font-size: 16px;
font-weight: ${({ theme }) => theme.fontWeight.bold};
line-height: 25.6px;
}

.smallTitle:hover{
    white-space: nowrap;
transition: all 0s ease 0s;
border-bottom: 2px solid ${({ theme }) => theme.colors.black};  
}
.mainTitle{
    font-size: 24px;
font-weight: ${({ theme }) => theme.fontWeight.bold};
color: ${({ theme }) => theme.colors.white};
cursor: pointer;
}
.mainTitle:hover{
text-decoration: underline solid rgb(255, 255, 255);
white-space: nowrap;
transition: all 0s ease 0s;
border-bottom: 2px solid ${({ theme }) => theme.colors.black};
margin:0 auto;
}
.description{
    color: ${({ theme }) => theme.colors.descriptionText};
    font-size: 16px;
line-height: 25.6px;
}`
export default TitleStyled;
