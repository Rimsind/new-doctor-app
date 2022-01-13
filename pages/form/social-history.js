import FormCloseBtn from "../../components/FormCloseBtn";
import Link from "next/link";
import useSWR from "swr";
import { useAuth } from "../../context";
import { useRouter } from "next/router";
import { apiUrl } from "../../config/api";
import Pagination from "../../components/Pagination";
const SocialHistory = () => {
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

  const live_where = [
    "Private Home",
    "Rented Home",
    "Extended Care",
    "Duplex",
    "Apartment",
    "Flat",
    "Homeless",
    "Others",
  ];

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
                      Social History & Living Environment
                    </h3>
                  </div>
                </div>
                <FormCloseBtn id={appointmentId} />
              </div>

              <div className="gen-form">
                <div className="row justify-content-between align-items-center">
                  <div className="col-md-3">
                    <h3>Where do you live?</h3>
                  </div>
                  <div className="col-md-9">
                    <div className="row">
                      {live_where?.map((item, index) => (
                        <div className="col-md-3" key={index}>
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
                              <p className="space-x-4">{item}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="gen-form">
                <div className="row justify-content-between align-items-center">
                  <div className="col-md-3">
                    <h3>With whom do you live?</h3>
                  </div>
                  <div className="col-md-9">
                    <div className="row">
                      <div className="col-md-3">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Alone</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Relative(s)</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Friend(s)</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Child or Children</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Spouse</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Patient(s)</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Group Setting</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Partner</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Brother(s)</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Sister(s)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="gen-form">
                <div className="row justify-centent-between align-items-center">
                  <div className="col-md-3">
                    <h3>Does your home have?</h3>
                  </div>
                  <div className="col-md-9">
                    <div className="row">
                      <div className="col-md-3">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">One Level</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Two Level</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Multi Level</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Stairs, No Ralling</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Ramps</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Elevation</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Elevators</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Stairs, Ralling</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Uneven Terrain</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-9">
                        <div className="row">
                          <div className="col-md-1">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-11">
                            <div className="row justify-centent-between align-items-center">
                              <div className="col-md-5">
                                <p className="space-x-4">
                                  Any Obstacles (List):
                                </p>
                              </div>
                              <div className="col-md-7">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="gen-form">
                <div className="row justify-centent-between align-items-center">
                  <div className="col-md-3">
                    <h3>How Many Steps?</h3>
                  </div>
                  <div className="col-md-9">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-md-8">
                            <p className="space-x-4">
                              No. Steps Outside The Home:
                            </p>
                          </div>
                          <div className="col-md-4">
                            <input
                              type="number"
                              className="form-control"
                              placeholder=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-md-8">
                            <p className="space-x-4">
                              No. Steps Inside The Home:
                            </p>
                          </div>
                          <div className="col-md-4">
                            <input
                              type="number"
                              className="form-control"
                              placeholder=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="gen-form">
                <div className="row justify-content-between align-items-center">
                  <div className="col-md-3">
                    <h3>Do You Use?</h3>
                  </div>
                  <div className="col-md-9">
                    <div className="row">
                      <div className="col-md-3">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Forearm Crutches</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Axillary Crutches</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Straight Cane</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Walker</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Manual Wheelchair</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Quad Cane</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Two Cane</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Rolling Walker</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Motor Wheelchair</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Glasses</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Hearing Aid</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <div className="row justify-centent-between align-items-center">
                              <div className="col-md-4">
                                <p className="space-x-4">Others: </p>
                              </div>
                              <div className="col-md-8">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="child-gen-form mt-3 mb-3">
                  <h3>Cultural / Religious</h3>
                  <div className="row">
                    <div className="col-md-4">
                      <p className="space-x-4">
                        Any cultural or religious beliefs or wishes that might
                        affect care?
                      </p>
                    </div>
                    <div className="col-md-8">
                      <input
                        type="text"
                        className="form-control"
                        placeholder=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="child-gen-form-heading">
                <h5>Social / Health Habits</h5>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-center">
                    <div className="col-md-3">
                      <h3>Do You Smoke Tobacco?</h3>
                    </div>
                    <div className="col-md-9">
                      <div className="row">
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />
                            </div>
                            <div className="col-md-10">
                              <p className="space-x-4">No</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />
                            </div>
                            <div className="col-md-10">
                              <p className="space-x-4">Occasionaly</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />
                            </div>
                            <div className="col-md-10">
                              <p className="space-x-4">Socialy</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />
                            </div>
                            <div className="col-md-10">
                              <p className="space-x-4">Heavily</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-center">
                    <div className="col-md-3">
                      <h3>Do You Drink Alcohol?</h3>
                    </div>
                    <div className="col-md-9">
                      <div className="row">
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />
                            </div>
                            <div className="col-md-10">
                              <p className="space-x-4">No</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />
                            </div>
                            <div className="col-md-10">
                              <p className="space-x-4">Occasionaly</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />
                            </div>
                            <div className="col-md-10">
                              <p className="space-x-4">Socialy</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />
                            </div>
                            <div className="col-md-10">
                              <p className="space-x-4">Heavily</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <div className="row ">
                    <div className="col-md-3">
                      <h3>Excercise?</h3>
                    </div>
                    <div className="col-md-9">
                      <div className="row">
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />
                            </div>
                            <div className="col-md-10">
                              <p className="space-x-4">No</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />
                            </div>
                            <div className="col-md-10">
                              <p className="space-x-4">Yes</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6"></div>
                      </div>
                      <div className="row justify-centent-between align-items-center">
                        <div className="col-md-6">
                          <p className="space-x-4">
                            If yes how many times per week?{" "}
                          </p>
                        </div>
                        <div className="col-md-6">
                          <input
                            type="number"
                            className="form-control"
                            placeholder=""
                          />
                        </div>
                      </div>
                      <div className="row justify-centent-between align-items-center">
                        <div className="col-md-6">
                          <p className="space-x-4">
                            How many minutes per day?{" "}
                          </p>
                        </div>
                        <div className="col-md-6">
                          <input
                            type="number"
                            className="form-control"
                            placeholder=""
                          />
                        </div>
                      </div>
                      <div className="row justify-centent-between align-items-center">
                        <div className="col-md-6">
                          <p className="space-x-4">
                            (Beyond normal daily activities & Chores)?{" "}
                          </p>
                        </div>
                        <div className="col-md-6">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Describe exercise or activity"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Pagination id={appointmentId} class3="active" />
      </div>
    </>
  );
};

export default SocialHistory;
