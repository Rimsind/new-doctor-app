import Pagination2 from "../../../components/Pagination2";
import FormCloseBtn from "../../../components/FormCloseBtn";
import {
  IdentifiedProblem,
  LongTermGoal,
  ShortTermGoal,
  TreatmentPlan,
} from "../../../components/AssestmentForm";
import { useRouter } from "next/router";
const form2 = () => {
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
                      Anthropometric Assessment
                    </h3>
                  </div>
                </div>
                <FormCloseBtn id={appointmentId} />
              </div>
              <div>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-8">
                      <h3>
                        Body composition assessment includes body mass
                        index,impedence measure ment,skin fold thickness
                        measurement
                      </h3>
                    </div>
                    <div className="col-md-4">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Text Area"
                      />
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-8">
                      <h3>
                        Body dimension includes girth measurement and length
                        measurement
                      </h3>
                    </div>
                    <div className="col-md-4">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Text Area"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="gen-form">
                <div className="row justify-content-between align-items-start">
                  <div className="col-md-8">
                    <h3>
                      Edema Measurement includes girth,palpation,scales,volume
                    </h3>
                  </div>
                  <div className="col-md-4">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Text Area"
                    />
                  </div>
                </div>
              </div>
              <IdentifiedProblem />
              <ShortTermGoal />
              <LongTermGoal />
              <TreatmentPlan />
            </div>
          </div>
        </div>
        <Pagination2 name2="active" id={appointmentId} />
      </div>
    </>
  );
};

export default form2;
