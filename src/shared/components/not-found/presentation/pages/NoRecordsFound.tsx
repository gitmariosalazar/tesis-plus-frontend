import React from 'react';
import '../styles/NoRecordsNotFound.css';
import {
  BsFillInfoCircleFill,
  BsFillTriangleFill,
  BsListColumnsReverse,
} from 'react-icons/bs';
import { FaInfo } from 'react-icons/fa';

const NoRecordsFound = () => {
  return (
    <div className="no-records-found-container">
      <div className="info-records">
        <div className="icon-warning-records">
          <BsFillTriangleFill className="icon-triangle-record" />
          <div className="icon-list">
            <BsListColumnsReverse />
            <FaInfo />
          </div>
        </div>
        <div className="records-message">
          <span>
            <BsFillInfoCircleFill className="icon-info-records" />
            <p>No Records Found</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default NoRecordsFound;
