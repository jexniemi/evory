import Label from "@/components/common/Label/Label";
import { useState, useEffect, ChangeEvent, FC } from "react";

interface SearchProps {
  apiRoute: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setSearchResult: (result: any) => void;
  label: string;
  placeholder: string;
  initialDisplayValue: string;
}

const ApiSearch: FC<SearchProps> = ({
  apiRoute,
  setSearchResult,
  label,
  placeholder,
  initialDisplayValue,
}) => {
  const [search, setSearch] = useState(initialDisplayValue);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [results, setResults] = useState<any[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isFirstSearch, setIsFirstSearch] = useState(true);

  useEffect(() => {
    if (search === "" || isFirstSearch) {
      setIsFirstSearch(false);
      setResults([]);
      return;
    }

    const fetchData = async () => {
      const response = await fetch(`${apiRoute}?q=${search}`);
      const data = await response.json();
      setResults(data);
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, apiRoute]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSelect = (item: any) => {
    setSearch(item.name);
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
              {item.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ApiSearch;
