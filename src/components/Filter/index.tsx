import React from 'react';

import search from '../../assets/icons/search.svg';

type Props = {
  onChange: (ev?: React.ChangeEvent<HTMLInputElement>) => void
};

export const Filter: React.FC<Props> = (props) => (
  <label className="flex gap-x-3">
    <div className="w-8 p-1">
      <img
        src={search}
        alt="Search"
        height={30}
        width={30}
        className="object-contain"
      />
    </div>
    <input
      type="text"
      name="filter"
      id="filter"
      placeholder="Filter by"
      className="w-full bg-white font-semibold"
      onChange={props.onChange}
    />
  </label>
);
