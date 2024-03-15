import { postService } from '../service.js';

describe('post Service suite', () => {
  it('Should return all the posts', () => {
    expect(postService.findAll()).toStrictEqual({
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
    });
  });

  it('Should return one post by id', () => {
    expect(postService.findOneById(1)).toStrictEqual(
      {
        post: {
            id: 1,
            title: "Title1",
            content: "Post 1"
        }
      }
    );
  });

  it('Should return the created post object', () => {
    expect(postService.create({ userId: 3, title: "Post 4", content: "Content post 4" })).toStrictEqual({
      post: {
          title: "Post 4",
          content: "Content post 4",
          id: 4
      }
    });
  });

});