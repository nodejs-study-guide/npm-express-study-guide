'use strict'

const request = require('supertest')
const nock = require('nock')
const expect = require('chai').expect

describe('main tests', () => {
  
  let app
  before(() => {
    app = require('../../app').app
  })

  const RUNTIME_ENDPOINT_URL = 'http://localhost'
  let runtimeNock
  beforeEach(() => {
    runtimeNock = nock(RUNTIME_ENDPOINT_URL)
  })

  afterEach(() => {
    nock.cleanAll()
  })

  it('Successful request', async () => {
    const mockResponse = "hello"
    
    runtimeNock.get('/')
      .reply(200, mockResponse)

    const res = await request(app)
  		  .get('/')
  		  .expect(200)

		  expect(res.text).to.eql('hello')
	  })
})
