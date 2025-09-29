import api from "@/plugins/api";

class UserLogin {
  async login(crendentials) {
    console.log(crendentials)
    try {
      const { data } = await api.post("token/", crendentials);
      console.log(data);

      const accessToken = data.access;
      const refreshToken = data.refresh;
      localStorage.setItem("access_token", accessToken);
      localStorage.setItem("refresh_token", refreshToken);

      console.log("Login bem-sucedido");
      return data;
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      throw error;
    }
  }

  async getMe() {
    try {
      const { data } = await api.get("users/me/");
      console.log(data);
      return data;
    } catch (error) {
      console.error("Erro ao obter dados do usuário:", error);
      throw error;
    }
  }

  logout() {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    delete api.defaults.headers.common["Authorization"];
    console.log("Logout efetuado");
  }
}

export default new UserLogin();
