import React from 'react';

const SearchParams = () => {
  const location = "Berlin. DE";

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
        <input id="location" value={location}
            placeholder="location" />
        </label>
        <button>Submit</button>
      </form>

    </div>

  );

};