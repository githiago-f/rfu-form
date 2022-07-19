import React from 'react';
import { dateFormat } from '../../util/formatters/date-formatter';
import { Resource } from '../../models/resource';

type Props = Resource;

const stateString = (props: Props) => {
  const updated = 'Edited at ' + dateFormat(props.updatedAt);
  const created = 'Added at ' + dateFormat(props.createdAt);
  return props.updatedAt ? updated : created;
};

const pathFactory = (props: Props) => {
  const [app, sub] = props.path.split('/');
  return 'in ' + app + '/' + sub;
};

export const Item: React.FC<Props> = (props) => (
  <div className="flex flex-row gap-2 p-1">
    <img
      src="https://baconmockup.com/32/32"
      alt="Icon"
      className="object-contain"
    />
    <div className="flex flex-col">
      <h4 className="font-bold text-lg overflow-ellipsis">{props.title}</h4>
      <p className="text-sm text-gray-400 overflow-ellipsis">
        <span>{pathFactory(props)}</span>
        <span>&nbsp;&bull;&nbsp;</span>
        <span>{stateString(props)}</span>
      </p>
    </div>
  </div>
);
