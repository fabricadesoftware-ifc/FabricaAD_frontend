import api from "@/plugins/api";

class UserLogin {
  async login(registration, password) {
    try {
      const { data } = await api.post("token/", {
        registration,
        password,
      });
      console.log(data);

      const accessToken = data.access;
      const refreshToken = data.refresh;
      localStorage.setItem("access_token", accessToken);
      localStorage.setItem("refresh_token", refreshToken);

      console.log("Login bem-sucedido");
      return data; // Retorne os dados para indicar sucesso
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      throw error; // Continue lançando o erro para o `catch` no chamador
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
