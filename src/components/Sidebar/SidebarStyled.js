import { styled } from "styled-components";

const SidebarStyled = styled.div`
.aTag{
    font-size:0.6875rem;
    text-decoration: none !important;
    color:${({ theme }) => theme.colors.footer};

}
.aTag:active{
    border-bottom: 4px solid ${({ theme }) => theme.colors.footer};  
}
.scroll{
    scroll-behavior: smooth;
    overflow-y: scroll;
    overflow-x:hidden;
    overflow-wrap: anywhere;
}
    .background {
        background: ${({ theme }) => theme.colors.background};
        padding: 12px 12px 8px 12px;
        border-radius: 8px;   
    }
    .background2 {
        margin-top:10px;
        background: ${({ theme }) => theme.colors.background2};
        padding: 12px 12px 8px 12px;
        border-radius: 8px;   
    }.Text{
        color:${({ theme }) => theme.colors.white};
        font-size:14px;
    }
    .textHeight{
        gap: 20px;
    height: 50px;    
    }`
    ;

export default SidebarStyled;
