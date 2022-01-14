import FormCloseBtn from "../../components/FormCloseBtn";
import Link from "next/link";
import useSWR from "swr";
import { useAuth } from "../../context";
import { useRouter } from "next/router";
import { apiUrl } from "../../config/api";
import Pagination from "../../components/Pagination";
const FunctionalStatus = () => {
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

  const options = ["Current", "Prior"];

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
                      Current Functional Status:
                    </h3>
                  </div>
                </div>
                <FormCloseBtn id={appointmentId} />
              </div>
              <div className="gen-form mb-3">
                <div className="row justify-content-between align-items-start">
                  <h3 className="fs-5 fs-bold text-dark mb-3">
                    Any Difficulty With Current Functional Mobility
                  </h3>
                  <div className="col-md-5">
                    <h3 className="fs-6 fs-bold text-dark">Bed Mobility</h3>
                  </div>
                  <div className="col-md-7">
                    <div className="row">
                      {options.map((item, index) => (
                        <div className="col-md-6" key={index}>
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="bedMobility"
                                value={item}
                              />
                            </div>
                            <div className="col-md-10">
                              <p className="space-x-4">{item}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="col-md-5">
                    <h3 className="fs-6 fs-bold text-dark">
                      Transfers (such as bed to chair, from bed to commode /
                      toilet)
                    </h3>
                  </div>
                  <div className="col-md-7">
                    <div className="row">
                      {options.map((item, index) => (
                        <div className="col-md-6" key={index}>
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="bedMobility"
                                value={item}
                              />
                            </div>
                            <div className="col-md-10">
                              <p className="space-x-4">{item}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="gen-form mb-3">
                <div className="row justify-content-between align-items-start">
                  <h3 className="fs-5 fs-bold text-dark mb-3">
                    Any Difficulty with Walking / movement such as
                  </h3>
                  <div className="col-md-5">
                    <h3 className="fs-6 fs-bold text-dark">On Ramps</h3>
                  </div>
                  <div className="col-md-7">
                    <div className="row">
                      {options.map((item, index) => (
                        <div className="col-md-6" key={index}>
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="bedMobility"
                                value={item}
                              />
                            </div>
                            <div className="col-md-10">
                              <p className="space-x-4">{item}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="col-md-5">
                    <h3 className="fs-6 fs-bold text-dark">Gai (Walking)</h3>
                  </div>
                  <div className="col-md-7">
                    <div className="row">
                      {options.map((item, index) => (
                        <div className="col-md-6" key={index}>
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="bedMobility"
                                value={item}
                              />
                            </div>
                            <div className="col-md-10">
                              <p className="space-x-4">{item}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="col-md-5">
                    <h3 className="fs-6 fs-bold text-dark">
                      On Level Surfaces
                    </h3>
                  </div>
                  <div className="col-md-7">
                    <div className="row">
                      {options.map((item, index) => (
                        <div className="col-md-6" key={index}>
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="bedMobility"
                                value={item}
                              />
                            </div>
                            <div className="col-md-10">
                              <p className="space-x-4">{item}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="col-md-5">
                    <h3 className="fs-6 fs-bold text-dark">On Stairs</h3>
                  </div>
                  <div className="col-md-7">
                    <div className="row">
                      {options.map((item, index) => (
                        <div className="col-md-6" key={index}>
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="bedMobility"
                                value={item}
                              />
                            </div>
                            <div className="col-md-10">
                              <p className="space-x-4">{item}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="col-md-5">
                    <h3 className="fs-6 fs-bold text-dark">
                      On Uneven Surfaces
                    </h3>
                  </div>
                  <div className="col-md-7">
                    <div className="row">
                      {options.map((item, index) => (
                        <div className="col-md-6" key={index}>
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="bedMobility"
                                value={item}
                              />
                            </div>
                            <div className="col-md-10">
                              <p className="space-x-4">{item}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="gen-form mb-3">
                <div className="row justify-content-between align-items-start">
                  <h3 className="fs-5 fs-bold text-dark mb-3">
                    Any Difficulty With Self-Care Activities Such As
                  </h3>
                  <div className="col-md-5">
                    <h3 className="fs-6 fs-bold text-dark">Bathing</h3>
                  </div>
                  <div className="col-md-7">
                    <div className="row">
                      {options.map((item, index) => (
                        <div className="col-md-6" key={index}>
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="bedMobility"
                                value={item}
                              />
                            </div>
                            <div className="col-md-10">
                              <p className="space-x-4">{item}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="col-md-5">
                    <h3 className="fs-6 fs-bold text-dark">Dressing</h3>
                  </div>
                  <div className="col-md-7">
                    <div className="row">
                      {options.map((item, index) => (
                        <div className="col-md-6" key={index}>
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="bedMobility"
                                value={item}
                              />
                            </div>
                            <div className="col-md-10">
                              <p className="space-x-4">{item}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="col-md-5">
                    <h3 className="fs-6 fs-bold text-dark">Toileting</h3>
                  </div>
                  <div className="col-md-7">
                    <div className="row">
                      {options.map((item, index) => (
                        <div className="col-md-6" key={index}>
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="bedMobility"
                                value={item}
                              />
                            </div>
                            <div className="col-md-10">
                              <p className="space-x-4">{item}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="gen-form mb-3">
                <div className="row justify-content-between align-items-start">
                  <h3 className="fs-5 fs-bold text-dark mb-3">
                    Any Difficulty With Home Management Such As
                  </h3>
                  <div className="col-md-5">
                    <h3 className="fs-6 fs-bold text-dark">Household Chores</h3>
                  </div>
                  <div className="col-md-7">
                    <div className="row">
                      {options.map((item, index) => (
                        <div className="col-md-6" key={index}>
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="bedMobility"
                                value={item}
                              />
                            </div>
                            <div className="col-md-10">
                              <p className="space-x-4">{item}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="col-md-5">
                    <h3 className="fs-6 fs-bold text-dark">Shopping</h3>
                  </div>
                  <div className="col-md-7">
                    <div className="row">
                      {options.map((item, index) => (
                        <div className="col-md-6" key={index}>
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="bedMobility"
                                value={item}
                              />
                            </div>
                            <div className="col-md-10">
                              <p className="space-x-4">{item}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="col-md-5">
                    <h3 className="fs-6 fs-bold text-dark">
                      Driving / Transporting
                    </h3>
                  </div>
                  <div className="col-md-7">
                    <div className="row">
                      {options.map((item, index) => (
                        <div className="col-md-6" key={index}>
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="bedMobility"
                                value={item}
                              />
                            </div>
                            <div className="col-md-10">
                              <p className="space-x-4">{item}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="col-md-5">
                    <h3 className="fs-6 fs-bold text-dark">
                      Care Of Dependents
                    </h3>
                  </div>
                  <div className="col-md-7">
                    <div className="row">
                      {options.map((item, index) => (
                        <div className="col-md-6" key={index}>
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="bedMobility"
                                value={item}
                              />
                            </div>
                            <div className="col-md-10">
                              <p className="space-x-4">{item}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="gen-form mb-3">
                <div className="row justify-content-between align-items-start">
                  <h3 className="fs-5 fs-bold text-dark mb-3">
                    Any Difficulty With Community And Work Activities Such As
                  </h3>
                  <div className="col-md-5">
                    <h3 className="fs-6 fs-bold text-dark">Work</h3>
                  </div>
                  <div className="col-md-7">
                    <div className="row">
                      {options.map((item, index) => (
                        <div className="col-md-6" key={index}>
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="bedMobility"
                                value={item}
                              />
                            </div>
                            <div className="col-md-10">
                              <p className="space-x-4">{item}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="col-md-5">
                    <h3 className="fs-6 fs-bold text-dark">School</h3>
                  </div>
                  <div className="col-md-7">
                    <div className="row">
                      {options.map((item, index) => (
                        <div className="col-md-6" key={index}>
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="bedMobility"
                                value={item}
                              />
                            </div>
                            <div className="col-md-10">
                              <p className="space-x-4">{item}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="col-md-5">
                    <h3 className="fs-6 fs-bold text-dark">Recreation</h3>
                  </div>
                  <div className="col-md-7">
                    <div className="row">
                      {options.map((item, index) => (
                        <div className="col-md-6" key={index}>
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="bedMobility"
                                value={item}
                              />
                            </div>
                            <div className="col-md-10">
                              <p className="space-x-4">{item}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="col-md-5">
                    <h3 className="fs-6 fs-bold text-dark">Sport</h3>
                  </div>
                  <div className="col-md-7">
                    <div className="row">
                      {options.map((item, index) => (
                        <div className="col-md-6" key={index}>
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="bedMobility"
                                value={item}
                              />
                            </div>
                            <div className="col-md-10">
                              <p className="space-x-4">{item}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="col-md-5">
                    <h3 className="fs-6 fs-bold text-dark">Play Activity</h3>
                  </div>
                  <div className="col-md-7">
                    <div className="row">
                      {options.map((item, index) => (
                        <div className="col-md-6" key={index}>
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="bedMobility"
                                value={item}
                              />
                            </div>
                            <div className="col-md-10">
                              <p className="space-x-4">{item}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="gen-form-soft-button mt-3">
                <div className="row">
                  <div className="col-md-4"></div>
                  <div className="col-md-4"></div>
                  <div className="col-md-4">
                    <div
                      className="right-button"
                      style={{ textAlign: "right" }}
                    >
                      <button type="submit" className="btn btn-success">
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Pagination id={appointmentId} class6="active" />
      </div>
    </>
  );
};

export default FunctionalStatus;
