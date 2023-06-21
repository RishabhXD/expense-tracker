const { addIncome, getIncome, deleteIncome } = require("../controllers/income");
const { addExpense, getExpense, deleteExpense } = require("../controllers/expense");

const router = require("express").Router();

// Income
router.post("/add-income", addIncome);
router.get("/get-income", getIncome);
router.delete("/delete-income/:id", deleteIncome);

// Expenses
router.post("/add-expense", addExpense);
router.get("/get-expense", getExpense);
router.delete("/delete-expense/:id", deleteExpense);

module.exports = router;
