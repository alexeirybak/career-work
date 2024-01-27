import { Link } from 'react-router-dom';
import * as S from '../pages.styled';

export const Home = () => {
  return (
    <>
      <S.Section>
        <S.Container>
          <S.ContentList>
            <S.ContentListItem>
              <S.Title2>Поиск пользователей GitHub</S.Title2>
              <S.Paragraph>Найдем всех!</S.Paragraph>
            </S.ContentListItem>
            <S.ContentListItem>
              <S.Title2>Никто не уйдет от нас бесследно!</S.Title2>
            </S.ContentListItem>
            <S.ToSurfer>
              <Link to='/surfer'>К поиску</Link>
            </S.ToSurfer>
          </S.ContentList>
        </S.Container>
      </S.Section>
    </>
  );
};
