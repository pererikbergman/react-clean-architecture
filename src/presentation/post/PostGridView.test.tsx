import React from 'react';
import { render, screen } from '@testing-library/react';
import PostGridView from './PostGridView';

jest.mock('./hooks/useFetchPostByUser', () => ({
  useFetchPostByUser: () => ({
    data: [
      { userId: 1, id: 1, title: 'Test Title 1', body: 'Test Body 1' },
      { userId: 2, id: 2, title: 'Test Title 2', body: 'Test Body 2' },
    ],
    isLoading: false,
    isError: false,
  }),
}));

describe('PostGridView', () => {
  it('renders posts correctly', () => {
    render(<PostGridView userId={1} />);

    expect(screen.getByText('Test Title 1')).toBeInTheDocument();
    expect(screen.getByText('Test Title 2')).toBeInTheDocument();
    expect(screen.getByText('User ID: 1')).toBeInTheDocument();
    expect(screen.getByText('User ID: 2')).toBeInTheDocument();
    expect(screen.getByText('Post ID: 1')).toBeInTheDocument();
    expect(screen.getByText('Post ID: 2')).toBeInTheDocument();
    expect(screen.getByText('Test Body 1')).toBeInTheDocument();
    expect(screen.getByText('Test Body 2')).toBeInTheDocument();
  });
});
