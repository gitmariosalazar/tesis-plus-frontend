import React from 'react';
import './Avatar.css';
import { IconType } from 'react-icons';

interface AvatarProps {
  src?: string | IconType;
  alt?: string;
  size?: number;
}

const Avatar = ({ src, alt, size }: AvatarProps) => {
  return (
    <div className="avatar" style={{ width: size, height: size }}>
      {typeof src === 'string' ? (
        <img src={src} alt={alt} style={{ width: '100%', height: '100%' }} />
      ) : src === undefined ? (
        <div
          className="avatar-placeholder"
          style={{ width: '100%', height: '100%' }}
        >
          {alt ? alt.charAt(0).toUpperCase() : '?'}
        </div>
      ) : (
        <div className="avatar-icon" style={{ width: '100%', height: '100%' }}>
          {React.createElement(src, { className: 'avatar-icon-svg' })}
        </div>
      )}
    </div>
  );
};

export default Avatar;
