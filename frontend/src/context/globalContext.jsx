import React, { useState, useContext } from "react";

const GlobalContext = React.createContext();

const BASE_URL = "http://localhost:5000/api/v1";

export const GlobalProvider = ({ children }) => {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setexpenses] = useState([]);
  const [errors, setErrors] = useState(null);

  //   Add Income
  const addIncome = async () => {
    const response = await axios
      .post(`${BASE_URL}/add-income`, income)
      .catch((error) => {
        setErrors(error.response.data.message);
      });
  };

  return (
    <GlobalContext.Provider value={{ addIncome }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
