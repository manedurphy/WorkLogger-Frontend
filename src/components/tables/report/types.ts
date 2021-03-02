export interface Column {
    id: 'projectNumber' | 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday';
    label: string;
    minWidth?: number;
    align?: 'left';
}
