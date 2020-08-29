//functional components, not class-based
//remember when building APIs, USETs, with one class-based view, one could have CRUD ops spelled out

//classes are more orderly, but their is explicit syntax

import React, { Component } from 'react'
import {render} from 'react-dom'

let skiData = {
  total: 50,
  powder: 20,
  backcountry: 10,
  goal: 100
}


const getPercent = decimal => {
    return decimal * 100 + '%'
  }
const calcGoalProgress = (total, goal) => {
    return getPercent(total/goal)
  }

//class-based components you don't have to pass these props, you use {this.props} method instead
//equivalent: const SkiDayCounter = (props)

const SkiDayCounter = ({total, powder, backcountry, goal}) => { //unpacking the props
  return (
  <section>
        <div>
          <p>
            Total Days: {total} //this would typically say {props.total}
          </p>
        </div>
        <div>
          <p>
            Powder Days: {powder}
          </p>
        </div>
        <div>
          <p>
            Backcountry Days: {backcountry}
          </p>
        </div>
        <div>
          <p>
            Goal Progress: {calcGoalProgress(total, goal)}
          </p>
        </div>
        Ski Days
      </section>
  )
}


render(
  <SkiDayCounter //this is where we would have to pass it in
    total= {skiData.total}
    powder={skiData.powder}
    backcountry={skiData.backcountry}
    goal={skiData.goal}
  />, document.getElementById('root')
)
