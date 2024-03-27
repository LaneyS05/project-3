import React, { useState, useEffect } from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
} from "@syncfusion/ej2-react-grids";
import { Header } from "../components";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const imageTemplate = (field) => {
    return (
      <img src={field.Photo} alt="" style={{ width: "20px", height: "20px" }} />
    );
  };

  const fetchOrders = async () => {
    try {
      const response = await fetch("http://localhost:8001/orders");
      if (!response.ok) {
        throw new Error("Failed to fetch orders");
      }
      const data = await response.json();
      console.log("Fetched orders:", data);
      setOrders(data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Orders" />
      <GridComponent dataSource={orders} allowPaging allowSorting>
        <ColumnsDirective>
          <ColumnDirective
            field="Image"
            headerText="Image"
            width={120}
            template={imageTemplate}
          />
          <ColumnDirective field="OrderID" headerText="Order ID" width="120" />
          <ColumnDirective
            field="CustomerID"
            headerText="Customer ID"
            width="120"
          />
          <ColumnDirective
            field="EmployeeID"
            headerText="Employee ID"
            width="120"
          />
          <ColumnDirective field="Item" headerText="Item" width="150" />
          <ColumnDirective
            field="TotalAmount"
            headerText="Total Amount"
            width="120"
          />
          <ColumnDirective field="Status" headerText="Status" width="120" />
          <ColumnDirective field="Location" headerText="Location" width="150" />
        </ColumnsDirective>
        <Inject
          services={[
            Resize,
            Sort,
            ContextMenu,
            Filter,
            Page,
            ExcelExport,
            Edit,
            PdfExport,
          ]}
        />
      </GridComponent>
    </div>
  );
};

export default Orders;
