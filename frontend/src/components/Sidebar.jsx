import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";
import { MdAnalytics, MdCreditCard, MdMoney } from "react-icons/md";
import { GiExpense } from "react-icons/gi";

const Sidebar = () => {
  return (
    <Card className="h-[calc(100vh-5rem)] w-1/2 max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 bg-[#171b20] text-white">
      <div className="mb-2 p-4">
        <Typography variant="h5">Action Center</Typography>
      </div>
      <List className="text-white">
        <Link to="/">
          <ListItem className="flex gap-4">
            <MdAnalytics fontSize={25} /> Dashboard
          </ListItem>
        </Link>

        <Link to="/transactions">
          <ListItem className="flex gap-4">
            <MdCreditCard fontSize={25} />
            Transactions
          </ListItem>
        </Link>
        <Link to="/income">
          <ListItem className="flex gap-4">
            <MdMoney fontSize={25} />
            Income
          </ListItem>
        </Link>
        <Link to="/expense">
          <ListItem className="flex gap-4">
            <GiExpense fontSize={25} />
            Expense
          </ListItem>
        </Link>
      </List>
    </Card>
  );
};

export default Sidebar;
