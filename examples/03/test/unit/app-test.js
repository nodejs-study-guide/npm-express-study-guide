'use strict'

const request = require('supertest')
const expect = require('chai').expect

describe('main tests', () => {
  let app
  before(() => {
    app = require('../../app').app
  })

  it('Successful request', async () => {
    const mockResponse = {
      "text": "hello",
    }

    const res = await request(app)
      .get('/')
      .expect(200)

    expect(res.text).to.equal('hello from my app')
  })
})
