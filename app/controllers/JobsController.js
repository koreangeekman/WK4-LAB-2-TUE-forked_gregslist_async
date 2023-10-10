import { AppState } from "../AppState.js";
import { jobsService } from "../services/JobsService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawJobs() {
  let contentHTML = '';
  AppState.jobs.forEach(job => contentHTML += job.jobCard);
  setHTML('jobCards', contentHTML);
}

export class JobsController {
  constructor() {
    jobsService.getJobs();
    _drawJobs();
    AppState.on('jobs', _drawJobs)
    AppState.on('account', _drawJobs)
  }

  async addJob(event) { //from form submission
    event.preventDefault();
    await jobsService.addJob(getFormData(event.target));
    event.target.reset();
  }

  async removeJob(id) {
    if (!(await Pop.confirm('Delete this position?'))) {
      return
    }
    jobsService.removeJob(id);
  }
}