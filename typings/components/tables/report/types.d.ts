import { Total } from '../../../redux/slices/report/types';
export interface Column {
    id: 'projectNumber' | 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday';
    label: string;
    minWidth?: number;
    align?: 'left';
}
export interface TotalProps {
    total: Total;
}
