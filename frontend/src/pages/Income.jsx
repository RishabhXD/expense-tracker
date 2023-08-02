import React from "react";
import { Card, Typography } from "@material-tailwind/react";
import { useGlobalContext } from "../context/globalContext";
import Form from "../components/Form";

const Income = () => {
  const { addIncome } = useGlobalContext();

  return (
    <div>
      <Card className="w-[75vw] h-[calc(100vh-5rem)] bg-[#171b20] text-white p-5 shadow-xl shadow-blue-gray-900/5">
        <div className="mb-2 p-4">
          <Typography variant="h5">Income</Typography>
        </div>
        <Form />
      </Card>
    </div>
  );
};

export default Income;
