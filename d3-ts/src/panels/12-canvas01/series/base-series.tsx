import * as React from 'react'

// type MouseEventHandler = (event: React.MouseEvent<HTMLElement>) => void;

export interface IProps {
    xValue: any;
    xDomain: [number, number];
    xRange: [number, number];
    xType: string;
    xDistance: number;
    xBaseValue: any;

    yValue: any;
    yDomain: [number, number];
    yRange: [number, number];
    yType: string;
    yDistance: number;
    yBaseValue: any;

    className?: string;
    style?: React.CSSProperties;
    width: number;
    height: number;
    data: any[];
    // onValueMouseOver?: MouseEventHandler;
    // onValueMouseOut?: EventHandler;
    // onValueClick?: EventHandler;
    // onValueRightClick?: EventHandler;
    // onSeriesMouseOver?: EventHandler;
    // onSeriesMouseOut?: EventHandler;
    // onSeriesClick?: EventHandler;
    // onSeriesRightClick?: EventHandler;
    // onNearestX?: EventHandler;
    // onNearestXY?: EventHandler;
    // animation?: any;
    stack?: boolean;
    strokeDasharray?: string;
    strokeStyle?: string;
    strokeWidth?: string;
    curve?: string; // smooth
    marginLeft?: number;
    marginTop?: number;

}

export interface IDefaultProps {
    className: string;
    marginLeft: number;
    marginTop: number;
    stack: boolean;
    style: React.CSSProperties;
    strokeStyle: string;
}

export type PropsWithDefaults = IProps & IDefaultProps

class BaseSeries extends React.Component<IProps> {

    static get requireSVG() {
        return true;
    }

    public static defaultProps: IDefaultProps = {
        className: '',
        marginLeft: 0,
        marginTop: 0,
        stack: false,
        strokeStyle: 'solid',
        style: {},
    };

    // handleOnValueMouseOver = (event: ?) => {
    // }
};

export default BaseSeries;