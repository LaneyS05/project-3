import React, { useState, useEffect } from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Search,
  Toolbar,
  Inject,
} from "@syncfusion/ej2-react-grids";
import { Header } from "../components";

const Employees = () => {
  const [employeesData, setEmployeesData] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch("http://localhost:8001/employees");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setEmployeesData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchEmployees();
  }, []);

  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Employees" />
      <GridComponent
        dataSource={employeesData}
        allowPaging
        allowSorting
        toolbar={["Search"]}
        width="auto"
      >
        <ColumnsDirective>
          <ColumnDirective
            field="EmployeeID"
            headerText="Employee ID"
            width="120"
          />
          <ColumnDirective field="Employee" headerText="Employee" width="150" />
          <ColumnDirective
            field="Designation"
            headerText="Designation"
            width="150"
          />
          <ColumnDirective field="Country" headerText="Country" width="150" />
          <ColumnDirective
            field="HireDate"
            headerText="Hire Date"
            width="150"
          />
          <ColumnDirective
            field="ReportsTo"
            headerText="Reports To"
            width="150"
          />
          {/* Add more columns as needed */}
        </ColumnsDirective>
        <Inject services={[Page, Search, Toolbar]} />
      </GridComponent>
    </div>
  );
};

export default Employees;
