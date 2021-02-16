import { Action, ThunkAction } from '@reduxjs/toolkit';

export interface ConfirmButtonProps {
    action: (id: number) => ThunkAction<void, any, unknown, Action<string>>;
}
