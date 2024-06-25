import React, { FormEvent, useState } from "react";
import { Input } from "@material-tailwind/react";
import { useRouter } from "next/router";
interface PropTypes {
  setIsSearchVisible: any;
  isSearchVisible: boolean;
}

const SearchForm = ({ setIsSearchVisible, isSearchVisible }: PropTypes) => {
  const [query, setQuery] = useState<string>("");

  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setQuery("");
    setIsSearchVisible(false);
    router.push("/search?query=" + encodeURIComponent(query));
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="absolute search px-10 w-full gap-4 h-full items-center justify-start bg-white"
      style={{ zIndex: 13, display: isSearchVisible ? "flex" : "none" }}
    >
      <Input
        variant="standard"
        placeholder="Search"
        className="poppins"
        value={query}
        color="red"
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        type="button"
        className="bg-darkGold text-white px-4 py-2 rounded-full"
        onClick={() => setIsSearchVisible(!isSearchVisible)}
      >
        <i className="fa-solid text-xl fa-xmark"></i>
      </button>
    </form>
  );
};

export default SearchForm;
