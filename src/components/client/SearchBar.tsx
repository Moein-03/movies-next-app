'use client';

import { useState } from "react";
import { searchMovies } from '@/movieActions'

const SearchInput = () => {
  const [page, setPage] = useState(1);

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = new FormData(e.currentTarget).get('search') as string;
    const trimmed = input.trim();

    if (trimmed.length > 0) {
      const res = await searchMovies(trimmed, page);
    }
  }

  return (
    <div className="flex justify-center items-center h-15 py-5">
      <form onSubmit={handleSearch}>
        <input
          name="search"
          placeholder="search..."
          className="p-2 border border-gray-500 rounded"
        />
        <button type="submit" className="btn btn-soft ml-2 px-4">
          submit
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
