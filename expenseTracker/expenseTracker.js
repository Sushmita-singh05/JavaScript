let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

const totalExpenses = document.getElementById("totalExpenses");
const expenseItem = document.getElementById("expenseItem");
const addExpenseBtn = document.getElementById("addExpenseBtn");
const expenseCategory = document.getElementById("expenseCategory");
const expenseAmount = document.getElementById("expenseAmount");
const expenseList = document.getElementById("expenseList");

function saveExpenses() {
    localStorage.setItem("expenses", JSON.stringify(expenses));
}

function calculateTotal() {
    const total = expenses.reduce(function(sum, expense) {
        return sum + expense.amount;
    }, 0);

    totalExpenses.textContent = total.toFixed(2);
}

function renderExpenses() {
    expenseList.innerHTML = "";

    expenses.forEach(function(expense, index) {
        const li = document.createElement("li");

        li.textContent = `${expense.item} - ₹${expense.amount.toFixed(2)} (${expense.category})`;

        // Delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";

        deleteBtn.addEventListener("click", function() {
            expenses.splice(index, 1);
            saveExpenses();
            renderExpenses();
            calculateTotal();
        });

        li.appendChild(deleteBtn);
        expenseList.appendChild(li);
    });

    calculateTotal();
}

addExpenseBtn.addEventListener("click", function() {
    const item = expenseItem.value.trim();
    const amount = parseFloat(expenseAmount.value);
    const category = expenseCategory.value;

    if (item === "" || isNaN(amount) || amount <= 0 || category === "") {
        alert("Please enter valid expense details");
        return;
    }

    expenses.push({
        item: item,
        amount: amount,
        category: category
    });

    saveExpenses();
    renderExpenses();

    expenseItem.value = "";
    expenseAmount.value = "";
});

renderExpenses();
