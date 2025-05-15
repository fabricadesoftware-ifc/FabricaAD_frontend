import api from '@/plugins/api';

class UserLogin {
    async login(registration, password) {
    try {
        const {data} = await api.post('token/', {
        registration,
        password
        }); 
        const token = data.access;
        
        localStorage.setItem('token', token);
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        console.log('Login bem-sucedido:');
    } catch (error) {
        console.error('Erro ao fazer login:', error);
        throw error;
    }
}
}

export default new UserLogin();