const ExpenseSchema = require("../models/expenseModel");

exports.addExpense = async (req, res) => {
  const { title, amount, category, description, date } = req.body;
  const income = ExpenseSchema({ title, amount, category, description, date });
  try {
    if (!title || !amount || !category || !description || !date) {
      return res.status(400).json({ message: "All Fields are Required" });
    }
    if (amount <= 0 || !amount === "number") {
      return res
        .status(400)
        .json({ message: "Amount Must be a positive number" });
    }
    await income.save();
    res.status(200).json({ message: "Expense Saved" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

exports.getExpense = async (req, res) => {
  try {
    const expense = await ExpenseSchema.find().sort({ createdAt: -1 });
    res.status(200).json(expense);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

exports.deleteExpense = async (req, res) => {
  const { id } = req.params;
  ExpenseSchema.findByIdAndDelete(id)
    .then((income) => {
      res.status(200).json({ message: "Successfully Deleted" });
    })
    .catch((error) => {
      res.status(500).json({ message: "Server Error" });
    });
};
