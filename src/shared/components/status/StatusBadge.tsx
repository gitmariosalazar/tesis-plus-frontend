import * as React from 'react';

interface StatusProps {
  code: number;
  label: string;
}

const StatusBadge: React.FC<StatusProps> = ({ code, label }) => {
  const getColor = (code: number) => {
    if (code == 1 || code == 7) {
      return 'magenta'; // Pending
    }
    if (code == 2 || code == 8 || code == 13) {
      return 'green'; // Paid and Approved
    }
    if (code == 3 || code == 10 || code == 16) {
      return '#FF5722'; // Archived and Overdue
    }
    if (code == 4 || code == 9 || code == 15) {
      return '#9E9E9E'; // Cancelled and Rejected
    }
    if (code == 5 || code == 17) {
      return 'red'; // Expired
    }
    if (code == 12) {
      return '#49B265'; // Active
    } else if (code == 11 || code == 6 || code == 14) {
      return '#FEC603'; // Corrections
    }
  };

  return (
    <>
      <span
        style={{
          backgroundColor: `${getColor(code)}`,
          padding: '3px 15px 5px 15px',
          borderRadius: '7px',
          fontWeight: 'bold',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          fontSize: '11px',
        }}
      >
        {label}
      </span>
    </>
  );
};

export default StatusBadge;
