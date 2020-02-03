import React from 'react';
import { GlobalStyles } from '../styles/globalStyles';

type Props = {
  children: React.ReactNode;
};

const Theme: React.FC<Props> = ({ children }) => (
  <>
    <GlobalStyles />
    {children}
  </>
);

export default Theme;
