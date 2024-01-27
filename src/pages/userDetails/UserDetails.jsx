import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getUserRepos } from '../../api/apiGetUserRepos';
import loader from '../loader.gif';
import * as S from './userDetails.styled.js';

export const UserDetails = ({ users }) => {
  const { id } = useParams();
  const user = users[parseInt(id) - 1];
  const [reposCount, setReposCount] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);
  const query = user.repos_url;

  useEffect(() => {
    
    const fetchRepos = async () => {
      setIsLoading(true);
      const reposData = await getUserRepos(query);
      setReposCount(reposData.length);
    };
    fetchRepos()
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [users]);

  return (
    <S.Section>
      <S.Container>
        {user && (
          <S.UserCard>
            <S.UserCardTitle>
              Подробная информация о пользователе <span>{user.login}</span>
            </S.UserCardTitle>
            <S.UserImg src={user.avatar_url} alt={user.login} />
            <S.UserText>
              <S.UserItemText>Логин: {user.login}</S.UserItemText>

              <S.UserItemText>
                {isLoading ? (
                  <S.Loader src={loader} />
                ) : (
                  `Репозиториев: ${reposCount || error}`
                )}
              </S.UserItemText>
            </S.UserText>
            <S.UserItemLink href={user.html_url} target='_blank'>
              {'Перейти в аккаунт'}
            </S.UserItemLink>
            <S.UserListLink>
              <Link to='/surfer'> {'Обратно к результатам'}</Link>
            </S.UserListLink>
          </S.UserCard>
        )}
      </S.Container>
    </S.Section>
  );
};
