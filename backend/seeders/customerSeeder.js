"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Customers", [
      {
        CustomerID: 1001,
        Name: "Nirav Joshi",
        CustomerEmail: "nirav@gmail.com",
        ProjectName: "Hosting Press HTML",
        Status: "Active",
        Weeks: 40,
        Budget: 2400,
        Location: "India",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        CustomerID: 1002,
        Name: "Sunil Joshi",
        CustomerEmail: "sunil@gmail.com",
        ProjectName: "Elite Admin",
        Status: "Active",
        Weeks: 11,
        Budget: 3900,
        Location: "India",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        CustomerID: 1003,
        Name: "Andrew McDownland",
        CustomerEmail: "andrew@gmail.com",
        ProjectName: "Real Homes WP Theme",
        Status: "Pending",
        Weeks: 19,
        Budget: 24500,
        Location: "USA",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        CustomerID: 1004,
        Name: "Christopher Jamil",
        CustomerEmail: "jamil@gmail.com",
        ProjectName: "MedicalPro WP Theme",
        Status: "Completed",
        Weeks: 34,
        Budget: 16500,
        Location: "USA",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        CustomerID: 1005,
        Name: "Michael",
        CustomerEmail: "michael@gmail.com",
        ProjectName: "Weekly WP Theme",
        Status: "Cancel",
        Weeks: 34,
        Budget: 16500,
        Location: "USA",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        CustomerID: 1006,
        Name: "John Doe",
        CustomerEmail: "john@gmail.com",
        ProjectName: "Awesome Project",
        Status: "Active",
        Weeks: 25,
        Budget: 5000,
        Location: "Canada",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        CustomerID: 1007,
        Name: "Jane Smith",
        CustomerEmail: "jane@gmail.com",
        ProjectName: "Creative Design",
        Status: "Active",
        Weeks: 15,
        Budget: 8000,
        Location: "UK",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        CustomerID: 1008,
        Name: "Alex Johnson",
        CustomerEmail: "alex@gmail.com",
        ProjectName: "E-commerce Store",
        Status: "Active",
        Weeks: 30,
        Budget: 10000,
        Location: "Australia",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        CustomerID: 1009,
        Name: "Sarah Lee",
        CustomerEmail: "sarah@gmail.com",
        ProjectName: "Marketing Campaign",
        Status: "Pending",
        Weeks: 20,
        Budget: 7500,
        Location: "Germany",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        CustomerID: 1010,
        Name: "David Brown",
        CustomerEmail: "david@gmail.com",
        ProjectName: "Mobile App Development",
        Status: "Active",
        Weeks: 18,
        Budget: 12000,
        Location: "France",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Customers", null, {});
  },
};
