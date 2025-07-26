import React, { ReactNode } from 'react';
import './HeaderTable.css';
import { FaSearch } from 'react-icons/fa';
import SearchButton from '../search/ButtonSearch';
import { InputNumber } from 'antd';

interface Props {
  title: string;
  button?: ReactNode;
  classname?: string;
  onSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onButtonClick: () => void;
  onChangePageNumber: (value: number | null) => void;
}

const HeaderTable: React.FC<Props> = ({
  title,
  button,
  classname = '',
  onSearch,
  onButtonClick,
  onChangePageNumber
}) => {
  const [searchValue, setSearchValue] = React.useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    onSearch(event);
  };

  return (
    <div className="custom-header">
      <div className="custom-header-actions">
        <h1 className="custom-header-title ht-left">{title}</h1>
        <div className="ht-right">
          <div className="rows-per-page-label">Rows:</div>
          <InputNumber
            alt="Rows per page"
            min={5}
            max={25}
            step={5}
            controls={true}
            defaultValue={10}
            onChange={(value) => onChangePageNumber(value)}
          />
          <div className="th-search">
            <div
              className={classname}
              onClick={() =>
                onSearch({
                  target: { value: searchValue },
                } as React.ChangeEvent<HTMLInputElement>)
              }
            >
              <SearchButton onChange={handleSearchChange} />
            </div>
          </div>
          {button}
        </div>
      </div>
    </div>
  );
};

export default HeaderTable;
