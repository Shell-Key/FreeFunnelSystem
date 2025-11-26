/*
  Replace PayPal links below with your real PayPal "Buy Now" links.
*/

const paypalLinks = {
    "Basic": "[PAYPAL_LINK_BASIC]",
    "Premium": "[PAYPAL_LINK_PREMIUM]",
    "Ultimate": "[PAYPAL_LINK_ULTIMATE]"
};

function buyProduct() {
    const selected = document.getElementById("product").value;
    const redirect = paypalLinks[selected];

    if (!redirect || redirect.includes("[PAYPAL_LINK")) {
        alert("PayPal link missing! Replace placeholders in script.js.");
        return;
    }

    window.location.href = redirect;
}
