import React from 'react';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import type { GetProps } from 'antd';
import './SearchButton.css';

type SearchProps = GetProps<typeof Input.Search>;

interface SearchButtonProps {
  classname?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1677ff',
    }}
  />
);

const onSearch: SearchProps['onSearch'] = (value, _e, info) =>
  console.log(info?.source, value);

const SearchButton: React.FC<SearchButtonProps> = ({
  onClick,
  onChange,
  classname = '',
}) => (
  <Search
    className={classname}
    placeholder="Search..."
    allowClear
    onSearch={onSearch}
    onChange={(e) => {
      console.log(e.target.value);
      if (onChange) onChange(e);
    }}
    onClick={onClick}
  />
);

export default SearchButton;
