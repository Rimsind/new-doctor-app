import useSWR from "swr";
import { useAuth } from "../context";
import { apiUrl, fetcher } from "../config/api";
import axios from "axios";
import { useState } from "react";

const TimeTable = () => {
  const { auth } = useAuth();
  const { data: doctor } = useSWR(
    `${apiUrl}/doctors/${auth.user?.profileId}`,
    async (url) => {
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });
      const result = res.data;
      return result;
    }
  );

  const { timetable } = doctor;
  console.log(timetable);

  const { data: polyclinics } = useSWR(`${apiUrl}/polyclinics`, fetcher);

  const [polyclinic, setPolyclinic] = useState();
  const [day, setDay] = useState();
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const [schedule, setSchedule] = useState([]);
  // const [allTimeTable, setAllTimetable] = useState([]);

  const addSchedule = () => {
    setSchedule([
      ...schedule,
      {
        day: day,
        start_time: startTime,
        end_time: endTime,
      },
    ]);
    setDay("");
    setStartTime("");
    setEndTime("");
  };

  const addTimeTable = async () => {
    const payload = {
      timetable: [
        ...timetable,
        {
          polyclinic: { id: polyclinic },
          schedule: schedule,
        },
      ],
    };
    const res = await axios.put(
      `${apiUrl}/doctors/${auth.user?.profileId}`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      }
    );
    const result = res.data;

    alert("Profile Updated Succesfully");
    return result;
  };
  const timeslot = [
    "12:00 AM - 01:00 AM",
    "01:00 AM - 02:00 AM",
    "02:00 AM - 03:00 AM",
    "03:00 AM - 04:00 AM",
    "04:00 AM - 05:00 AM",
    "05:00 AM - 06:00 AM",
    "06:00 AM - 07:00 AM",
    "07:00 AM - 08:00 AM",
    "08:00 AM - 09:00 AM",
    "09:00 AM - 10:00 AM",
    "10:00 AM - 11:00 AM",
    "11:00 AM - 12:00 PM",
    "12:00 PM - 01:00 PM",
    "01:00 PM - 02:00 PM",
    "02:00 PM - 03:00 PM",
    "03:00 PM - 04:00 PM",
    "04:00 PM - 05:00 PM",
    "05:00 PM - 06:00 PM",
    "06:00 PM - 07:00 PM",
    "07:00 PM - 08:00 PM",
    "08:00 PM - 09:00 PM",
    "09:00 PM - 10:00 PM",
    "10:00 PM - 11:00 PM",
    "11:00 PM - 12:00 AM",
  ];
  return (
    <>
      <div className="doc_timetable">
        <div className="gen-form">
          <div className="row mb-3">
            <div className="col-md-4">
              <p className="fw-bold fs-5 text-dark">Time Table</p>
            </div>
            <div className="col-md-8">
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
                tabIndex="-1"
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
                        <div className="col-12 col-md-12">
                          <label>Polyclinic</label>
                          <select
                            className="form-select"
                            aria-label="Default select example"
                            onChange={(e) => setPolyclinic(e.target.value)}
                          >
                            <option selected>Select Polyclinic</option>
                            {polyclinics?.map((item, index) => (
                              <option value={item?.id} key={index}>
                                {item?.name}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="col-12 col-md-12">
                          <label>Day</label>
                          <select
                            className="form-select"
                            aria-label="Default select example"
                            onChange={(e) => setDay(e.target.value)}
                          >
                            <option selected>Select Day</option>
                            <option value="Monday">Monday</option>
                            <option value="Tuesday">Tuesday</option>
                            <option value="Wednesday">Wednesday</option>
                            <option value="Thursday">Thursday</option>
                            <option value="Friday">Friday</option>
                            <option value="Saturday">Saturday</option>
                            <option value="Sunday">Sunday</option>
                          </select>
                        </div>
                      </div>
                      <div className="time_slot_list py-4">
                        <div className="row">
                          {timeslot.map((item, index) => (
                            <div className="col-4" key={index}>
                              <div className="form-check form-check-inline d-flex justify-content-center align-items-baseline bg-success mb-2 py-2 rounded text-light">
                                <input
                                  className="form-check-input me-2"
                                  type="checkbox"
                                  id="inlineCheckbox1"
                                  value={item}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineCheckbox1"
                                >
                                  {item}
                                </label>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="time_table_add_btn text-end">
                        <button type="btn btn-primary" onClick={addSchedule}>
                          Add
                        </button>
                      </div>
                      {/* <div className="time_modal_table mt-5">
                        <table className="table">
                          <thead>
                            <tr>
                              <th>Day</th>
                              <th>Start</th>
                              <th>End</th>
                            </tr>
                          </thead>
                          <tbody>
                            {schedule.map((item, index) => (
                              <tr key={index}>
                                <td>{item.day}</td>
                                <td>{item.start_time}</td>
                                <td>{item.end_time}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div> */}
                      <div className="card mt-3 shadow">
                        <div className="card-body">
                          <div className="time_table_modal_table">
                            <div className="row align-items-center">
                              <div className="col-2">
                                <p className="fs-6 fw-bold">Day</p>
                              </div>
                              <div className="col-10">
                                <div className="row">
                                  <div className="col-4">
                                    <div className="d-flex justify-content-center bg-success px-1 py-2 rounded text-light mb-2">
                                      <span>12:00 AM - 01:00 AM</span>
                                    </div>
                                  </div>
                                  <div className="col-4">
                                    <div className="d-flex justify-content-center bg-success px-1 py-2 rounded text-light mb-2">
                                      <span>12:00 AM - 01:00 AM</span>
                                    </div>
                                  </div>
                                  <div className="col-4">
                                    <div className="d-flex justify-content-center bg-success px-1 py-2 rounded text-light mb-2">
                                      <span>12:00 AM - 01:00 AM</span>
                                    </div>
                                  </div>
                                  <div className="col-4">
                                    <div className="d-flex justify-content-center bg-success px-1 py-2 rounded text-light mb-2">
                                      <span>12:00 AM - 01:00 AM</span>
                                    </div>
                                  </div>
                                  <div className="col-4">
                                    <div className="d-flex justify-content-center bg-success px-1 py-2 rounded text-light mb-2">
                                      <span>12:00 AM - 01:00 AM</span>
                                    </div>
                                  </div>
                                  <div className="col-4">
                                    <div className="d-flex justify-content-center bg-success px-1 py-2 rounded text-light mb-2">
                                      <span>12:00 AM - 01:00 AM</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card mt-3 shadow">
                        <div className="card-body">
                          <div className="time_table_modal_table">
                            <div className="row align-items-center">
                              <div className="col-2">
                                <p className="fs-6 fw-bold">Day</p>
                              </div>
                              <div className="col-10">
                                <div className="row">
                                  <div className="col-4">
                                    <div className="d-flex justify-content-center bg-success px-1 py-2 rounded text-light mb-2">
                                      <span>12:00 AM - 01:00 AM</span>
                                    </div>
                                  </div>
                                  <div className="col-4">
                                    <div className="d-flex justify-content-center bg-success px-1 py-2 rounded text-light mb-2">
                                      <span>12:00 AM - 01:00 AM</span>
                                    </div>
                                  </div>
                                  <div className="col-4">
                                    <div className="d-flex justify-content-center bg-success px-1 py-2 rounded text-light mb-2">
                                      <span>12:00 AM - 01:00 AM</span>
                                    </div>
                                  </div>
                                  <div className="col-4">
                                    <div className="d-flex justify-content-center bg-success px-1 py-2 rounded text-light mb-2">
                                      <span>12:00 AM - 01:00 AM</span>
                                    </div>
                                  </div>
                                  <div className="col-4">
                                    <div className="d-flex justify-content-center bg-success px-1 py-2 rounded text-light mb-2">
                                      <span>12:00 AM - 01:00 AM</span>
                                    </div>
                                  </div>
                                  <div className="col-4">
                                    <div className="d-flex justify-content-center bg-success px-1 py-2 rounded text-light mb-2">
                                      <span>12:00 AM - 01:00 AM</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
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
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={addTimeTable}
                      >
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {doctor?.timetable?.map((item, index) => (
            <div className="doc_time mb-3" key={index}>
              <div className="card card_list p-3 shadow">
                <div className="row align-items-center">
                  <div className="col-md-4">
                    <div className="card_item">
                      <p className="fs-5 fw-bold">{item?.polyclinic?.name}</p>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="card_item">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Day</th>
                            <th>Start</th>
                            <th>End</th>
                          </tr>
                        </thead>
                        <tbody>
                          {item?.schedule?.map((curelem, index) => (
                            <tr key={index}>
                              <td>{curelem?.day}</td>
                              <td>{curelem?.start_time}</td>
                              <td>{curelem?.end_time}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TimeTable;
