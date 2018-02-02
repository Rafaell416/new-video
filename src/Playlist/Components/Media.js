import React, { Component } from 'react'
import './Media.css'
export default class Media extends Component {
  render () {
    const { src } = this.props
    return (
      <div className='Media'>
        <div className='Media-cover'>
          <img className='Media-image' src={src} alt='' style={styles.image}/>
          <h3 className='Media-title'>Por qué aprender React?</h3>
          <p className='Media-author' style={styles.text}>@Rafaell416</p>
        </div>
      </div>
    )
  }
}

// const styles = {
//   container: {
//     cursor: 'pointer',
//
//   },
//   text: {
//     fontSize: 20
//   },
//   image: {
//     height: 160,
//     width: 260,
//   }
// }
