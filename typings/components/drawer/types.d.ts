import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import { SvgIconTypeMap } from '@material-ui/core/SvgIcon';
export interface IDrawerListItem {
    title: string;
    Icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
    redirectPath: string;
}
