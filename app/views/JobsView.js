
//   {
//     "_id": "6476d752403259fa173a74ba",
//     "company": "SuperDuperCoolPlace",
//     "jobTitle": "Software Developer",
//     "hours": 40,
//     "rate": 1000000,
//     "description": "Are you Super Duper Cool enough?",
//     "creatorId": "646424169346a51b7a721e71",
//     "createdAt": "2023-05-31T05:12:50.403Z",
//     "updatedAt": "2023-05-31T05:12:50.403Z",
//     "__v": 0,
//     "creator": {
//         "_id": "646424169346a51b7a721e71",
//         "name": "Code-y BeepBoop",
//         "picture": "https://68.media.tumblr.com/66dd12f943a2496adcb6d556025a2d96/tumblr_oklf80RKa21shq9dbo1_400.gif",
//        "id": "646424169346a51b7a721e71"
//         },
//     "id": "6476d752403259fa173a74ba"
// },

export const JobsView = `
    <div class="container-fluid">
      <div class="row justify-content-center">

        <!-- SECTION NEW JOB FORM -->
        <div class="col-12 col-md-8 p-3">
          <form class="p-3 p-md-4 formCard" onsubmit="app.JobsController.addJob(event)">
            <p class="fs-3 fw-bold">New Job Form</p>
            <span class="">
            <label for="jobTitle">Job Title:</label>
            <input class="form-control" type="text" name="jobTitle" id="jobTitle" max-length="30" placeholder="Engineer" required>
            </span>
            <span class="">
              <label for="company">Company:</label>
              <input class="form-control" type="text" name="company" id="company" max-length="30" placeholder="Company" required>
            </span>
            <span class="">
              <label for="hours">Hours:</label>
              <span class="d-flex align-items-center ps-2">
                <input class="form-control" type="number" name="hours" id="hours" min="0" max="80"
                  placeholder="40" required>
              </span>
            </span>
            <span class="">
              <label for="rate">Rate:</label>
              <span class="d-flex align-items-center ps-2">$
                <input class="form-control" type="number" name="rate" id="rate" min="0" max="1000000"
                  placeholder="128000" required>
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
      <!-- !SECTION NEW JOB FORM -->

      <!-- SECTION JOB CARD -->
      <div class="row justify-content-center" id="jobCards">
        <!-- HOME CARD VIEWPORT -->
      </div>
      <!-- !SECTION JOB CARD -->

    </div>
  `