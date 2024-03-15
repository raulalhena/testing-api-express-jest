import jest from 'jest-mock';
import { userController } from '../controller.js';

const mockResponse = () => {
  const res = {};

  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);

  return res;
}

const mockRequest = () => {
  return {
    data: null
  }
}

describe('User Service suite', () => {
  it('Should be status 200', () => {
    const res = mockResponse();
    const req = mockRequest();
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
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
    expect(userController.findOneById(1)).toStrictEqual(
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
    expect(userController.create({ username: 'User4', email: 'user4@email.com' })).toStrictEqual({
      user: {
          id: 4,
          username: 'User4', 
          email: 'user4@email.com',
          posts: []
      }
    });
  });
});