import { AppState } from "../AppState.js";
import { House } from "../models/House.js";
import { saveState } from "../utils/Store.js";
import { api } from "./AxiosService.js";

function _saveHomes() {
  saveState('houses', AppState.houses);
}

class HousingService {

  async getHouseData() {
    try {
      const res = await api.get('api/houses');
      AppState.houses = res.data.map(h => new House(h));
      // console.log(AppState.houses);
    } catch (error) {
      console.log('Attempted getting house data', error);
    }
  }

  async addHouse(newHouse) {
    try {
      console.log('new house data', newHouse);
      const res = await api.post('api/houses', newHouse)
      console.log('response', res.data);
      AppState.houses.push(new House(res.data));
      // _saveHomes();
      AppState.emit('houses');
    } catch (error) {
      console.log('Attempted add house data', error);
    }
  }

  async removeHouse(id) {
    const res = await api.delete(`api/houses/${id}`)
    const houseIndex = AppState.houses.findIndex(house => house.id == id);
    if (houseIndex == -1) {
      throw new Error('House ID does not exist');
    }
    AppState.houses.splice(houseIndex, 1);
    // _saveHomes();
    AppState.emit('houses');
  }
}

export const housingService = new HousingService();