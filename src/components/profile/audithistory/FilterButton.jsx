import React, { useState } from "react";

const FilterButton = (props) => {
    const {filterItemSelect, filters} = props;

    const onClick = (chain) => {
        filterItemSelect(chain);
    };


    return (
        <div className="flex gap-x-6 md:gap-x-10 lg:gap-x-12">
            {filters.map((filter) => (
            <button
                key={filter.value}
                onClick={() => onClick(filter)}
                className="bg-gradient-to-r from- from-[#323035] to-[#4E4E68] text-lg md:text-2xl px-2 md:px-4 py-2 rounded-full text-nowrap"
            >
                {filter.label}
            </button>
            ))}
        </div>
    );
};

export default FilterButton;
