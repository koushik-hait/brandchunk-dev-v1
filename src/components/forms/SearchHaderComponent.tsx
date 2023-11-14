import { AiOutlineSearch } from "@/lib/icons";
import React from "react";

const SearchHaderComponent = () => {
  return (
    <>
      <div className="w-full max-w-xs xl:max-w-lg 2xl:max-w-2xl bg-gray-100 rounded-md hidden xl:flex items-center">
        <form className="flex-center mx-auto mt-10 w-full sm:-mt-10 sm:px-5">
          <select
            defaultValue={"all_category"}
            className="bg-transparent uppercase font-bold text-sm p-4 mr-4"
            name="search-category"
          >
            <option value="all_category">all categories</option>
            <option value="all_category">Mens</option>
            <option value="all_category">Electromics</option>
          </select>
          <input
            className="w-[65%] h-7 border-0 border-none bg-transparent font-semibold text-sm text-gray-800 pl-4"
            type="text"
            placeholder="I'm searching for ..."
          />
          <AiOutlineSearch />
        </form>
      </div>
    </>
  );
};

export default SearchHaderComponent;
