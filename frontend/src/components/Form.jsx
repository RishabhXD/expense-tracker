import React, { useState } from "react";
import {
  Card,
  CardBody,
  Select,
  Option,
  Typography,
  Input,
} from "@material-tailwind/react";

const Form = () => {
  const [input, setInput] = useState({
    title: "",
    date: "",
    amount: "",
    category: "",
    description: "",
  });

  const { title, date, amount, category, description } = input;
  const handleInput = (name) => (e) => {
    setInput({ ...input, [name]: e.target.value });
  };

  return (
    <Card className="mt-6 w-96 bg-[#242a32] text-white">
      <CardBody>
        <Typography variant="h5" className="mb-2 pb-5 text-white">
          Add Income
        </Typography>
        <div className="pb-5 text-white">
          <Input
            classname="text-white"
            type="text"
            value={title}
            name="title"
            onChange={handleInput("title")}
            label="Income Title"
          />
        </div>
        <div className="pb-5 text-white">
          <Input
            classname="text-white"
            type="amount"
            value={amount}
            name="amount"
            onChange={handleInput("amount")}
            label="Amount"
          />
        </div>
        <div className="pb-5 text-white">
          <Input
            classname="text-white"
            type="date"
            value={date}
            name="date"
            onChange={handleInput("date")}
            label="Date"
          />
        </div>
        <div className="pb-5 text-white bg-[#242a32]">
          <Select
            label="Select Category"
            value="category"
            name="category"
            onChange={handleInput("category")}
            className="text-white bg-[#242a32]"
          >
            <Option value="Salary">Salary</Option>
            <Option value="Freelancing">Freelancing</Option>
            <Option value="Investiments">Investiments</Option>
            <Option value="Stocks">Stocks</Option>
            <Option value="Bitcoin">Bitcoin</Option>
            <Option value="Bank">Bank Transfer</Option>
            <Option value="Other">Other</Option>
          </Select>
        </div>
        <div className="pb-5 text-white">
          <Input
            classname="text-white"
            type="description"
            value={description}
            name="description"
            onChange={handleInput("description")}
            label="Description"
          />
        </div>
      </CardBody>
    </Card>
  );
};

export default Form;
