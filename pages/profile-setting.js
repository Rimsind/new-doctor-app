import PasswordUpdate from "../components/PasswordUpdate";
import ProfileInformation from "../components/ProfileInformation";
import ProfilePicture from "../components/ProfilePicture";
const profilSetting = () => {
  return (
    <>
      <h5 className="mb-0 pb-2">Schedule Timing</h5>
      <div className="rounded shadow mt-4">
        <div className="p-4 border-bottom profile-heading">
          <h5 className="mb-0">Personal Information :</h5>
        </div>

        <ProfilePicture />

        <ProfileInformation />
      </div>

      <PasswordUpdate />

      {/* <div className="rounded shadow mt-4">
        <div className="p-4 border-bottom profile-heading">
          <h5 className="mb-0 text-danger">Delete Account :</h5>
        </div>

        <div className="p-4 profile-body">
          <h6 className="mb-0 fw-normal">
            Do you want to delete the account? Please press below
            &quot;Delete&quot; button
          </h6>
          <div className="mt-4">
            <button className="btn btn-danger">Delete Account</button>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default profilSetting;
