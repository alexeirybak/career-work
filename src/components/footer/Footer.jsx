import * as S from './Footer.styled';

export const Footer = () => {
  const currentDate = new Date().getFullYear();
  return (
    <S.Footer>
      <S.FooterContainer>
        <S.FooterWrapper>
          <S.Copyright>© {currentDate} Alexei Rybak</S.Copyright>
        </S.FooterWrapper>
      </S.FooterContainer>
    </S.Footer>
  );
};
