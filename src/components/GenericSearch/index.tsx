"use client";
import Label from "@/components/common/Label/Label";
import { useState, useEffect, ChangeEvent, FC } from "react";

interface SearchProps<T> {
  data: T[];
  displayProperty: keyof T;
  setSearchResult: (result: T) => void;
  label: string;
  placeholder: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Search: FC<SearchProps<any>> = ({
  data,
  displayProperty,
  setSearchResult,
  label,
  placeholder,
}) => {
  const [search, setSearch] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [results, setResults] = useState<any[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (search === "") {
      setResults([]);
      return;
    }

    const searchResults = data
      .filter((item) =>
        String(item[displayProperty])
          .toLowerCase()
          .includes(search.toLowerCase())
      )
      .slice(0, 10);

    setResults(searchResults);
  }, [search, data, displayProperty]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSelect = (item: any) => {
    setSearch(String(item[displayProperty]));
    setResults([]);
    setSearchResult(item);
    setIsOpen(false);
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setIsOpen(true);
  };

  return (
    <div className="relative">
      <Label text={label} />
      <input
        type="text"
        value={search}
        onChange={handleSearchChange}
        className="input input-bordered w-full"
        placeholder={placeholder}
      />
      {results.length > 0 && isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white shadow-lg">
          {results.map((item, index) => (
            <div
              key={index}
              onClick={() => handleSelect(item)}
              className="cursor-pointer p-2 hover:bg-gray-200"
            >
              {item[displayProperty]}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
