import { Assignment as AssignmentIcon, DataUsage as DataUsageIcon } from '@material-ui/icons';
import { IDrawerListItem } from './types';

const drawerListItems: IDrawerListItem[] = [
    {
        title: 'Current tasks',
        Icon: AssignmentIcon,
    },
    {
        title: 'Archive',
        Icon: DataUsageIcon,
    },
];

export default drawerListItems;
