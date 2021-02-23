import AssignmentIcon from '@material-ui/icons/Assignment';
import DataUsageIcon from '@material-ui/icons/DataUsage';
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
