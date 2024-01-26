export const getUserRepos = async (query) => {

  const response = await fetch(query);

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
