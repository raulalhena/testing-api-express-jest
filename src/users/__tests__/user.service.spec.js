import { userService } from '../service.js';

describe('User Service suite', () => {
  it('Should return all the users', () => {
    expect(userService.findAll()).toStrictEqual({
      users: [
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
      ]})
  });

  it('Should return one user by id', () => {
    expect(userService.findOneById(1)).toStrictEqual(
      {
        "id": 1,
        "name": "User1",
        "email": "user1@email.com",
        "posts": [
            {
                "id": 1,
                "title": "Title1",
                "content": "Post 1"
            },
            {
                "id": 2,
                "title": "Title2",
                "content": "Post 2"
            }
        ]
    }
    );
  });

  it('Should return the created user object', () => {
    expect(userService.create({ username: 'User4', email: 'user4@email.com' })).toStrictEqual({
      user: {
          id: 4,
          username: 'User4', 
          email: 'user4@email.com',
          posts: []
      }
    });
  });

  it('Should return the posts objects created by user', () => {
    expect(userService.findUserPosts([1,2])).toStrictEqual([
      {
          "id": 1,
          "title": "Title1",
          "content": "Post 1"
      },
      {
          "id": 2,
          "title": "Title2",
          "content": "Post 2"
      }
    ]);
  });
});