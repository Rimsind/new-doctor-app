import FormCloseBtn from "../../components/FormCloseBtn";
import Link from "next/link";
import useSWR from "swr";
import { useAuth } from "../../context";
import { useRouter } from "next/router";
import { apiUrl } from "../../config/api";
import Pagination from "../../components/Pagination";
const FamilyHistory = () => {
  const { appointmentId } = useRouter().query;
  const { auth } = useAuth();
  const { data } = useSWR(
    `${apiUrl}/appointments/${appointmentId}`,
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

  return (
    <>
      <div className="general-information-form relative p-6 flex-auto container">
        <div className="max-w-6xl mx-auto md:py-10">
          <div className="space-y-5 border-2 p-10 rounded">
            <div className="space-y-2 pb-5">
              <div className="gen-form-upper row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                  <div className="text-center pb-6">
                    <h3 className="general-information-form-title font-bold">
                      Family Medical History
                    </h3>
                  </div>
                </div>
                <FormCloseBtn id={appointmentId} />
              </div>
              <div className="gen-form">
                <div className="row justify-centent-between align-items-center">
                  <div className="col-md-3">
                    <div className="row">
                      <div className="col-md-4">
                        <label htmlFor="" className="form-label">
                          Relation
                        </label>
                      </div>
                      <div className="col-md-8">
                        <select
                          className="form-select form-select-sm"
                          aria-label=".form-select-sm example"
                        >
                          <option selected>Select</option>
                          <option value="1">Mother</option>
                          <option value="2">Father</option>
                          <option value="3">Wife</option>
                          <option value="3">Child</option>
                          <option value="3">Grand Father</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="row">
                      <div className="col-md-8">
                        <label htmlFor="" className="form-label">
                          Age (if leaving)
                        </label>
                      </div>
                      <div className="col-md-4">
                        <input
                          type="number"
                          className="form-control"
                          id=""
                          placeholder=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="row">
                      <div className="col-md-8">
                        <label htmlFor="" className="form-label">
                          Age (if death)
                        </label>
                      </div>
                      <div className="col-md-4">
                        <input
                          type="number"
                          className="form-control"
                          id=""
                          placeholder=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="row">
                      <div className="col-md-7">
                        <label htmlFor="" className="form-label">
                          Cause of death
                        </label>
                      </div>
                      <div className="col-md-5">
                        <input
                          type="text"
                          className="form-control"
                          id=""
                          placeholder=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="mt-2">
                  Which disease they hade? (Check all that apply)
                </h3>
                <div className="row justify-centent-between align-items-center">
                  <div className="col-md-3">
                    <div className="row">
                      <div className="col-md-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                      </div>
                      <div className="col-md-10">
                        <p>Anemia</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="row">
                      <div className="col-md-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                      </div>
                      <div className="col-md-10">
                        <p>Cancer</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="row">
                      <div className="col-md-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                      </div>
                      <div className="col-md-10">
                        <p>Diabetes</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="row">
                      <div className="col-md-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                      </div>
                      <div className="col-md-10">
                        <p>Epilepsy</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="row">
                      <div className="col-md-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                      </div>
                      <div className="col-md-10">
                        <p>Glaucoma</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="row">
                      <div className="col-md-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                      </div>
                      <div className="col-md-10">
                        <p>Heart Disease</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="row">
                      <div className="col-md-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                      </div>
                      <div className="col-md-10">
                        <p>High Blood Pressure</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="row">
                      <div className="col-md-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                      </div>
                      <div className="col-md-10">
                        <p>Hay Fever</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="row">
                      <div className="col-md-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                      </div>
                      <div className="col-md-10">
                        <p>Hives</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="row">
                      <div className="col-md-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                      </div>
                      <div className="col-md-10">
                        <p>Kidney disease</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="row">
                      <div className="col-md-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                      </div>
                      <div className="col-md-10">
                        <p>Mental illness</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="row">
                      <div className="col-md-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                      </div>
                      <div className="col-md-10">
                        <p>Rheumatoid arthritis</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="row">
                      <div className="col-md-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                      </div>
                      <div className="col-md-10">
                        <p>Tuberculosis</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="gen-form-add-btn pb-5">
                  <a href="#" className="btn btn-primary">
                    Add
                  </a>
                </div>
              </div>
              <div
                className="rfa-gen-form-data-table"
                style={{
                  background: "white",
                  padding: "10px",
                  borderRadius: "3px",
                  marginTop: "10px",
                }}
              >
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Relation</th>
                      <th scope="col">Age (if living)</th>
                      <th scope="col">Age (if death)</th>
                      <th scope="col">Cause of death</th>
                      <th scope="col">Problems</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.patient?.familyHistory?.map((item, index) => (
                      <tr key={index}>
                        <td>{item.relation}</td>
                        <td>{item.age_if_living}</td>
                        <td>{item.age_if_death}</td>
                        <td>{item.cause_of_death}</td>
                        <td>{item.diseases}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <Pagination id={appointmentId} class7="active" />
      </div>
    </>
  );
};

export default FamilyHistory;
