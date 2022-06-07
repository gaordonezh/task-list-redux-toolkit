import React from 'react';
import { Backdrop } from '@mui/material';
import Loader from './Loader';

const BackDropComponent = ({ loading, children }) => (
  <React.Fragment>
    <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={loading}>
      <Loader />
    </Backdrop>

    {children}
  </React.Fragment>
);

export default BackDropComponent;
