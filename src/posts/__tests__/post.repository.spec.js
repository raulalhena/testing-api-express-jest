import { postRepository } from '../repository.js';

describe('Post Repository suite', () => {
  it('Should return all the posts', () => {
    expect(postRepository.findAll()).toStrictEqual([
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
  ])
  });

  it('Should return one post by id', () => {
    expect(postRepository.findOneById(1)).toStrictEqual(
      {
        "id": 1,
        "title": "Title1",
        "content": "Post 1"
      }
    );
  });

  it('Should return the created post object', () => {
    expect(postRepository.create({ title: "Post 4", content: "Content post 4" })).toStrictEqual({
      title: "Post 4",
      content: "Content post 4",
      id: 4
    });
  });
});