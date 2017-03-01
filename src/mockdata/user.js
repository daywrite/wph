import Mock from 'mockjs'

let Users = []
let Random = Mock.Random

for (var i=0; i<40; i++) {
  Users.push (Mock.mock ({
    id: Mock.Random.guid(),
    title: Mock.Random.title(3,7),
    date: Random.date(),
    name: Random.name(),
    replyCount: Random.integer(20,100),
    visitCount: Random.integer(100,100)
  }))
}
export { Users }
