export default function UserinfoHeader() {
  return (
    <div className="bg-[url('@/assets/images/profile/headerbackground.webp')] bg-center my-12 pl-4 md:pl-20 pr-2 md:pr-14 pt-6 md:pt-10 pb-3 text-white rounded-[6%] max-w-[1500px] m-auto">
      <p className="text-3xl lg:text-5xl font-extrabold">
        You are Using <br />
        ClarityScan’s <br />
        Premium
      </p>
      <p className="border-r-4 border-red-500 px-2 text-right text-sm lg:text-lg leading-4 lg:leading-6">Number of Scans left: 21</p>
      <p className="border-r-4 border-yellow-500 px-2 text-right text-sm lg:text-lg mt-2 leading-4 lg:leading-6">You are using Premium Since 25/11/2008</p>
    </div>
  );
}
