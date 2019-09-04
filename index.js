const async_send = require('./await-send');
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json());
// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }));
// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));
// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }));
// parse an text body into a string
app.use(bodyParser.text({ type: 'text/plain' }));
// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: false }));


app.post('/new_email_flutter', async (request, response) => {
  const payload = request.body;
  const payloadJson = JSON.parse(payload);
  console.log(payloadJson);

  const msg = {
    to: payloadJson.toAddress,
    from: 'noreply@flutterarsenal.com',
    template_id: "d-6fa2fa9c6ff5453b94a2f2a823481a97"
  };

  try {
    mail_sent = await async_send(msg);
    response.status(200).send("Success");
  } catch (error) {
    response.status(500).send("Oops");
    console.log(error);

  }


});

app.listen(3149, function (err) {
  if (err) {
    throw err
  }
  console.log('SendMail Server started on port 3149')
})

