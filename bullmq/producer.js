const {Queue} = require("bullmq");
const notificationQueue = new Queue("email-queue");

const init = async()=>{
    const result = await notificationQueue.add('email to naresh', {
        email:'nareshbohara.dev',
        subject: 'Welcome message!',
        body: 'hey naresh, welcome to the platform!'
    })

    console.log("job added to queue!", result.id)
}

init();