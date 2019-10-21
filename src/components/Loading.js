import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const Loading = ({ height = 'calc(100vh)', size = 20, color = '#00ab9f' }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        height
      }}
    >
      <CircularProgress size={size} style={{ color, margin: 0, padding: 0 }} />
    </div>
  );
};

export default Loading;
