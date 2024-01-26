import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getUserRepos } from '../../api/apiGetUserRepos';
import * as S from './userDetails.styled.js';

export const UserDetails = ({ users }) => {
  const { id } = useParams();
  const user = users[parseInt(id) - 1];
  const [reposCount, setReposCount] = useState(null);
  const [error, setError] = useState(null);
  const query = user.login;

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const reposData = await getUserRepos(query);
        console.log(reposData);
        if (reposData.error) {
          setError(reposData.error);
        } else {
          const userRepos = reposData.data.items.filter(
            (repo) => repo.owner.login === user.login,
          );
          setReposCount(userRepos.length);
        }
      } catch (error) {
        setError('Нет данных');
      }
    };
    fetchRepos();
  }, [query, user.login]);

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
                Репозиториев: {reposCount || error}
              </S.UserItemText>
            </S.UserText>
            <S.UserItemLink href={user.html_url} target='_blank'>
              {'Перейти в аккаунт'}
            </S.UserItemLink>
            <S.UserListLink>
              <Link to='/surfer'> {'Обратно к пользователям'}</Link>
            </S.UserListLink>
          </S.UserCard>
        )}
      </S.Container>
    </S.Section>
  );
};
