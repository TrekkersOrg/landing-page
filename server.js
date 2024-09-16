const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 4000;

// Middleware to serve static files like HTML, CSS, JS
app.use(express.static(path.join(__dirname, 'Views')));

// Route for subscription.html
app.get('/subscription.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'Views', 'subscription.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});




// const express = require('express');
const stripe = require('stripe')('sk_test_51Pxtc9P568PzVegz5KnTxchpFYicWSY6BrVkMDs26sTvSF2yfbtWVb9Irfyhe3U1bj4p9PdOU1exdyN3BiFODA5N004kXDiTwK');

app.post('/create-checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        mode: 'subscription',
        line_items: [
    {
        price: '$20.00', // Replace with the price ID from Stripe
        quantity: 1,
    },
    ],
    success_url: 'https://your-domain.com/success',
    cancel_url: 'https://your-domain.com/cancel',
});
res.json({ id: session.id });
});

app.listen(3000, () => console.log('Server running on port 3000'));
