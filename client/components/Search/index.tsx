import React from 'react';
import Select from 'react-select';
import { useRouter } from 'next/router';

const formatGroupLabel = (data) => (
  <div>
    <span>{data.label}</span>
  </div>
);

const Search = ({ options }) => {
  const router = useRouter()
  const handleChange = ({value, lable}) => {
    router.push(value);
  }
  return (
    <Select options={options} formatGroupLabel={formatGroupLabel} onChange={handleChange}/>
  );
};

export default Search;
