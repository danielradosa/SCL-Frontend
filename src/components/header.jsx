import React, { useState, useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import { SEARCH_POSTS } from "../utils/Queries";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchPosts, { data }] = useLazyQuery(SEARCH_POSTS);

  // handle search input
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // search posts
  useEffect(() => {
    if (searchTerm.length > 0) {
      searchPosts({ variables: { searchTerm } });
    }
  }, [searchTerm, searchPosts]);

  return (
    <div className="flex w-full backdrop-blur-md fixed shadow-lg z-40 bg-black text-white font-bold">
      <div className="flex mt-4 mb-4">
        <h2 className="mr-2 text-lg leading-10">
          ARCADIA
        </h2>
      </div>
    </div>
  );
};

export { Header };
