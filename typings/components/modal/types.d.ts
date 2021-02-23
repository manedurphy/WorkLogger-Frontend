import { Action, ThunkAction } from '@reduxjs/toolkit';
export interface ConfirmButtonProps {
    action: (id: number, data?: any) => ThunkAction<void, any, unknown, Action<string>>;
}
