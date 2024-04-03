import { history } from "@/assets";

export default function AuditHistoryHeader() {
  return (
    <div className="xl:flex justify-center items-center gap-x-10 md:gap-x-24 p-4 md:p-8">
      <div className="flex items-end gap-x-6 justify-center">
        <h1 className="text-3xl md:text-5xl font-extrabold">Your Audit History</h1>
        <img src={history} alt="" className="w-10 md:w-16" />
      </div>
      <p className="max-w-[430px] xs:m-auto xl:m-0 pt-4 xl:pt-0 text-center">
        Understanding the audit history of your Stacks smart contracts is
        crucial for ensuring asset security. Each audit meticulously examines
        the codebase, identifying vulnerabilities and ensuring compliance,
        providing insight into contract integrity.
      </p>
    </div>
  );
}
