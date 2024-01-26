export const getUserRepos = async (query) => {
  const queryToString = encodeURIComponent(`user:${query}`);

  const response = await fetch(
    `https://api.github.com/search/users?q=${queryToString}`,
  );

  if (response.status === 403) {
    throw new Error(
      'Вы не авторизованы. Нужно ждать смены IP-адреса. Попробуйте позже',
    );
  } else if (response.status === 503) {
    throw new Error('Сервер упал');
  }

  const data = await response.json();
  return data;
};
