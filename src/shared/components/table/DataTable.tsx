import './CustomTable.css';
import React, { ReactNode, useState } from 'react';
import HeaderTable from './HeaderTable';
import { MdFastForward, MdPlayArrow } from 'react-icons/md';

export interface Column<T> {
  header: string;
  value: string;
  sortable?: boolean;
  render?: (value: any, row: T) => ReactNode;
}

interface CustomTableProps<T> {
  data: T[];
  columns: Column<T>[];
  rowsPerPage?: number;
  table_title: string;
  button?: ReactNode;
}

function getValueFromPath(obj: any, path: string): any {
  return path
    .replace(/\[(\d+)\]/g, '.$1')
    .split('.')
    .reduce((acc, part) => acc?.[part], obj);
}

const DataTable = <T extends object>({
  data,
  columns,
  rowsPerPage = 16,
  table_title,
  button,
}: CustomTableProps<T>) => {
  const [sortedData, setSortedData] = useState(data);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [filterText, setFilterText] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageBlock, setPageBlock] = useState(0);
  const pagesPerBlock = 6;

  const applyFilter = (items: T[]) => {
    if (!filterText) return items;
    return items.filter((row) =>
      columns.some((column) => {
        const val = getValueFromPath(row, column.value);
        return val?.toString().toLowerCase().includes(filterText.toLowerCase());
      })
    );
  };

  const filteredData = applyFilter(sortedData);
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      setPageBlock(Math.floor((page - 1) / pagesPerBlock));
    }
  };

  const sortData = (columnPath: string) => {
    const direction = sortDirection === 'asc' ? 'desc' : 'asc';
    setSortDirection(direction);
    setSortColumn(columnPath);

    const sorted = [...data].sort((a, b) => {
      const aValue = getValueFromPath(a, columnPath);
      const bValue = getValueFromPath(b, columnPath);

      if (aValue == null) return 1;
      if (bValue == null) return -1;
      if (aValue < bValue) return direction === 'asc' ? -1 : 1;
      if (aValue > bValue) return direction === 'asc' ? 1 : -1;
      return 0;
    });

    setSortedData(sorted);
    setCurrentPage(1);
    setPageBlock(0);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterText(e.target.value);
    setCurrentPage(1);
    setPageBlock(0);
  };

  const paginatedData = filteredData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );
  const startPage = pageBlock * pagesPerBlock + 1;
  const endPage = Math.min(startPage + pagesPerBlock - 1, totalPages);

  const nextPageBlock = () => {
    if (pageBlock < Math.floor((totalPages - 1) / pagesPerBlock)) {
      setPageBlock(pageBlock + 1);
      setCurrentPage(startPage + pagesPerBlock);
    }
  };

  const prevPageBlock = () => {
    if (pageBlock > 0) {
      setPageBlock(pageBlock - 1);
      setCurrentPage(startPage - pagesPerBlock);
    }
  };

  return (
    <div className="custom-table">
      <HeaderTable
        title={table_title}
        button={button}
        onSearch={handleFilterChange}
        onButtonClick={() => {}}
      />
      <div className="custom-table-header">
        {columns.map((col) => (
          <div
            key={col.value}
            className="custom-table-cell custom-table-header-cell"
            onClick={() => col.sortable && sortData(col.value)}
          >
            {col.header}
            {sortColumn === col.value &&
              (sortDirection === 'asc' ? ' 🔼' : ' 🔽')}
          </div>
        ))}
      </div>
      <div className="custom-table-body">
        {paginatedData.map((row, i) => (
          <div
            key={i}
            className={
              i % 2 === 0
                ? 'custom-table-row row-one'
                : 'custom-table-row row-two'
            }
          >
            {columns.map((col) => {
              const value = getValueFromPath(row, col.value);
              return (
                <div key={col.value} className="custom-table-cell">
                  {col.render ? col.render(value, row) : value?.toString()}
                </div>
              );
            })}
          </div>
        ))}
      </div>
      <div className="pagination-container">
        <button
          onClick={prevPageBlock}
          disabled={pageBlock === 0}
          className="btn-pagination btn-pagination-left"
        >
          <MdFastForward style={{ width: 25, height: 25 }} />
        </button>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="btn-pagination btn-pagination-left"
        >
          <MdPlayArrow style={{ width: 25, height: 25 }} />
        </button>
        {Array.from(
          { length: endPage - startPage + 1 },
          (_, idx) => startPage + idx
        ).map((pageNum) => (
          <button
            key={pageNum}
            onClick={() => handlePageChange(pageNum)}
            className={
              currentPage === pageNum
                ? 'active-page btn-current-page'
                : 'btn-current-page'
            }
          >
            {pageNum}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="btn-pagination btn-pagination-right"
        >
          <MdPlayArrow style={{ width: 25, height: 25 }} />
        </button>
        <button
          onClick={nextPageBlock}
          disabled={endPage === totalPages}
          className="btn-pagination btn-pagination-right"
        >
          <MdFastForward style={{ width: 25, height: 25 }} />
        </button>
      </div>
    </div>
  );
};

export default DataTable;
