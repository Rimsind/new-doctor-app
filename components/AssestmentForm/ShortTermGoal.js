const ShortTermGoal = () => {
  return (
    <>
      <div className="gen-form">
        <div className="row justify-centent-between align-items-center">
          <div className="col-md-3">
            <h3>Short Term Goals </h3>
          </div>
          <div className="col-md-9">
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

export default ShortTermGoal;
