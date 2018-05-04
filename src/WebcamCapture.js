import React, { Component } from 'react';
import Webcam from 'react-webcam';


class WebcamCapture extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      images: [],
      interval: null,
      num: 0
    }
  }

  componentDidMount() {
    const interval = setInterval(()=> {
      return this.startPictures()
    }, 2000);
    this.setState({ interval })
  }

  startPictures = () => {
    if (!this.webcam) {
      return;
    }
    if (this.state.num >= 5) {
      clearInterval(this.state.interval)
      return;
    }
    const imageSrc = this.webcam.getScreenshot();
    this.setState({
      images: this.state.images.concat(imageSrc),
      num: this.state.num + 1
     })
  }

  setRef = webcam => {
    this.webcam = webcam;
  }

  render() {
    return (
      <div>
        <Webcam
          audio={false}
          height={350}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          width={350}
        />
      </div>
    );
  }
}

export default WebcamCapture;