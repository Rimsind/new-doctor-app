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
                        <div className="col-md-12">
                          <label>Polyclinic</label>
                          <select
                            class="form-select"
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
                        <div className="col-md">
                          <label>Day</label>
                          <select
                            class="form-select"
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
                        <div className="col-md">
                          <label>Start Time</label>
                          <input
                            type="time"
                            className="form-control"
                            value={startTime}
                            onChange={(e) => setStartTime(e.target.value)}
                          />
                        </div>
                        <div className="col-md">
                          <label>End Time</label>
                          <input
                            type="time"
                            className="form-control"
                            value={endTime}
                            onChange={(e) => setEndTime(e.target.value)}
                          />
                        </div>
                        <div className="col-md">
                          <button type="btn btn-primary" onClick={addSchedule}>
                            Add
                          </button>
                        </div>
                        <div className="time_modal_table mt-5">
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
            <div className="doc_time mb-3">
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
                            <tr>
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
