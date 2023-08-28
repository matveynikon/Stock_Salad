// This is your test secret API key.
const stripe = require('stripe')('sk_test_51MeFSvGuzJmJKFGDg6Dbw4Cbl8G1A1jVKsIMaCZWxeHcQeE4i2NDzNkj3TLuSZ4MZxckqo5mM1Y9WxRizwPLhHCN0075ts3t8a');
const express = require('express');
const app = express();
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.raw());
const {MongoClient} = require('mongodb');


const YOUR_DOMAIN = 'http://localhost:4242';

app.post('/create-checkout-session', async (req, res) => {
  const prices = await stripe.prices.list({
    lookup_keys: [req.body.lookup_key],
    expand: ['data.product'],
  });
  const session = await stripe.checkout.sessions.create({
    billing_address_collection: 'auto',
    line_items: [
      {
        price: prices.data[0].id,
        // For metered billing, do not pass quantity
        quantity: 1,

      },
    ],
    mode: 'subscription',
    success_url: `${YOUR_DOMAIN}/success.html?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${YOUR_DOMAIN}/cancel.html`,
  });

  res.redirect(303, session.url);
});

app.post('/create-portal-session', async (req, res) => {
  // For demonstration purposes, we're using the Checkout session to retrieve the customer ID.
  // Typically this is stored alongside the authenticated user in your database.
  const { session_id } = req.body;
  const checkoutSession = await stripe.checkout.sessions.retrieve(session_id);

  // This is the url to which the customer will be redirected when they are done
  // managing their billing with the portal.
  const returnUrl = YOUR_DOMAIN;

  const portalSession = await stripe.billingPortal.sessions.create({
    customer: checkoutSession.customer,
    return_url: returnUrl,
  });

  res.redirect(303, portalSession.url);
});

app.post(
  '/webhook',
  express.raw({ type: 'application/json' }),
  (request, response) => {
    let rb = JSON.stringify(request.body);
    //console.log(typeof rb)
    //console.log(rb)
    // Replace this endpoint secret with your endpoint's unique secret
    // If you are testing with the CLI, find the secret by running 'stripe listen'
    // If you are using an endpoint defined with the API or dashboard, look in your webhook settings
    // at https://dashboard.stripe.com/webhooks
    const endpointSecret = "whsec_f1050e0ca7e0621efaf271cb3484a044b7fb23be30beb6acef996b2f416e4d1b";
    // Only verify the event if you have an endpoint secret defined.
    // Otherwise use the basic event deserialized with JSON.parse
    console.log(request.body)
    if (endpointSecret) {
      // Get the signature sent by Stripe
      const signature = request.headers['stripe-signature'];
      try {
        sev = stripe.webhooks.constructEvent(
          request.body,
          signature,
          endpointSecret
        );
      } catch (err) {
        console.log(`⚠️  Webhook signature verification failed.`, err.message);
        return response.sendStatus(400);
      }
    }
    let subscription;
    let status;
    // Handle the event
    switch (sev.type) {
      case 'customer.subscription.trial_will_end':
        subscription = sev.data.object;
        status = subscription.status;
        console.log(`Subscription status is ${status}.`);
        // Then define and call a method to handle the subscription trial ending.
        // handleSubscriptionTrialEnding(subscription);
        break;
      case 'customer.subscription.deleted':
        subscription = sev.data.object;
        status = subscription.status;
        console.log(`Subscription status is ${status}.`);
        // Then define and call a method to handle the subscription deleted.
        // handleSubscriptionDeleted(subscriptionDeleted);
        break;
      case 'customer.subscription.created':
        subscription = sev.data.object;
        status = subscription.status;
        console.log(`Subscription status is ${status}.`);
        // Then define and call a method to handle the subscription created.
        // handleSubscriptionCreated(subscription);
        break;
      case 'customer.subscription.updated':
        subscription = sev.data.object;
        status = subscription.status;
        console.log(`Subscription status is ${status}.`);
        if (status == "payment_intent.succeeded"){
        
        
        
          async function signin(uidv) {
            var uri = "mongodb+srv://Matt_Nikonorov:Zs64GU5Qn2UhGFDG@cluster0.xihqakg.mongodb.net/?retryWrites=true&w=majority"
            var client = new MongoClient(uri);
            try {
                await client.connect();
            
            } catch (e) {
                console.error(e);
            }
        
            var database = client.db("db0");
            var mdb = database.collection("cl0");
            var query = { iden: uidv };
            var usersi = await mdb.findOne(query);

            var query2 = {
              $set: {
                status: "subscribed",
              },
            };
            var result = await mdb.updateOne(query, query2)
        
            client.close();
          }
        }
        // Then define and call a method to handle the subscription update.
        // handleSubscriptionUpdated(subscription);
        break;
      default:
        // Unexpected sev type
        console.log(`Unhandled sev type ${sev.type}.`);
    }
    // Return a 200 response to acknowledge receipt of the sev
    response.send();
  }
);
