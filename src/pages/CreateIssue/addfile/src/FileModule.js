import React, { useState } from "react";
import styled from "styled-components";
import UploadForm from "./comps/UploadForm";
import ImageGrid from "./comps/ImageGrid";
import Modal from "./comps/Modal";
import "./addFile.css";
import { Typography, Button } from "@material-ui/core";

function FileModule() {
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
        <Button variant="contained" style={{ marginRight: 6 }}>
          cancel
        </Button>
        <Button type="submit" variant="contained" color="primary">
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
