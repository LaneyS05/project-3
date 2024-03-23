import React, { useState, useEffect } from "react";
import axios from "axios";
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
      const response = await axios.get("http://localhost:8001/customers"); // Adjust the URL to match your backend endpoint
      const data = response.data;
      setCustomers(data);
    } catch (error) {
      console.error("Error fetching customers:", error);
    }
  };

  // Custom template for rendering the image
  const imageTemplate = (field) => {
    return (
      <img src={field.customerimage} alt="" style={{ width: "20px", height: "20px" }} />
    );
  };

  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Customers" />
      <GridComponent
        dataSource={customers}
        allowPaging
        allowSorting
        toolbar={["Delete"]}
        editSettings={{ allowDeleting: true, allowEditing: true }}
        width="auto"
      >
        <ColumnsDirective>
          <ColumnDirective
            field="customerimage"
            headerText="Photo"
            width={120}
            template={imageTemplate}
          />
          <ColumnDirective
            field="customerid"
            headerText="Customer ID"
            width={120}
          />
          <ColumnDirective field="name" headerText="Name" width={150} />
          <ColumnDirective
            field="projectname"
            headerText="Project Name"
            width={150}
          />
          <ColumnDirective field="status" headerText="Status" width={120} />
          <ColumnDirective field="weeks" headerText="Weeks" width={120} />
          <ColumnDirective field="budget" headerText="Budget" width={120} />
          <ColumnDirective field="location" headerText="Location" width={150} />
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, Selection, Edit, Sort, Filter]} />
      </GridComponent>
    </div>
  );
};

export default Customers;
