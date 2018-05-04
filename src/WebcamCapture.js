import React, { Component } from 'react';
import Webcam from 'react-webcam';
import services from './services';

class WebcamCapture extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      images: [],
      interval: null,
      num: 0,
      imageData: []
    }
  }

  componentDidMount() {
    const interval = setInterval(()=> {
      return this.startPictures()
    }, 2000);
    this.setState({ interval })
  }

  verify(imageSrc) {
    services.verify(imageSrc, '').then((res) => {
      this.setState({
        imageData: this.state.imageData.concat(res)
      })
    })
  }

  checkForWebcamPics = () => {
    if (!this.webcam) {
      return;
    }
    if (this.state.num >= 5) {
      clearInterval(this.state.interval)
      return;
    }
  }

  startPictures = () => {
    this.checkForWebcamPics()
    const imageSrc = this.webcam.getScreenshot();
    this.setState({
      images: this.state.images.concat(imageSrc),
      num: this.state.num + 1
     })
     this.verify(imageSrc)
  }

  setRef = webcam => {
    this.webcam = webcam;
  }

  render() {
    return (
      <div>
        <Webcam
          className={'webcamContainer'}
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
