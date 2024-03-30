const { Employee } = require("../models");

const User = {
  getCurrentUser: async (req, res) => {
    try {
      console.log(req.body);
      const CurrentUser = req.user;
      const user = await Employee.findOne({ where: { id: CurrentUser.id } });

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      res.json({ name: user.employee });
    } catch (error) {
      console.error("Error fetching current user:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  logoutUser: async (req, res) => {
    try {
      req.session.destroy((err) => {
        if (err) {
          console.error("Error destroying session:", err);
          return res.status(500).json({ error: "Internal server error" });
        }

        res.json({ message: "Logout successful" });
      });
    } catch (error) {
      console.error("Error logging out:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
};

module.exports = User;
