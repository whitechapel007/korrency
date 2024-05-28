import { useState } from "react";

interface Country {
  code: string;
  name: string;
  flagUrl: string;
}

const countries: Country[] = [
  { code: "US", name: "USA", flagUrl: "https://readymadeui.com/usa_flag.webp" },
  {
    code: "GB",
    name: "England",
    flagUrl: "https://readymadeui.com/uk_flag.webp",
  },
  {
    code: "IN",
    name: "India",
    flagUrl: "https://readymadeui.com/india_flag.webp",
  },
  {
    code: "SG",
    name: "Singapore",
    flagUrl: "https://readymadeui.com/singapore_flag.webp",
  },
];

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (country: Country) => {
    setSelectedCountry(country);
    setIsOpen(false); // Close dropdown on selection
  };

  return (
    <div className="relative font-[sans-serif] w-max mx-auto">
      <button
        type="button"
        className={`px-6 py-2.5 rounded text-[#333] text-sm font-semibold border-0 border-blue-600 outline-none ${
          isOpen ? "bg-blue-50" : "bg-white"
        } flex items-center hover:bg-blue-50`}
        onClick={handleClick}
      >
        {selectedCountry ? (
          <img
            src={selectedCountry.flagUrl}
            className="w-6 mr-3"
            alt={selectedCountry.name}
          />
        ) : null}
        <span>
          {selectedCountry ? selectedCountry.name : "Select Country"}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-3 fill-[#333] inline ml-3"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
              clip-rule="evenodd"
              data-original="#000000"
            />
          </svg>
        </span>
      </button>
      {isOpen && (
        <ul className="absolute shadow-lg bg-white py-2 px-2 z-[1000] min-w-full w-max rounded-lg max-h-96 overflow-auto ">
          {countries.map((country) => (
            <li
              key={country.code}
              className="py-2.5 px-4 hover:bg-blue-50 text-black text-sm cursor-pointer"
              onClick={() => handleSelect(country)}
            >
              <div className="flex items-center">
                <img
                  src={country.flagUrl}
                  className="w-6 mr-3"
                  alt={country.name}
                />
                {country.name}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
