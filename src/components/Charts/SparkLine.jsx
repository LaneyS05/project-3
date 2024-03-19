import React from 'react'
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts'

const Sparkline = ({ id, height, width, color, data, type, currentColor }) => {
    return (
        <SparklineComponent
            id={id}
            height={height}
            width={width}
            lineWidth={1}
            valuType='numeric'
            fill={color}
            border={{ color: currentColor, width: 2 }}
            dataSource={data}
            xName='x'
            yName='yval'
            type={type}
            //for when you hover over the line you see data
            tooltipSettings={{
                visible: true,
                format: '${x} : data ${y}',
                trackLineSettings: {
                    visible: true
                }
            }}
        >
            <Inject services={[SparklineTooltip]} />

        </SparklineComponent>
    )
}

export default Sparkline