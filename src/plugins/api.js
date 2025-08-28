import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

const accessToken = localStorage.getItem('access_token');
if (accessToken) {
  axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
}


// Refresh token interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    console.log('Resposta bem-sucedida:', response); // Log para depuração
    return response;
  },
  async (error) => {
    console.error('Erro no interceptor:', error); // Log para erros
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem('refresh_token');
        if (!refreshToken) {
          throw new Error('Refresh token ausente');
        }

        const { data } = await axiosInstance.post('token/refresh/', {
          refresh: refreshToken,
        });

        const newAccessToken = data.access;
        localStorage.setItem('access_token', newAccessToken);
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;
        originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;

        return axiosInstance(originalRequest);
      } catch (refreshError) {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        delete axiosInstance.defaults.headers.common['Authorization'];
        window.location.href = '/login';
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

// CODIGO PARA A PAGINA DE LOGIN
// import { ref, onMounted } from 'vue';
// import { useRouter } from 'vue-router';
// import userService from '@/services/userService';

// const user = ref({
//   registration: '',
//   password: ''
// });

// const router = useRouter();

// const loginFunction = async () => {
//   try {
//     const response = await userService.login(user.value.registration, user.value.password);
//     console.log('Login bem-sucedido:');
//     router.push('/home');
//   } catch (error) {
//     console.error('Error catched in loginFunction:', error);
//   }
// };

// onMounted(() => {
//   const accessToken = localStorage.getItem('access_token');
//   const refreshToken = localStorage.getItem('refresh_token');
//   if (accessToken && refreshToken) {
//     router.push('/home');
//   }
// });

export default axiosInstance;
