import FilterButton from "@/components/profile/audithistory/FilterButton";

export default function Filter(props) {
    const {filterButtonSelect} = props;
    const filterItemSelect = (chain) => {
        filterButtonSelect(chain);
    };

  return (
    <>
      <div className="flex justify-center items-center p-8 gap-x-10">
        <FilterButton
          filters={[
            { label: "Bitcoin", value: "BTC" },
            { label: "NFTs", value: "NFT" },
            { label: "Stacks", value: "STX" },
          ]}
          filterItemSelect={filterItemSelect}
        />
        <div className="hidden lg:block border-b-1 border-gray-400 border w-1/2"></div>
        <FilterButton
          filters={[{ label: "View ALL", value: "all" }]}
          className="min-w-[120px]"
          filterItemSelect={filterItemSelect}
        />
        {/* Render filtered data or other components */}
        {/* <ul>
                  {filteredData.map((item) => (
                    <li key={item.id}>{item.type}</li>
                  ))}
                </ul> */}
      </div>
    </>
  );
}
