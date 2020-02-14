import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_J8a1Vc4zClWwtOZIHFbIH7WO00t71bZmHe";

  const onToken = token => {
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="R&R Project"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
