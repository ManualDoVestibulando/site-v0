import React from 'react';
import Select, {components} from 'react-select';
import { useRouter } from 'next/router';
import Link from 'next/link';

const formatGroupLabel = (data) => (
  <div>
    <span>{data.label}</span>
  </div>
);

const Option = props => {
  return (
    // TODO: Add href in components
    // <Link href="/[instituto]/[curso]/fuvest" as={props.data.href} passHref>
      <components.Option {...props} />
    // </Link>
  );
};

const Search = ({
  options,
  placeholder,
}: {
  options: any;
  placeholder?: string;
}) => {
  const router = useRouter();
  const handleChange = ({ value, lable }) => {
    router.push(value + '/fuvest');
  };
  return (
    <Select
      placeholder={placeholder}
      options={options}
      components={{ Option }}
      formatGroupLabel={formatGroupLabel}
      onChange={handleChange}
    />
  );
};

export default Search;
