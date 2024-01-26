export const getUserRepos = async (query) => {
  const queryResponse = encodeURIComponent(`user:${query}`);

  try {
    const response = await fetch(
      `https://api.github.com/search/users?q=${queryResponse}`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch repositories');
    }

    const repos = await response.json();
    return { data: repos, error: null };
  } catch (error) {
    if (error.response && error.response.status === 403) {
      return { data: null, error: 'Более 10 запросов в минуту! Попробуйте позже' };
    } else if (error.response && error.response.status === 503) {
      return { data: null, error: 'Сервер сломался' };
    } else {
      return { data: null, error: 'Произошла ошибка при запросе данных' };
    }
  }
};



//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