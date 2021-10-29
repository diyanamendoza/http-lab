const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {
  it('gets hi from /', async() => {
    const res = await request(app).get('/');

    expect(res.text).toEqual('hi');
  });

  it('gets echo of body from /echo', async() => {
    const res = await request(app)
      .post('/echo')
      .send('hi');

    expect(res.text).toEqual('hi');
  });

  it('gets green from /green', async() => {
    const res = await request(app).get('/green');
    expect(res.text).toContain('green');
  });

  it('gets green from /blue', async() => {
    const res = await request(app).get('/blue');
    expect(res.text).toContain('blue');
  });

  it('gets green from /red', async() => {
    const res = await request(app).get('/red');
    expect(res.text).toContain('red');
  });


});
