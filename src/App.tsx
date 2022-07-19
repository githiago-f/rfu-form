import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

import { FileList } from './components/FileList';
import { Filter } from './components/Filter';

const App = () => {
  const files = [
    {
      createdAt: new Date(),
      mimeType: 'image/png',
      path: 'public/Assets',
      title: 'uuid-unico-do-arquivo.jpg',
    },
    {
      createdAt: new Date(),
      mimeType: 'image/png',
      path: 'public/Photos/users/user-id',
      title: 'uuid-unico-do-arquivo.jpg',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      mimeType: 'image/png',
      path: 'Public/Assets',
      title: 'uuid-unico-do-arquivo.jpg',
    },
  ];
  return (
    <div className="app">
      <Filter onChange={console.log} />
      <FileList files={files} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
