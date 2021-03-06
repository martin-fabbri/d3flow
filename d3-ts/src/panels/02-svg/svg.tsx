import * as React from 'react';

// import {select} from "d3";

const dataset = [5, 10, 15, 20, 25];
const height = 300;
const multiplier = 10;
const width = 400;
const barWidth = 20;
const barPadding = 5;
const barFillColor = 'teal';


class SvgPanel extends React.Component {

    // public componentDidMount(): void {
    //
    //     const svg = select('#d3-container').append('svg');
    //
    //     svg
    //         .attr('width', width)
    //         .attr('height', height);
    //
    //     svg.selectAll('rect')
    //         .data(dataset)
    //         .enter()
    //         .append('rect')
    //         .attr('x', (d, i) => i * (barWidth + barPadding) )
    //         .attr('y', d => height - d  * multiplier)
    //         .attr('width', barWidth)
    //         .attr('fill', barFillColor )
    //         .attr('height', d => d * multiplier);
    // }

    public render() {
        const barChart = dataset.map((d, i) =>
            <rect
                key={i}
                x={i * (barWidth + barPadding)}
                y={height - d  * multiplier}
                width={barWidth}
                fill={barFillColor}
                height={d * multiplier}
            />
        );
        return (
            <div className="mt-4 mb-4">
                <h3>SVG Basics</h3>
                <section
                    id='d3-container'
                    className="bg-grey-light"
                    style={({height, width})}
                >
                    <svg width={width} height={height}>
                        {barChart}
                    </svg>
                </section>
            </div>
        )
    }
};

export default SvgPanel;
