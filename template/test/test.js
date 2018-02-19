'use strict'

const { describe, it, beforeEach, afterEach } = require('mocha')
const Helper = require('hubot-test-helper')
const { expect } = require('chai')

const helper = new Helper('../src/index.js')

describe('{{name}}', function () {
  beforeEach(() => {
    this.room = helper.createRoom()
  })

  afterEach(() => {
    this.room.destroy()
  })

  describe('test', () => {
    beforeEach(done => {
      this.room.user.say('user', 'hubot {{name}}')
      setTimeout(done, 500)
    })

    it('should reply', () => {
      expect(this.room.messages).to.eql([
        ['user', 'hubot {{name}}'],
        ['hubot', '{{name}}']
      ])
    })
  })
})
