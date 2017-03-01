import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { Users } from '../mockdata/user'

let _users = Users

export default {
  bootstrap () {
    let mock = new MockAdapter(axios, {delayResponse: 3000})
    mock.onGet('/user/list').reply(200, { 
      articles: _users
    })
  }
}