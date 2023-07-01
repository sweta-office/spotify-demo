import { styled } from "styled-components";

const FooterStyled = styled.div`
.man{
  color:${({ theme }) => theme.colors.white};
}
.aTag{
    text-decoration: none !important;
    color:${({ theme }) => theme.colors.footer};
}
.aTag:hover{
    color:${({ theme }) => theme.colors.white};
    border-bottom: 2px solid ${({ theme }) => theme.colors.white};  
  
}
.underline{
  border:1px solid ${({ theme }) => theme.colors.white};
 }
 .copy{
  font-size: 0.875rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.descriptionText};
 }
.socialIcon {
  border-radius: 20px;
  transition: all .8s;
  color: ${({ theme }) => theme.colors.black};
}
.socialIcon:hover {
  transition: all .8s;
  color: ${({ theme }) => theme.colors.iconHover} !important;
}
.footerText{
    color:  ${({ theme }) => theme.colors.black};
    font-size: 16px;
line-height: 30px;
}
.footerText:hover{
    white-space: nowrap;
transition: all 0s ease 0s;
border-bottom: 2px solid ${({ theme }) => theme.colors.black};  
}`
export default FooterStyled;
