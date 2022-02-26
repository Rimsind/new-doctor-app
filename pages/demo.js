import { jsPDF } from "jspdf";

const demo = () => {
  const download = () => {
    const doc = new jsPDF();

    doc.text("hiiiiiifghhii", 10, 10);
    doc.save("e-prescription.pdf");
  };

  return (
    <>
      <button onClick={download}>Download</button>
    </>
  );
};

export default demo;
