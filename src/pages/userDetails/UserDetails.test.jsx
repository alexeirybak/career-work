// import { render, screen } from '@testing-library/react';
// import { UserDetails } from './UserDetails';

// describe('UserDetails component', () => {
//     it('UserDetails renders', () => {
//         render(<UserDetails />)
//     } )
// })

import { render, screen } from '@testing-library/react';
import { UserDetails } from './UserDetails';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

describe('UserDetails component', () => {
    it('renders user details correctly', async () => {
      const users = [
        {
          login: 'testuser',
          avatar_url:
            'https://https://avatars.githubusercontent.com/u/3065736?v=4example.com/avatar.png',
          html_url: 'https://github.com/Koncopd',
        },
      ];
  
      jest.spyOn(global, 'fetch').mockResolvedValue({
        json: async () => ({ repos_count: 5 }),
      });
  
      render(
        <MemoryRouter initialEntries={['/user/1']}>
          <Routes>
            <Route path='/user/:id' element={<UserDetails users={users} />} />
          </Routes>
        </MemoryRouter>,
      );
  
      await screen.findByText('Логин: testuser');
      await screen.findByText('Репозиториев');
      expect(
        screen.getByText('Подробная информация о пользователе testuser'),
      ).toBeInTheDocument();
    });
  });
