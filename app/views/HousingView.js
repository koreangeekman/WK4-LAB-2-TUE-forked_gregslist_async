
//   {
//     "_id": "645d60f381faf24223ae886b",
//     "bedrooms": 3,
//     "bathrooms": 2,
//     "levels": 2,
//     "imgUrl": "https://floorcentral.com/wp-content/uploads/2014/07/sick-house-syndrome.jpg",
//     "year": 2003,
//     "price": 230000,
//     "description": "Super sick house",
//     "creatorId": "63f7d6202d1cf882287f12e2",
//     "createdAt": "2023-05-11T21:41:07.979Z",
//     "updatedAt": "2023-05-11T21:41:07.979Z",
//     "__v": 0,
//     "creator": {
//         "_id": "63f7d6202d1cf882287f12e2",
//         "name": "Charles Francis Xavier",
//         "picture": "https://www.looper.com/img/gallery/professor-xs-entire-backstory-explained/intro-1587748942.jpg",
//         "id": "63f7d6202d1cf882287f12e2"
//         },
//     "id": "645d60f381faf24223ae886b"
// },

export const HousingView = `
    <div class="container-fluid">
      <div class="row justify-content-center">

        <!-- SECTION NEW HOME FORM -->
        <div class="col-12 col-md-8 p-3">
          <form class="p-3 p-md-4 formCard" onsubmit="app.HousingController.addHouse(event)">
            <p class="fs-3 fw-bold">New House Form</p>
            <span class="">
              <label for="year">Year:</label>
              <input class="form-control" type="number" name="year" id="year" max="2024" placeholder="2002" required>
            </span>
            <span class="">
              <label for="bedrooms">Bedrooms:</label>
              <input class="form-control" type="number" name="bedrooms" id="bedrooms" max="12" placeholder="4" required>
            </span>
            <span class="">
              <label for="bathrooms">Bathrooms:</label>
              <input class="form-control" type="number" name="bathrooms" id="bathrooms" max="12" placeholder="2.5"
                required>
            </span>
            <span class="">
              <label for="levels">Levels:</label>
              <input class="form-control" type="number" name="levels" id="levels" max="500" placeholder="2" required>
            </span>
            <span class="">
              <label for="price">Price:</label>
              <span class="d-flex align-items-center ps-2">$
                <input class="form-control" type="number" name="price" id="price" min="0" max="100000000"
                  placeholder="256000" required>
              </span>
            </span>
            <span class="">
              <label for="description">Description:</label>
              <textarea class="form-control" type="text" name="description" id="description" minlength="10"
                maxlength="320" placeholder="Please enter a short description" rows="3" required></textarea>
            </span>
            <span class="">
              <label for="imgUrl">Image URL:</label>
              <input class="form-control" type="url" name="imgUrl" id="imgUrl"
                placeholder="Please submit a URL for the image" maxlength="200">
            </span>
            <button class="btn btn-success my-3" type="submit">Submit</button>
          </form>
        </div>
      </div>
      <!-- !SECTION NEW HOME FORM -->

      <!-- SECTION HOMES CARD -->
      <div class="row justify-content-center" id="houseCards">
        <!-- HOME CARD VIEWPORT -->
      </div>
      <!-- !SECTION HOMES CARD -->

    </div>
  `