const mongoose = require("mongoose");
const UserModel = require("../models/userModel");

class AuthRepository {
  async logLoginAttempt(userData) {
    try {
      const loginAttempt = new UserModel(userData);
      return await loginAttempt.save();
    } catch (error) {
      throw new Error("Error saving login attempt: " + error.message);
    }
  }
}

module.exports = new AuthRepository();
