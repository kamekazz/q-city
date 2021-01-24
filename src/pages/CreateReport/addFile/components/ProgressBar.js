import React, { useEffect } from 'react';

import { motion } from 'framer-motion';
import useStorageReport from 'api/report';

const ProgressBar = ({ file, setFile, _id }) => {
  const { progress, url } = useStorageReport(file, _id);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return (
    <motion.div
      className="progress-bar"
      initial={{ width: 0 }}
      animate={{ width: progress + '%' }}
    ></motion.div>
  );
};

export default ProgressBar;
