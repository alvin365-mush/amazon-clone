const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
    "sk_test_51IVbPBJBcgSx3UVrC6CHVw9BcO35JgmmJLme0aFgM2X5nYrsIb5vH29KS5Rvd3dNARWNFcOtJW59Kyaw07aKy2pE00glQy8CPX",
);

// app

// app config
const app = express();

// middlewares
app.use(cors({origin: true}));
app.use(express.json());
// api routes
app.get("/", (request, response) => response.status(200).send("Hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
// listen command
exports.api = functions.https.onRequest(app);

// example endpoint
// http://localhost:5001/clone-22134/us-central1/api

