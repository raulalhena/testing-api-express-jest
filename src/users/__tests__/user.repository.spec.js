import { userRepository } from '../repository.js';

describe('User Repository suite', () => {
  it('Should return all the users', () => {
    expect(userRepository.findAll()).toStrictEqual([
      {
        id: 1,
        name: 'User1',
        email: 'user1@email.com',
        posts: [1, 2]
      },
      {
        id: 2,
        name: 'User2',
        email: 'user2@email.com',
        posts: [3]
      },
      {
        id: 3,
        name: 'User3',
        email: 'user3@email.com',
        posts: []
      },
    ])
  });

  it('Should return one user by id', () => {
    expect(userRepository.findOneById(1)).toStrictEqual(
      {
        "id": 1,
        "name": "User1",
        "email": "user1@email.com",
        "posts": [1, 2]
      }
    );
  });

  it('Should return the created user object', () => {
    expect(userRepository.create({ username: 'User4', email: 'user4@email.com' })).toStrictEqual({
      id: 4,
      username: 'User4', 
      email: 'user4@email.com',
      posts: []
    });
  });
});