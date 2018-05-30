import * as React from 'react'

import {Orientation, TitlePosition} from '../utils/axis';
import Axis, {IProps} from './axis';

interface IDefaultProps {
    attr: string;
    attrAxis: string;
    orientation: Orientation;
    position: TitlePosition;
}

const {Bottom} = Orientation;
const {Middle} = TitlePosition;

type PropsWithDefaults = IProps & IDefaultProps;

class XAxis extends React.Component<IProps> {

    public static defaultProps: IDefaultProps = {
        attr: 'x',
        attrAxis: 'y',
        orientation: Bottom,
        position: Middle
    };

    public render() {
        return (
            <Axis {...this.props as PropsWithDefaults}/>
        );
    }
}

export default XAxis;