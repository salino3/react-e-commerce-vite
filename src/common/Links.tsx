import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
 root: string;
 man: string;
};

export const Links: React.FC<Props> = (props) => {
 const {root, man} = props;
 
  return (
    <span className="boxLinks">
      <Link to={root}>
        <button>
          <b>Woman</b>
        </button>
      </Link>

      <Link to={man}>
        <button>
          <b>Man</b>
        </button>
      </Link>
    </span>
  );
}
