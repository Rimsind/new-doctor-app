const TreatmentPlan = () => {
  return (
    <>
      <div className="gen-form">
        <div className="row justify-centent-between align-items-center">
          <div className="col-md-3">
            <h3>Treatment Plan </h3>
          </div>
          <div className="col-md-9">
            <div className="row">
              <div className="col-md-4">
                <label className="mb-3">
                  Aerobic capacity returning during
                </label>
              </div>
              <div className="col-md-8">
                <select
                  className="form-select form-select-sm mb-3"
                  aria-label=".form-select-sm example"
                >
                  <option selected>Select Task</option>
                  <option value="1">Bed Mobility Task</option>
                  <option value="2">Transfer Task</option>
                  <option value="3">ADL Task</option>
                  <option value="4">IADL Task</option>
                  <option value="5">Ambulation Task</option>
                  <option value="6">Treadmill Task</option>
                  <option value="7">Step Test Task</option>
                  <option value="3">Wheelchair Mobility Task</option>
                </select>
              </div>
            </div>
            <textarea
              className="form-control"
              rows="3"
              placeholder="Describe your problems here"
            ></textarea>
          </div>
        </div>
      </div>
    </>
  );
};

export default TreatmentPlan;
