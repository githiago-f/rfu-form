import { ChangeEvent } from 'react';

export const useTusUpload = () => {
  const onChangeMultiFile = (ev: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(ev.target.files||[]);
  };

  return {onChangeMultiFile};
};
