

import { app } from "../lib";
import request from "supertest";

test('adds 1 + 2 to equal 3', () => {
  expect(1 + 2).toBe(3);
});

describe('/', () => {
  it('/ 200', async () => {
    await request(app)
      .get('/')
      .expect(200)
  });
});

