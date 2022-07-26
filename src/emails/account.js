const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'moazbasheer97@gmail.com',
        subject: 'Welcome to the App',
        text: `Welcome to the app, ${name}. Let me know you get along with the app`
    });
}
const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'moazbasheer97@gmail.com',
        subject: 'Sorry to see you go!',
        text: `Good bye, ${name}. I hope to see you soon`
    });
}
module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
};