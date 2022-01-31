const LongTermGoal = () => {
  return (
    <>
      <div className="gen-form">
        <div className="row justify-centent-between align-items-center">
          <div className="col-md-3">
            <h3>Long Term Goals </h3>
          </div>
          <div className="col-md-9">
            <div className="row">
              <div className="col-md-4">
                <label className="mb-3">
                  Patients will demonstrate aerobic capacity during
                </label>
              </div>
              <div className="col-md-8">
                <select
                  className="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                >
                  <option selected>Select Score</option>
                  <option value="1">0 – Nothing at all</option>
                  <option value="2">0.5 – Just noticeable</option>
                  <option value="3">1 – Very light</option>
                  <option value="4">2 – Light</option>
                  <option value="5">3 – Moderate</option>
                  <option value="6">4 – Somewhat heavy</option>
                  <option value="7">5 – Heavy</option>
                  <option value="8">6</option>
                  <option value="9">7 – Very heavy</option>
                  <option value="10">8</option>
                  <option value="11">9</option>
                  <option value="12">10 – Very, very heavy</option>
                </select>
              </div>
            </div>
            <textarea
              className="form-control"
              placeholder="Describe your problems here"
            ></textarea>
          </div>
        </div>
      </div>
    </>
  );
};

export default LongTermGoal;
