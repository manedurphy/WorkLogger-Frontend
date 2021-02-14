import { SvgIconTypeMap } from '@material-ui/core';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';

export interface IDrawerListItem {
    title: string;
    Icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
    redirectPath: string;
}
