import React, {useEffect, useState} from 'react';
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import PaymentForm from "./PaymentForm"

const PUBLIC_KEY = 'pk_test_w1U3RM7m1e0bfN4il6FiN6jg'
const stripeTestPromise = loadStripe(PUBLIC_KEY)

function StripeContainer({totalPrice, currentUser}) {
    const [clientSecret, setClientSecret] = useState("")

    useEffect(() => {
        fetch("/payment", {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({
                amount: totalPrice,
                currency: "usd",
                name: currentUser.name,
                email: currentUser.email,
                address: currentUser.address
            })
        })
        .then(res => res.json())
        .then(data => setClientSecret(data.clientSecret))
    }, [])

    const appearance = {
        theme: "stripe"
    }

    const options = {
        clientSecret,
        appearance,
    }
    
    return (
        <div>
            {clientSecret && (
                <Elements options={options} stripe={stripeTestPromise}>
                    <PaymentForm />
                </Elements>
            )}
        </div>
    );
}

export default StripeContainer;