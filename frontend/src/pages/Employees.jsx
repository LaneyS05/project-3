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
  const [selectedEmployee, setSelectedEmployee] = useState(null);

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

  const imageTemplate = (field) => {
    return (
      <img src={field.Photo} alt="" style={{ width: "20px", height: "20px" }} />
    );
  };

  const handleDelete = async () => {
    if (!selectedEmployee) return;

    try {
      const response = await fetch("http://localhost:8001/employees", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ EmployeeID: selectedEmployee.EmployeeID }),
      });

      if (!response.ok) {
        throw new Error("Failed to delete employee");
      }

      // Remove deleted employee from the local state
      setEmployeesData((prevData) =>
        prevData.filter((emp) => emp.EmployeeID !== selectedEmployee.EmployeeID)
      );

      setSelectedEmployee(null);
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
  };

  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Employees" />
      <GridComponent
        dataSource={employeesData}
        allowPaging
        allowSorting
        toolbar={[
          "Search",
          {
            text: "Delete",
            tooltipText: "Delete Employee",
            prefixIcon: "e-delete",
            id: "deleteEmployee",
            align: "Right",
            click: handleDelete,
          },
        ]}
        editSettings={{ allowDeleting: true, allowEditing: true }}
        width="auto"
        rowSelected={(args) => setSelectedEmployee(args.data)}
      >
        <ColumnsDirective>
          <ColumnDirective
            field="Photo"
            headerText="Photo"
            width={120}
            template={imageTemplate}
          />
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
        </ColumnsDirective>
        <Inject services={[Page, Search, Toolbar]} />
      </GridComponent>
    </div>
  );
};

export default Employees;
