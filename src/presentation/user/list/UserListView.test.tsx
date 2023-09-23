import React from 'react';
import { render, screen } from '@testing-library/react';
import UserListView from './UserListView';

jest.mock('./hooks/useFetchUsers', () => ({
  useFetchUsers: () => ({
    data: [
      {
        "id": 1,
        "name": "Leanne Graham"
      },
      {
        "id": 2,
        "name": "Ervin Howell"
      },
      {
        "id": 3,
        "name": "Clementine Bauch"
      }
    ]
    ,
    isLoading: false,
    isError: false,
  }),
}));

describe('PostGridView', () => {
  it('renders posts correctly', () => {
    render(<UserListView onUserClick={console.log} />);

    expect(screen.getByText('Leanne Graham')).toBeInTheDocument();
    expect(screen.getByText('Ervin Howell')).toBeInTheDocument();
    expect(screen.getByText('Clementine Bauch')).toBeInTheDocument();
  });
});
