import { FunctionComponent } from 'react';

export interface NavbarProps {
  hasTitle?: boolean;
}

export const Navbar: FunctionComponent<NavbarProps> = ({ hasTitle = true }) => {
  return <div>{hasTitle}</div>;
};
