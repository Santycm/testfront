import React from "react";
import { useState, useEffect } from "react";

export const App = () => {
  const [employees, setEmployees] = useState([]);
  
  useEffect(() => {
    const getData = async () => {
      const response = await fetch("https://naturaldreams.up.railway.app/api/employees", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },);
      const data = await response.json();
      setEmployees([...data]);
    };
    getData();
  }, []);

  return (
    <div className="bg-blue-500 py-[20px]">
      <h1 className="text-[20px] text-center font-bold text-white">
        Employees
      </h1>
      <div className="flex justify-center container bg-black">
        {employees.map((employee, id) => {
          return (
            <div key={id} className="bg-white p-[20px] m-[20px]">
              <h2 className="text-[20px] font-bold">{employee.name}</h2>
              <p className="text-[16px]">{employee.salary}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
