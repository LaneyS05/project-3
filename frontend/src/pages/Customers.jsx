import React, { useState, useEffect } from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Selection,
  Inject,
  Edit,
  Toolbar,
  Filter,
  Sort,
} from "@syncfusion/ej2-react-grids";
import { Header } from "../components";

const Customers = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const response = await fetch("/api/customers");
      if (!response.ok) {
        throw new Error("Failed to fetch customers");
      }
      const data = await response.json();
      setCustomers(data);
    } catch (error) {
      console.error("Error fetching customers:", error);
    }
  };

  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Customers" />
      <GridComponent
        dataSource={customers}
        // to limit items on orders page
        allowPaging
        // Allows user to sort orders
        allowSorting
        // for deleting and editing customers
        toolbar={["Delete"]}
        editSettings={{ allowDeleting: true, allowEditing: true }}
        width="auto"
      >
        <ColumnsDirective>
          {/* Looping to customers data */}
          {[
            { field: "CustomerID", headerText: "Customer ID", width: 120 },
            { field: "Name", headerText: "Name", width: 150 },
            { field: "ProjectName", headerText: "Project Name", width: 150 },
            { field: "Status", headerText: "Status", width: 120 },
            { field: "Weeks", headerText: "Weeks", width: 120 },
            { field: "Budget", headerText: "Budget", width: 120 },
            { field: "Location", headerText: "Location", width: 150 },
          ].map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, Selection, Edit, Sort, Filter]} />
      </GridComponent>
    </div>
  );
};

export default Customers;
