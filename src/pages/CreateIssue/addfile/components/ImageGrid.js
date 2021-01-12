import React from 'react';
// import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';

const ImageGrid = ({ setSelectedImg, _id }) => {
  // const { images } = useFirestore(_id);
  const images = [
    {
      createdAt: 462,
      titleImage: 'main images',
      url:
        'https://firebasestorage.googleapis.com/v0/b/w-city-53c78.appspot.com/o/issue_report%2Fnewdonod.png?alt=media&token=dd4e1e6a-39a5-40fb-93ed-cffd961908c6',
    },
  ];
  console.log(images);
  return (
    <div className="img-grid">
      {images &&
        images.map((doc) => (
          <motion.div
            className="img-wrap"
            key={doc.url}
            layout
            whileHover={{ opacity: 1 }}
            s
            onClick={() => setSelectedImg(doc.url)}
          >
            <motion.img
              src={doc.url}
              alt="uploaded pic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
        ))}
    </div>
  );
};

export default ImageGrid;
