const AuthRepository = require("../CapaAccesoDatos/repositories/AuthRepository");

class AuthService {
  async loginUser(credentials) {
    try {
      // Lógica de autenticación, por ejemplo, verificar las credenciales
      const user = await UserModel.findOne({ username: credentials.username });

      if (!user) {
        throw new Error("User not found");
      }

      const isMatch = await user.comparePassword(credentials.password);
      if (!isMatch) {
        throw new Error("Invalid password");
      }

      // Logica para logear intento de inicio de sesión
      await AuthRepository.logLoginAttempt({
        username: user.username,
        loginTime: new Date(),
        status: "successful",
      });

      return user;
    } catch (error) {
      // Logica para logear intento fallido
      await AuthRepository.logLoginAttempt({
        username: credentials.username,
        loginTime: new Date(),
        status: "failed",
      });

      throw new Error("Error in AuthService: " + error.message);
    }
  }
}

module.exports = new AuthService();
