'use client';

import { useState } from "react";
import LoadMovies from './LoadMovies'
import { getMovie, searchMovies } from '@/movieActions'

const SearchInput = () => {
  const [query, setQuery] = useState('')
  const [searching, setSearching] = useState(false)

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = new FormData(e.currentTarget).get('search') as string;
    setQuery(input.trim());
    setSearching(input.trim().length > 0);

    if (searching && query) {
      return await searchMovies(query, page)
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
