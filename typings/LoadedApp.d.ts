import React from 'react';
import { IAlert } from './redux/slices/alerts/types';
interface ILoadedAppProps {
    alerts: IAlert[];
}
declare const LoadedApp: React.FC<ILoadedAppProps>;
export default LoadedApp;
