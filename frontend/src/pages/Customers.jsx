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
      const response = await fetch("http://localhost:8001/customers");
      if (!response.ok) {
        throw new Error("Failed to fetch customers");
      }
      const data = await response.json();
      setCustomers(data);
    } catch (error) {
      console.error("Error fetching customers:", error);
    }
  };

  const imageTemplate = (field) => {
    return (
      <img src={field.Photo} alt="" style={{ width: "20px", height: "20px" }} />
    );
  };

  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Customers" />
      <GridComponent
        dataSource={customers}
        allowPaging
        allowSorting
        toolbar={["Search"]}
        editSettings={{ allowEditing: true }}
        width="auto"
      >
        <ColumnsDirective>
          <ColumnDirective
            field="Photo"
            headerText="Photo"
            width={120}
            template={imageTemplate}
          />
          <ColumnDirective
            field="CustomerID"
            headerText="Customer ID"
            width={120}
          />
          <ColumnDirective field="Name" headerText="Name" width={150} />
          <ColumnDirective
            field="ProjectName"
            headerText="Project Name"
            width={150}
          />
          <ColumnDirective field="Status" headerText="Status" width={120} />
          <ColumnDirective field="Weeks" headerText="Weeks" width={120} />
          <ColumnDirective field="Budget" headerText="Budget" width={120} />
          <ColumnDirective field="Location" headerText="Location" width={150} />
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, Selection, Edit, Sort, Filter]} />
      </GridComponent>
    </div>
  );
};

export default Customers;
