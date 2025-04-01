import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';

export default function LoadingSkeleton() {
  return (
    <Skeleton
      variant="rectangular"
      width="100%"
      height={200}
      animation="wave"
    />
  );
};
