import { AppState } from "../AppState.js";
import { housingService } from "../services/HousingService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawHomes() {
  let contentHTML = '';
  AppState.houses.forEach(house => contentHTML += house.houseCard)
  setHTML('houseCards', contentHTML);
}

export class HousingController {
  constructor() {
    housingService.getHouseData();

    _drawHomes();
    AppState.on('houses', _drawHomes)
    AppState.on('account', _drawHomes)
  }

  async addHouse(event) { // form submission
    event.preventDefault();
    await housingService.addHouse(getFormData(event.target));
    event.target.reset();
    // _drawHomes();
  }

  async removeHouse(id) {
    if (!(await Pop.confirm("Remove this house?"))) {
      return
    }
    housingService.removeHouse(id);
    // _drawHomes();
  }
}