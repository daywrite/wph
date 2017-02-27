import Mock from 'mockjs'

const Users = []

for (let i in 40) {
  Users.push (Mock.mock ({
    id: Mock.Random.guid(),
    name: Mock.Random.cname(),
    'age|18-60': 1
  }))
}
export { Users }
