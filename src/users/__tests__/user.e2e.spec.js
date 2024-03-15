import supertest from "supertest";
import { server } from "../../app";

describe('User', () => {

  afterAll(() => {
    server.close();
  });

  describe('get all users', () => {
    it('Should return 200', async () => {
      await supertest(server).get('/users').expect(200);
    });
  });

  describe('get one user by Id', () => {
    it('Should return 200', async() => {
      await supertest(server).get('/users/1').expect(200);
    });
  });

  describe('create a new user', () => {
    it('Should return 201 and the created user object', async() => {
      const newUser = {
        name: "User5",
        email: "user5@email.com"
      }
      const response = await supertest(server).post('/users').send(newUser)
      expect(response.status).toBe(201);
      expect(response.body).toEqual({
        user: {
          id: 4,
          name: "User5",
          email: "user5@email.com",
          posts: []
        }
      });
    });
  });
});