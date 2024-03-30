import React from 'react'
import styled from 'styled-components'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart = styled.div`
    margin: 20px;
    padding: 20px;
    box-shadow:  0px 0px 11px -1px #d0c8c8;
-webkit-box-shadow: 0px 0px 11px -1px #d0c8c8;
-moz-box-shadow: 0px 0px 11px -1px #d0c8c8;
`
const ChartTitle = styled.h3`
    margin-bottom: 10px;
`
const Charts = ({title,data,dataKey,grid}) => {
    return (
        <Chart>
            <ChartTitle>{title}</ChartTitle>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data}>
                    <XAxis dataKey={"name"} stroke='#5550bd' />
                    <Line type='monotone' dataKey={dataKey} stroke='#5550bd'/>
                    <Tooltip/>
                    {grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray={'5 5'}/>}


                </LineChart>
            </ResponsiveContainer>

        </Chart>
    )
}

export default Charts