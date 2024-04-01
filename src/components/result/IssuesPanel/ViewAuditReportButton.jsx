import EastIcon from '@mui/icons-material/East';

const ViewAuditReportButton = ({ handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="rounded-[25px] bg-gradient-to-r from-[#1b4eae] to-[#c36ce2] p-3 px-7 font-bold md:text-md lg:text-xl 2xl:text-2xl"
    >
      View Audit Report PDF <EastIcon sx={{ fontSize: { md: '25px', lg: '35px' } }} />
    </button>
  );
};

export default ViewAuditReportButton;
