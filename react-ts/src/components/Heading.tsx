import { ReactElement } from 'react';

type HeadingProp = { title: string };

const Heading = ({ title }: HeadingProp): ReactElement => {
  return <h1>{title}</h1>;
};
export default Heading;
