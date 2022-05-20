import React from "react";
import LoadingOverlay from "react-loading-overlay";
import BeatLoader
from 'react-spinners/BeatLoader'
const Loading = ({ active, children }) => (
  <div>
    <LoadingOverlay active={active} spinner={<BeatLoader />}>
      {children}
    </LoadingOverlay>
  </div>
);

export default Loading;
