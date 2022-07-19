import React from 'react';

import { Item } from './Item';
import { Resource } from '../../models/resource';

type Props = {
  files: Resource[];
};

export const FileList: React.FC<Props> = (props) => (
  <div className="flex-row gap-2">
    {props.files.map((i, index) => ( <Item {...i} key={index} />))}
  </div>
);
