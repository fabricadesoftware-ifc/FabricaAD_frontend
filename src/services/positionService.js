import api from "@/plugins/api";

class PositionService {
    async getAllPositions() {
        try {
            const { data } = await api.get('/positions');
            return data;
        } catch (error) {
            console.error("Error in getAllPositions:", error);
            throw error;
        }
    }

    async getPositionById(positionId) {
        try {
            const { data } = await api.get(`/positions/${positionId}/`);
            return data;
        } catch (error) {
            console.error('Error getting position by ID:', error);
            throw error;
        }
    }

    async createPosition(position) {
        try {
            await api.post("/positions/", position);
        } catch (error) {
            console.error("Error in create position:", error);
            throw error;
        }
    }

    async updatePosition(updatePosition) {
        try {
            await api.put(`/positions/${updatePosition.id}`, updatePosition);
        } catch (error) {
            console.error("Error in update position:", error);
            throw error;
        }
    }

    async deletePosition(positionId) {
        try {
            await api.delete(`/positions/${positionId}/`);
        } catch (error) {
            console.error("Error in delete position:", error);
            throw error;
        }
    }
}

export default new PositionService();