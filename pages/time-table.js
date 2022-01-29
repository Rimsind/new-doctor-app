const TimeTable = () => {
  return (
    <>
      <div className="doc_timetable">
        <div className="gen-form">
          <div className="row mb-3">
            <div className="col-md-4">
              <p className="fw-bold fs-5 text-dark">Time Table</p>
            </div>
            <div className="col-md-8">
              {/* <div className="time_btn text-end">
                <button className="btn btn-primary"> Add New Entry</button>
              </div> */}

              <div className="time_btn text-end">
                <button
                  type="button"
                  className="btn btn-primary text-end"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Add New Entry
                </button>
              </div>

              <div
                className="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered modal-lg">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        Time Table
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <div className="row align-items-end">
                        <div className="col-md">
                          <label>Polyclinic</label>
                          <select
                            class="form-select"
                            aria-label="Default select example"
                          >
                            <option selected>Select Polyclinic</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                        <div className="col-md">
                          <label>Day</label>
                          <select
                            class="form-select"
                            aria-label="Default select example"
                          >
                            <option selected>Select Day</option>
                            <option value="1">Monday</option>
                            <option value="2">Tuesday</option>
                            <option value="3">Wednesday</option>
                            <option value="1">Thursday</option>
                            <option value="2">Friday</option>
                            <option value="3">Saturday</option>
                            <option value="3">Sunday</option>
                          </select>
                        </div>
                        <div className="col-md">
                          <label>Start Time</label>
                          <input type="time" className="form-control" id="" />
                        </div>
                        <div className="col-md">
                          <label>End Time</label>
                          <input type="time" className="form-control" id="" />
                        </div>
                        <div className="col-md">
                          <button type="btn btn-primary">Add</button>
                        </div>
                        <div className="time_modal_table mt-5">
                          <table className="table">
                            <thead>
                              <tr>
                                <th colspan="2" className="text-center">
                                  Polyclinic
                                </th>
                                <th>Day</th>
                                <th>Start</th>
                                <th>End</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="text-center">
                                  <a href="#">
                                    <i class="ri-close-circle-line"></i>
                                  </a>
                                </td>
                                <td>@mdo</td>
                                <td>@twitter</td>
                                <td>@twitter</td>
                                <td>@twitter</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" className="btn btn-primary">
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="doc_time_table mb-3">
            <table className="table">
              <thead>
                <tr>
                  <th colspan="2" className="text-center">
                    Polyclinic
                  </th>
                  <th>Day</th>
                  <th>Start</th>
                  <th>End</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td rowSpan="4" className="text-center">
                    <a href="#">
                      <i class="ri-close-circle-line"></i>
                    </a>
                  </td>
                  <td rowSpan="4">Mark</td>
                  <td>Otto</td>
                  <td>@twitter</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>@twitter</td>
                </tr>
                <tr>
                  <td>@twitter</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                </tr>
                <tr>
                  <td>@twitter</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                </tr>
                <tr>
                  <td rowSpan="4" className="text-center">
                    <a href="#">
                      <i class="ri-close-circle-line"></i>
                    </a>
                  </td>
                  <td rowSpan="4">Mark</td>
                  <td>Otto</td>
                  <td>@twitter</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>@twitter</td>
                </tr>
                <tr>
                  <td>@twitter</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                </tr>
                <tr>
                  <td>@twitter</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default TimeTable;
