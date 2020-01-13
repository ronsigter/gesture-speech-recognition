import React, {useContext} from 'react'
import {StateContext} from '../../Context'

import {XYPlot, LineSeries} from 'react-vis';


export default () => {
  const { dispatch, state } = useContext(StateContext)

  return (
    <div className="graph-container">
      <div>
        <XYPlot height={200} width={1500}>
          <LineSeries data={state.data.pinky} />
        </XYPlot>
      </div>
      <div>
        <XYPlot height={200} width={1500}>
          <LineSeries data={state.data.ring} />
        </XYPlot>
      </div>
      <div>
        <XYPlot height={200} width={1500}>
          <LineSeries data={state.data.middle} />
        </XYPlot>
      </div>
      <div>
        <XYPlot height={200} width={1500}>
          <LineSeries data={state.data.index} />
        </XYPlot>
      </div>
      <div>
        <XYPlot height={200} width={1500}>
          <LineSeries data={state.data.thumb} />
        </XYPlot>
      </div>
      <div>
        <XYPlot height={200} width={1500}>
          <LineSeries data={state.data.x} />
        </XYPlot>
      </div>
      <div>
        <XYPlot height={200} width={1500}>
          <LineSeries data={state.data.y} />
        </XYPlot>
      </div>
      <div>
        <XYPlot height={200} width={1500}>
          <LineSeries data={state.data.z} />
        </XYPlot>
      </div>
    </div>
  )
}
