const users = {
    userIds: [3, 2],
    data: [
        {
            name: "John",
            age: 34
        },
        {
            name: "Andrew",
            age: 64
        }
    ]
};
let iterate = 0;
for (let i = 0; i < users.data.length; i++) {
    iterate = i
    // console.log(iterate)
    users.data.slice(i).map(user => {
        console.log(user)
        users.userIds.map(item => {
            user.id = item
        })
    })
}
// console.log(users.data)