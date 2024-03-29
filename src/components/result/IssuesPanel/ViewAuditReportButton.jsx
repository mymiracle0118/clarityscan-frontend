const ViewAuditReportButton = ({ handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="rounded-[25px] bg-gradient-to-r from-[#1b4eae] to-[#c36ce2] p-2 px-5 font-bold"
    >
      View Audit Report PDF
    </button>
  );
};

export default ViewAuditReportButton;
