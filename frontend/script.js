/* =========================================================
   NORTHSTAR CUSTOMER SUPPORT
   FRONTEND JAVASCRIPT
========================================================= */


/* =========================================================
   1. GET THE HTML ELEMENTS

   document.getElementById() allows JavaScript to find
   elements that we created in the HTML file.
========================================================= */

const API_BASE_URL ="https://localhost:80000";


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

   For now this is frontend-only.

   There is no backend or database available yet, so we
   use sample data to demonstrate how the interface works.

   Later, this section can be connected to the backend.
========================================================= */

checkOrderButton.addEventListener("click", function () {

    const orderId =
        orderIdInput.value.trim();


    /* Make sure the user entered an Order ID. */

    if (orderId === "") {

        orderResult.textContent =
            "Please enter an Order ID.";

        orderResult.classList.add("show");

        return;
    }


    /*
        Sample frontend response.

        This is not a database query.
        It only demonstrates the expected result.
    */

    orderResult.innerHTML = `
        <strong>Order ID:</strong> #${orderId}<br>
        <strong>Product:</strong> Designer Silk Scarf<br>
        <strong>Current Status:</strong> Shipped
    `;

    orderResult.classList.add("show");

});



/* =========================================================
   3. INITIATE A RETURN

   The user enters the Order ID and reason for the return.

   Since there is no backend yet, we only display a sample
   return request result.
========================================================= */

submitReturnButton.addEventListener("click", function () {

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


    /*
        A temporary return ID is created for the
        frontend demonstration.
    */

    const returnId =
        Math.floor(Math.random() * 90) + 10;


    returnResult.innerHTML = `
        <strong>Return Request Created</strong><br>
        Return ID: #${returnId}<br>
        Order ID: #${orderId}<br>
        Reason: ${reason}<br>
        Initial Status: Pending
    `;

    returnResult.classList.add("show");

});



/* =========================================================
   4. CHECK RETURN STATUS

   This demonstrates the expected frontend response when
   a customer enters a Return ID.
========================================================= */

checkReturnButton.addEventListener("click", function () {

    const returnId =
        returnIdInput.value.trim();


    if (returnId === "") {

        returnStatusResult.textContent =
            "Please enter a Return ID.";

        returnStatusResult.classList.add("show");

        return;
    }


    returnStatusResult.innerHTML = `
        <strong>Return ID:</strong> #${returnId}<br>
        <strong>Associated Order:</strong> #18<br>
        <strong>Reason:</strong> Wrong Brand<br>
        <strong>Return Status:</strong> Pending
    `;

    returnStatusResult.classList.add("show");

});



/* =========================================================
   5. SUPPORT INTENT CLASSIFIER

   This is a simple frontend demonstration.

   The JavaScript checks keywords in the customer's
   message and determines the most likely support category.

   This is not AI and does not connect to a backend.
========================================================= */

classifyButton.addEventListener("click", function () {

    const message =
        supportMessage.value.trim().toLowerCase();


    if (message === "") {

        classificationResult.textContent =
            "Please enter a customer support question.";

        classificationResult.classList.add("show");

        return;
    }


    let intent =
        "General Support";


    /*
        Check the message for common keywords.
    */

    if (
        message.includes("where") ||
        message.includes("track") ||
        message.includes("delivery") ||
        message.includes("package")
    ) {

        intent =
            "Order Tracking";

    } else if (
        message.includes("return") ||
        message.includes("wrong") ||
        message.includes("defective")
    ) {

        intent =
            "Return Request";

    } else if (
        message.includes("refund") ||
        message.includes("money back")
    ) {

        intent =
            "Refund Request";

    } else if (
        message.includes("available") ||
        message.includes("stock") ||
        message.includes("size")
    ) {

        intent =
            "Product Availability";

    }


    classificationResult.innerHTML = `
        <strong>Detected Intent:</strong> ${intent}
    `;

    classificationResult.classList.add("show");

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
   when the backend is provided.
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