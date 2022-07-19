import React from 'react';
import { useTusUpload } from './tus-upload';

const uploadEndpoint = 'http://localhost:8080/resources/parcels';

export const UploadInput = () => {
  const { onChangeMultiFile } = useTusUpload();

  return (
    <div>
      <input
        type="file"
        name="file"
        id="file"
        className="mb-6"
        onChange={onChangeMultiFile}
      />
    </div>
  );
};
