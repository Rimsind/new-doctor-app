import { useForm } from "react-hook-form";
const PasswordUpdate = () => {
  const {register, handleSubmit} = useForm();
  const onSubmit = (data, event) => {
    event.preventDefault();
    console.log(data)
  }
  return (
    <>
      <div className="rounded shadow mt-4">
        <div className="p-4 border-bottom profile-heading">
          <h5 className="mb-0">Change Password :</h5>
        </div>

        <div className="p-4 profile-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-lg-12">
                <div className="mb-3" {...register("oldPassword")}>
                  <label className="form-label">Old password :</label>
                  <input
                  name="oldPassword"
                    type="password"
                    className="form-control"
                    placeholder="Old password"
                    required=""
                  />
                </div>
              </div>

              <div className="col-lg-12">
                <div className="mb-3" {...register("newPassword")}>
                  <label className="form-label">New password :</label>
                  <input
                  name="newPassword"
                    type="password"
                    className="form-control"
                    placeholder="New password"
                    required=""
                  />
                </div>
              </div>

              <div className="col-lg-12">
                <div className="mb-3" {...register("retypeNewPassword")}>
                  <label className="form-label">Re-type New password :</label>
                  <input
                  name="retypeNewPassword"
                    type="password"
                    className="form-control"
                    placeholder="Re-type New password"
                    required=""
                  />
                </div>
              </div>

              <div className="col-lg-12 mt-2 mb-0">
                <div className="update-password-btn" style={{textAlign: "right"}}>
                <button type="submit" className="btn btn-primary">Save password</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default PasswordUpdate;
