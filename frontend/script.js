const questionInput = document.getElementById("questionInput");
const submitQuestion = document.getElementById("submitQuestion");

const orderStatusButton = document.getElementById("orderStatusButton");
const returnButton = document.getElementById("returnButton");
const stockButton = document.getElementById("stockButton");

const response = document.getElementById("response");
const ticketHistory = document.getElementById("ticketHistory");


function showResponse(message) {
    response.innerHTML = message;
}


function addToHistory(question) {
    const ticket = document.createElement("div");

    ticket.className = "ticket";

    ticket.innerHTML = `
        <strong>Customer Question:</strong>
        <p>${question}</p>
    `;

    if (ticketHistory.textContent.includes("No tickets yet")) {
        ticketHistory.innerHTML = "";
    }

    ticketHistory.prepend(ticket);
}


submitQuestion.addEventListener("click", function () {

    const question = questionInput.value.trim();

    if (question === "") {
        showResponse("<p>Please enter a question first.</p>");
        return;
    }

    showResponse(`
        <h3>Question Received</h3>
        <p>Our support system is processing your question.</p>
        <p><strong>Question:</strong> ${question}</p>
    `);

    addToHistory(question);

    questionInput.value = "";
});


orderStatusButton.addEventListener("click", function () {

    questionInput.value = "Where is my order #482133?";

});


returnButton.addEventListener("click", function () {

    questionInput.value = "How do I return my order #482133?";

});


stockButton.addEventListener("click", function () {

    questionInput.value = "Is the navy hoodie back in stock?";

});