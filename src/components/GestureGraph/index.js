import React, {useState, useContext, useRef, useEffect} from 'react'
import {StateContext} from '../../Context'

import {XYPlot, LineSeries, XAxis, YAxis} from 'react-vis';

export default () => {
  const { dispatch, state } = useContext(StateContext)
  const [graphSize, setGraphSize] = useState({height: 200, width: 350})
  const graphContainer = useRef(null)


  useEffect(() => {
    setGraphSize({
      width: graphContainer.current.clientWidth/2,
      height: (graphContainer.current.clientHeight-(16*4))/4
    })
  }, [])

  console.log(graphSize)
  return (
    <div className="graph" ref={graphContainer}>
      <div>
        <div className="title">Pinky</div>
        <XYPlot className="linegraph" height={graphSize.height} width={graphSize.width}>
          <LineSeries data={state.data.pinky} />
          <XAxis orientation="bottom" title="time" />
          <YAxis title="resistance"/>
        </XYPlot>
      </div>
      <div>
        <div className="title">Ring</div>
        <XYPlot className="linegraph" height={graphSize.height} width={graphSize.width}>
          <LineSeries data={state.data.ring} />
          <XAxis orientation="bottom" title="time" />
          <YAxis title="resistance"/>
        </XYPlot>
      </div>
      <div >
        <div className="title">Middle</div>
        <XYPlot className="linegraph" height={graphSize.height} width={graphSize.width}>
          <LineSeries data={state.data.middle} />
          <XAxis orientation="bottom" title="time" />
          <YAxis title="resistance"/>
        </XYPlot>
      </div>
      <div>
        <div className="title">Index</div>
        <XYPlot className="linegraph" height={graphSize.height} width={graphSize.width}>
          <LineSeries data={state.data.index} />
          <XAxis orientation="bottom" title="time" />
          <YAxis title="resistance"/>
        </XYPlot>
      </div>
      <div>
        <div className="title">thumb</div>
        <XYPlot className="linegraph" height={graphSize.height} width={graphSize.width}>
          <LineSeries data={state.data.thumb} />
          <XAxis orientation="bottom" title="time" />
          <YAxis title="resistance"/>
        </XYPlot>
      </div>
      <div>
        <div className="title">X</div>
        <XYPlot className="linegraph" height={graphSize.height} width={graphSize.width}>
          <LineSeries data={state.data.x} />
          <XAxis orientation="bottom" title="time" />
          <YAxis title="resistance"/>
        </XYPlot>
      </div>
      <div>
        <div className="title">Y</div>
        <XYPlot className="linegraph" height={graphSize.height} width={graphSize.width}>
          <LineSeries data={state.data.y} />
          <XAxis orientation="bottom" title="time" />
          <YAxis title="resistance"/>
        </XYPlot>
      </div>
      <div>
        <div className="title">Z</div>
        <XYPlot className="linegraph" height={graphSize.height} width={graphSize.width}>
          <LineSeries data={state.data.z} />
          <XAxis orientation="bottom" title="time" />
          <YAxis title="resistance"/>
        </XYPlot>
      </div>
    </div>
  )
}
