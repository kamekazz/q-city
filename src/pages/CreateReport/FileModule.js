import React, { useState } from 'react';
import styled from 'styled-components';
import UploadForm from './addFile/components/UploadForm';
import ImageGrid from './addFile/components/ImageGrid';
import Modal from './addFile/components/Modal';
import './addFile.css';
import { Typography, Button } from '@material-ui/core';
import DeleteModal from './DeleteModel';

function FileModule(props) {
  const { mainData } = props;
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App" style={{ width: '100%' }}>
      <Typography
        variant="h5"
        style={{ width: '100%', textAlign: 'center', marginBottom: 6 }}
      >
        Files
      </Typography>

      <UploadForm _id={mainData.id} />
      <ImageGrid setSelectedImg={setSelectedImg} _id={mainData.id} />
      <BottomContainerEL>
        <DeleteModal _id={mainData.id} />
        <Button
          variant="contained"
          color="primary"
          onClick={props.handelStep}
          style={{ marginBottom: '2rem' }}
        >
          Next
        </Button>
      </BottomContainerEL>
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default FileModule;
const BottomContainerEL = styled.div`
  display: flex;
  justify-content: flex-end;
`;
