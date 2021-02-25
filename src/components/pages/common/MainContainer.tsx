import React from 'react';
import { MainContainerProps } from '../types';

const MainContainer: React.FC<MainContainerProps> = ({ children }): JSX.Element => <main>{children}</main>;

export default MainContainer;
