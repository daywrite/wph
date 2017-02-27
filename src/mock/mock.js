import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { Users } from '../mockdata/user'

let _users = Users

export default {
  bootstrap () {
    let mock = new MockAdapter(axios)

    mock.onGet('/user/list').reply(200, {
      data: [
        { id: 1, name: 'John Smith' }
      ]
    })
  }
}