import AppointmentCard from "../components/AppointmentCard";

const index = () => {
  return (
    <>
      <h5 className="mb-0">Dashboard</h5>

      <div className="row">
        <AppointmentCard />
        <AppointmentCard />
        <AppointmentCard />
      </div>
    </>
  );
};

export default index;
