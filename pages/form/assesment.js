import FormCloseBtn from "../../components/FormCloseBtn";
import { useRouter } from "next/router";
import { useState } from "react";
import { useAuth } from "../../context";
import router from "next/router";
import axios from "axios";
import { fetcher } from "../../config/api";
import useSWR from "swr";
import { apiUrl } from "../../config/api";

const Assesment = () => {
  const { appointmentId } = useRouter().query;
  const { auth } = useAuth();
  const [investigation, setInvestigation] = useState();
  const [treatmentPlan, setTreatmentPlan] = useState();
  const [icd, setIcd] = useState();
  const [allIcd, setAllIcd] = useState([]);

  const { data } = useSWR(
    `http://icd10api.com/?s=${icd}&desc=short&r=json`,
    fetcher
  );

  const addIcd = (event) => {
    setAllIcd([
      ...allIcd,
      {
        description: event.target.value,
      },
    ]);
    setIcd("");
  };

  const submitAssesment = async (event) => {
    event.preventDefault();
    const payload = {
      assesment: {
        clinicalInvestigation: investigation,
        diagnosis: allIcd,
        treatmentPlan: treatmentPlan,
      },
    };
    console.log(payload);
    const res = await axios.put(
      `${apiUrl}/appointments/${appointmentId}`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      }
    );
    const result = res.data;
    alert("Form Submitted Succesfully");
    router.push(`/diagnosis?appointmentId=${appointmentId}`);
    return result;
  };

  return (
    <>
      <div className="general-information-form relative p-6 flex-auto">
        <div className="max-w-6xl mx-auto md:py-10">
          <div className="space-y-5 border-2 p-10 rounded">
            <div className="space-y-2 pb-5">
              <div className="gen-form-upper row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                  <div className="text-center pb-6">
                    <h3 className="general-information-form-title font-bold">
                      Assessment
                    </h3>
                  </div>
                </div>
                <FormCloseBtn id={appointmentId} />
              </div>

              <div className="gen-form">
                <p className="fs-5 fw-bold">Problems List</p>
                <div className="gen-form-table px-2 py-3 bg-light">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Mark</td>
                        <td>Otto</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="gen-form">
                <div className="row justify-centent-between align-items-center">
                  <div className="col-md-3">
                    <h3>Clinical Investigation</h3>
                  </div>
                  <div className="col-md-9">
                    <textarea
                      className="form-control"
                      rows="3"
                      placeholder="Describe your problems here"
                      onChange={(e) => setInvestigation(e.target.value)}
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="gen-form">
                <h3>Medical Diagnosis</h3>

                <div className="row justify-content-between align-items-end mt-3">
                  <div className="col-md-8">
                    <input
                      type="text"
                      className="form-control"
                      id=""
                      placeholder=""
                      value={icd}
                      onChange={(e) => setIcd(e.target.value)}
                    />
                  </div>
                  <div className="col-md-4">
                    <span className="btn btn-primary mb-2">Add Entry</span>
                  </div>

                  <div className="col-md-12">
                    <ul
                      className="bg-light"
                      style={{ marginLeft: "1px", width: "700px" }}
                    >
                      {data?.Search?.map((items, index) => (
                        <li key={index} className="list-unstyled border-bottom">
                          <div className="d-grid gap-2">
                            <button
                              className="btn btn-outline-primary border-0 text-start "
                              value={`${items.Name}: ${items.Description}`}
                              onClick={addIcd}
                            >
                              {items?.Name} : {items?.Description}
                            </button>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="rfa-gen-form-data-table mt-4"
                style={{
                  background: "white",
                  padding: "10px",
                  borderRadius: "3px",
                }}
              >
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Sl.</th>
                      <th scope="col"> Medical Diagnosis List</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allIcd.map((items, index) => (
                      <tr key={index}>
                        <th scope="row">*</th>
                        <td>{items.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="gen-form">
                <div className="row justify-centent-between align-items-center">
                  <div className="col-md-3">
                    <h3>Treatment Plan </h3>
                  </div>
                  <div className="col-md-9">
                    <textarea
                      className="form-control"
                      rows="3"
                      placeholder="Describe your problems here"
                      onChange={(e) => setTreatmentPlan(e.target.value)}
                    ></textarea>
                  </div>
                </div>
              </div>
              <button className="mt-2" onClick={submitAssesment}>
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Assesment;
