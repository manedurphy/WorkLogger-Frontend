import React from 'react';
declare const DrawerComponent: React.FC<{
    setLoadingTasks: (value: React.SetStateAction<boolean>) => void;
    showCompleted: boolean;
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}>;
export default DrawerComponent;
