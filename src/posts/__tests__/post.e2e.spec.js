import supertest from "supertest";
import { server } from "../../app";

describe('Post', () => {

  afterAll(() => {
    server.close();
  });
  
  describe('get all posts', () => {
    it('Should return 200', async () => {
      const response = await supertest(server).get('/posts');
      expect(response.status).toBe(200);
      expect(response.body).toEqual({
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
          },
          {
            "id": 3,
            "title": "Title3",
            "content": "Post 3"
          }
        ]
        })
    });
  });

  describe('get one post by Id', () => {
    it('Should return 200', async() => {
      await supertest(server).get('/posts/1').expect(200);
    });
  });

  describe('create a new post', () => {
    it('Should return 201 and new post object', async() => {
      const newPost = {
        title: "Post5",
        content: "Post 5 content",
        userId: "3"
      }
      const response = await supertest(server).post('/posts').send(newPost);
      expect(response.status).toBe(201);
      expect(response.body).toEqual({
        post: {
          id: 4,
          title: "Post5",
          content: "Post 5 content"
        }
      });
    });
  });
});