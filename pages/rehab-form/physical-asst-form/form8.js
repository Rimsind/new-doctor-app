import Pagination2 from "../../../components/Pagination2";
import FormCloseBtn from "../../../components/FormCloseBtn";
import {
  IdentifiedProblem,
  LongTermGoal,
  ShortTermGoal,
  TreatmentPlan,
} from "../../../components/AssestmentForm/index";
import { useRouter } from "next/router";
const form8 = () => {
  const { appointmentId } = useRouter().query;
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
                      Gait Assessment
                    </h3>
                  </div>
                </div>
                <FormCloseBtn id={appointmentId} />
              </div>
              <div className="gen-form-table mt-4">
                <table className="table table-bordered border-dark">
                  <tr>
                    <th></th>
                    <th>Ankle</th>
                    <th>Knee</th>
                    <th>Hip</th>
                    <th>Trunk</th>
                  </tr>
                  <tr>
                    <td rowSpan="3">Heel Strike To Foot Flat</td>
                    <td>
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
                          <p>Foot Slap</p>
                        </div>
                      </div>
                    </td>
                    <td>
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
                          <p>Knee Hyperextension</p>
                        </div>
                      </div>
                    </td>
                    <td>
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
                          <p>Excessive Flexion</p>
                        </div>
                      </div>
                    </td>
                    <td>
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
                          <p>Lateral Trunk Lean</p>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
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
                          <p>Toes First</p>
                        </div>
                      </div>
                    </td>
                    <td></td>
                    <td>
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
                          <p>Limited Flexion</p>
                        </div>
                      </div>
                    </td>
                    <td>
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
                          <p>Backward Trunk Lean</p>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
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
                          <p>Foot Flat</p>
                        </div>
                      </div>
                    </td>
                    <td></td>
                    <td></td>
                    <td>
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
                          <p>Forward Trunk Lean</p>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td rowSpan="5">Foot Flat To Mid Stance</td>
                    <td>
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
                          <p>Excessive Positional</p>
                        </div>
                      </div>
                    </td>
                    <td>
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
                          <p>Knee Hyper Extension</p>
                        </div>
                      </div>
                    </td>
                    <td>
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
                          <p>Limited Hip Extension</p>
                        </div>
                      </div>
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
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
                          <p>Palnter Flexion</p>
                        </div>
                      </div>
                    </td>
                    <td></td>
                    <td></td>
                    <td>
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
                          <p>Internal Rotation</p>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
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
                          <p>Heel Lift in Mid Stance</p>
                        </div>
                      </div>
                    </td>
                    <td></td>

                    <td>
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
                          <p>External Rotation</p>
                        </div>
                      </div>
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
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
                          <p>Excessive Dorsiflexion</p>
                        </div>
                      </div>
                    </td>
                    <td></td>

                    <td>
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
                          <p>Abduction</p>
                        </div>
                      </div>
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
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
                          <p>Toe Clawing</p>
                        </div>
                      </div>
                    </td>
                    <td></td>

                    <td>
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
                          <p>Adduction</p>
                        </div>
                      </div>
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td rowSpan="3">Heel Off To Toe Off</td>
                    <td>
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
                          <p>No Roll Off</p>
                        </div>
                      </div>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
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
                          <p>Insufficient Transfer of Excessive Knee Flexion</p>
                        </div>
                      </div>
                    </td>
                    <td></td>

                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
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
                          <p>Weight From Lateral Heel to Medial Forefoot</p>
                        </div>
                      </div>
                    </td>
                    <td></td>

                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td rowSpan="3">Acceleration To Mid Swing</td>
                    <td>
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
                          <p>Toe Drag Excessive Knee Flexion</p>
                        </div>
                      </div>
                    </td>
                    <td></td>
                    <td>
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
                          <p>Circumduction</p>
                        </div>
                      </div>
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
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
                          <p>Varus</p>
                        </div>
                      </div>
                    </td>
                    <td>
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
                          <p>Limited Knee Flexion</p>
                        </div>
                      </div>
                    </td>
                    <td>
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
                          <p>Hip Hiking</p>
                        </div>
                      </div>
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
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
                          <p>Limited Knee Flexion</p>
                        </div>
                      </div>
                    </td>
                    <td>
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
                          <p>Excessive Hip Flexion</p>
                        </div>
                      </div>
                    </td>
                    <td></td>
                  </tr>
                </table>
              </div>
              <IdentifiedProblem />
              <ShortTermGoal />
              <LongTermGoal />
              <TreatmentPlan />
            </div>
          </div>
          <Pagination2 name8="active" id={appointmentId} />
        </div>
      </div>
    </>
  );
};

export default form8;
