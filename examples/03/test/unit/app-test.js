'use strict'

const request = require('supertest')
const nock = require('nock')
const expect = require('chai').expect



describe('main tests', () => {

	before(() => {
		app = require('../../app').app
	})


	const RUNTIME_ENDPOINT_URL = 'http://localhost:3000'
	let runtimeNock
	beforeEach(() => {
		runtimeNock = nock(RUNTIME_ENDPOINT_URL)
	})

	afterEach(() => {
		nock.cleanAll()
	})


	it('Successful request', async () => {
		runtimeNock.get('/')
		.reply(200, "Hello")

		const response = await request(app)
		  .post('/')
		  .expect(200)

		  expect(response.body).to.have.property('hello', 'world')
	  })



})