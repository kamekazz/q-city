import { Typography } from '@material-ui/core';
import { useEffect } from 'react';

const PdqRequirements = (props) => {
  const { mainData, changeSection } = props;
  useEffect(() => {
    if (!mainData.container) {
      changeSection('Container Information');
    }
  }, [changeSection, mainData]);

  return (
    <Typography variant="h4" gutterBottom>
      this product does not come with a PDQ
    </Typography>
  );
};
export default PdqRequirements;
