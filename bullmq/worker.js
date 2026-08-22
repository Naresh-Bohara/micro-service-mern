const { Worker } = require("bullmq");

const sendEmail = () =>
    new Promise((resolve) =>
        setTimeout(() => resolve(), 5 * 1000)
    );

const worker = new Worker(
    "email-queue",
    async (job) => {
        console.log(`Message received with id ${job.id}`);
        console.log(`Processing message`);
        console.log(`Sending email to ${job.data.email}`);

        await sendEmail();

        console.log("email sent!");
    },
    {
        connection: {
            host: "localhost",
            port: 6379
        }
    }
);