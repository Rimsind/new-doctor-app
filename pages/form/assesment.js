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
      <div className="general-information-form">
        <div className="gen-form-upper row align-items-center">
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
          <div className="row align-items-center">
            <div className="col-6">
              <div className="general-form">
                <div className="row justify-centent-between align-items-center">
                  <div className="col-md-3">
                    <p className="fs-6 fw-bold">Clinical Investigation</p>
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
            </div>
            <div className="col-6">
              <div className="general-form">
                <p className="fs-6 fw-bold">Problems List</p>
                <div className="gen-form-table px-2 py-3 bg-light">
                  <table className="table">
                    <thead className="bg-info">
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
            </div>
          </div>
        </div>

        <div className="gen-form">
          <p className="fs-5 fw-bold">Medical Diagnosis</p>

          <div className="row mt-3">
            <input
              type="text"
              className="form-control"
              id=""
              placeholder=""
              value={icd}
              onChange={(e) => setIcd(e.target.value)}
            />
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
        <div className="gen-form">
          <div className="row align-items-baseline">
            <div className="col-6">
              <div className="general-form">
                <div className="row align-items-center">
                  <div className="col-md-3">
                    <p className="fs-6 fw-bold">Treatment Plan </p>
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
            </div>
            <div className="col-6">
              <div className="rfa-gen-form-data-table bg-white p-2 rounded-3 mt-4">
                <table className="table table-striped">
                  <thead className="bg-info">
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
            </div>
          </div>
        </div>
        <div className="save_btn_form_assessment text-center mt-3">
          <button className="btn btn-success" onClick={submitAssesment}>
            Save Changes
          </button>
        </div>
      </div>
    </>
  );
};

export default Assesment;
