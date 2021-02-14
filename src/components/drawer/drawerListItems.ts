import { Assignment as AssignmentIcon, DataUsage as DataUsageIcon } from '@material-ui/icons';
import { IDrawerListItem } from './types';

const drawerListItems: IDrawerListItem[] = [
    {
        title: 'Current tasks',
        Icon: AssignmentIcon,
        redirectPath: '/',
    },
    {
        title: 'Archive',
        Icon: DataUsageIcon,
        redirectPath: '/archive',
    },
];

export default drawerListItems;
