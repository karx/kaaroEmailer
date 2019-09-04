const config = require("./config.json");
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(config.SENDGRID_API_KEY);

module.exports = async (value) =>
new Promise((resolve, reject) => {
    sgMail.send(value, (error, response, data) => {
        if (error) reject(error)
        else resolve(data)
    })
});