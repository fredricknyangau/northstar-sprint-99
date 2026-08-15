/* =========================================================
   NORTHSTAR CUSTOMER SUPPORT
   FRONTEND JAVASCRIPT
========================================================= */


/* =========================================================
   1. GET THE HTML ELEMENTS

   document.getElementById() allows JavaScript to find
   elements that we created in the HTML file.
========================================================= */

const API_BASE_URL = "http://localhost:8000";


let currentOrderId = null;
let currentReturnId = null;

let orders = [];
let returns = [];
let products = [];


const viewIds = [
    "homeView",
    "orderStatusView",
    "returnRequestView",
    "returnStatusView",
    "supportView"
];

function showView(viewId) {

    viewIds.forEach(function (id) {
        const view = document.getElementById(id);
        if (view) {
            view.classList.remove("active");
        }
    });
}

const orderIdInput =
    document.getElementById("orderId");

const checkOrderButton =
    document.getElementById("checkOrderButton");

const orderResult =
    document.getElementById("orderResult");


const returnOrderIdInput =
    document.getElementById("returnOrderId");

const returnReasonInput =
    document.getElementById("returnReason");

const submitReturnButton =
    document.getElementById("submitReturnButton");

const returnResult =
    document.getElementById("returnResult");


const returnIdInput =
    document.getElementById("returnId");

const checkReturnButton =
    document.getElementById("checkReturnButton");

const returnStatusResult =
    document.getElementById("returnStatusResult");


const supportMessage =
    document.getElementById("supportMessage");

const classifyButton =
    document.getElementById("classifyButton");

const classificationResult =
    document.getElementById("classificationResult");


/* =========================================================
   2. CHECK ORDER STATUS

   Calls GET /orders/{id}/status on the live backend.
========================================================= */

checkOrderButton.addEventListener("click", async function () {

    const orderId =
        orderIdInput.value.trim();


    /* Make sure the user entered an Order ID. */

    if (orderId === "") {

        orderResult.textContent =
            "Please enter an Order ID.";

        orderResult.classList.add("show");

        return;
    }


    try {

        const response =
            await fetch(`${API_BASE_URL}/orders/${orderId}/status`);


        if (response.status === 404) {

            orderResult.textContent =
                "Order not found. Please check the ID and try again.";

            orderResult.classList.add("show");

            return;
        }


        if (!response.ok) {

            orderResult.textContent =
                "Something went wrong. Please try again.";

            orderResult.classList.add("show");

            return;
        }


        const data =
            await response.json();


        orderResult.innerHTML = `
            <strong>Order ID:</strong> #${data.id}<br>
            <strong>Product:</strong> ${data.product_name}<br>
            <strong>Current Status:</strong> ${data.status}
        `;

        orderResult.classList.add("show");


    } catch (error) {

        orderResult.textContent =
            "Could not reach the server. Please try again shortly.";

        orderResult.classList.add("show");
    }

});



/* =========================================================
   3. INITIATE A RETURN

   Calls POST /returns on the live backend.
========================================================= */

submitReturnButton.addEventListener("click", async function () {

    const orderId =
        returnOrderIdInput.value.trim();

    const reason =
        returnReasonInput.value.trim();


    if (orderId === "") {

        returnResult.textContent =
            "Please enter an Order ID.";

        returnResult.classList.add("show");

        return;
    }


    if (reason === "") {

        returnResult.textContent =
            "Please enter a reason for the return.";

        returnResult.classList.add("show");

        return;
    }


    try {

        const response =
            await fetch(`${API_BASE_URL}/returns`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    order_id: parseInt(orderId),
                    reason: reason
                })
            });


        if (response.status === 404) {

            returnResult.textContent =
                "Order not found. Please check the Order ID.";

            returnResult.classList.add("show");

            return;
        }


        if (!response.ok) {

            returnResult.textContent =
                "Something went wrong creating the return.";

            returnResult.classList.add("show");

            return;
        }


        const data =
            await response.json();


        returnResult.innerHTML = `
            <strong>Return Request Created</strong><br>
            Return ID: #${data.id}<br>
            Order ID: #${data.order_id}<br>
            Reason: ${data.reason}<br>
            Initial Status: ${data.status}
        `;

        returnResult.classList.add("show");


    } catch (error) {

        returnResult.textContent =
            "Could not reach the server. Please try again shortly.";

        returnResult.classList.add("show");
    }

});



/* =========================================================
   4. CHECK RETURN STATUS

   Calls GET /returns/{id}/status on the live backend.
========================================================= */

checkReturnButton.addEventListener("click", async function () {

    const returnId =
        returnIdInput.value.trim();


    if (returnId === "") {

        returnStatusResult.textContent =
            "Please enter a Return ID.";

        returnStatusResult.classList.add("show");

        return;
    }


    try {

        const response =
            await fetch(`${API_BASE_URL}/returns/${returnId}/status`);


        if (response.status === 404) {

            returnStatusResult.textContent =
                "Return not found. Please check the ID.";

            returnStatusResult.classList.add("show");

            return;
        }


        if (!response.ok) {

            returnStatusResult.textContent =
                "Something went wrong. Please try again.";

            returnStatusResult.classList.add("show");

            return;
        }


        const data =
            await response.json();


        returnStatusResult.innerHTML = `
            <strong>Return ID:</strong> #${data.id}<br>
            <strong>Associated Order:</strong> #${data.order_id}<br>
            <strong>Reason:</strong> ${data.reason}<br>
            <strong>Return Status:</strong> ${data.status}
        `;

        returnStatusResult.classList.add("show");


    } catch (error) {

        returnStatusResult.textContent =
            "Could not reach the server. Please try again shortly.";

        returnStatusResult.classList.add("show");
    }

});



/* =========================================================
   5. SUPPORT INTENT CLASSIFIER

   Calls POST /support/classify on the live backend.
========================================================= */

classifyButton.addEventListener("click", async function () {

    const message =
        supportMessage.value.trim();


    if (message === "") {

        classificationResult.textContent =
            "Please enter a customer support question.";

        classificationResult.classList.add("show");

        return;
    }


    try {

        const response =
            await fetch(`${API_BASE_URL}/support/classify`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ text: message })
            });


        if (!response.ok) {

            classificationResult.textContent =
                "Something went wrong classifying your message.";

            classificationResult.classList.add("show");

            return;
        }


        const data =
            await response.json();


        const labelMap = {
            "order_status": "Order Tracking",
            "return_query": "Return Request"
        };

        const intentLabel =
            labelMap[data.category] || data.category;


        classificationResult.innerHTML = `
            <strong>Detected Intent:</strong> ${intentLabel}
            <br><small>Confidence: ${(data.confidence * 100).toFixed(0)}%</small>
        `;

        classificationResult.classList.add("show");


    } catch (error) {

        classificationResult.textContent =
            "Could not reach the server. Please try again shortly.";

        classificationResult.classList.add("show");
    }

});



/* =========================================================
   6. EXAMPLE QUESTIONS

   Clicking an example automatically places its text
   inside the classifier input.
========================================================= */

const exampleButtons =
    document.querySelectorAll(".example-button");


exampleButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        supportMessage.value =
            button.textContent;

    });

});



/* =========================================================
   7. RECENT ORDER BUTTONS

   These buttons currently show a simple browser message.

   They can later be connected to the real order data
   when needed as a dedicated feature.
========================================================= */

const orderButtons =
    document.querySelectorAll(".order-button");


orderButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const orderNumber =
            button.dataset.order;


        alert(
            "Viewing Order #" + orderNumber
        );

    });

});



/* =========================================================
   8. SUPPORT HOME BUTTON

   Reloads the current page and returns the user to the
   main support screen.
========================================================= */

const supportHome =
    document.getElementById("supportHome");


supportHome.addEventListener("click", function () {

    window.location.reload();

});
