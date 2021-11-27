const LongTermGoal = () => {
  return (
    <>
      <div className="gen-form">
        <div className="row justify-centent-between align-items-center">
          <div className="col-md-3">
            <h3>Long Term Goals </h3>
          </div>
          <div className="col-md-9">
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

export default LongTermGoal;
