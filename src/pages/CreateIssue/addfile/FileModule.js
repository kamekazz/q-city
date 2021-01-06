import React, { useState } from "react";
import styled from "styled-components";
import UploadForm from "./components/UploadForm";
import ImageGrid from "./components/ImageGrid";
import Modal from "./components/Modal";
import "./addFile.css";
import { Typography, Button } from "@material-ui/core";

function FileModule(props) {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <Typography
        variant="h5"
        style={{ width: "100%", textAlign: "center", marginBottom: 6 }}
      >
        Files
      </Typography>

      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      <BottomContainerEL>
        <Button
          variant="contained"
          style={{ marginRight: 6 }}
          onClick={props.handelBack}
        >
          Back
        </Button>
        <Button variant="contained" color="primary" onClick={props.handelStep}>
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
