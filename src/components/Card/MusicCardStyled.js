import { styled } from "styled-components";
import MusicCard from "./MusicCard";

const MusicCardStyled = styled.div`
.MusicCard{
    width:auto;
    border:none;
    border-radius:0;
    padding:10px;
}
.cardImage: {
    objectFit: cover;
  }
  .playButton{
    color:  ${({ theme }) => theme.colors.black};
  }`
    ;

export default MusicCardStyled;
