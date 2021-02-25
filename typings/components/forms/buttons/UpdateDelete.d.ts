import React from 'react';
import { Command } from '../../../redux/slices/modals/types';
interface UpdateDeleteProps {
    handleDelete: () => {
        payload: {
            id: number;
            header: string;
            command: Command;
            taskId?: number | undefined;
        };
        type: string;
    };
}
declare const UpdateDelete: React.FC<UpdateDeleteProps>;
export default UpdateDelete;
