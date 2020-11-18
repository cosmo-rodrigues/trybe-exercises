import React from 'react';

class DogsImage extends React.Component {
  constructor(props) {
    super(props);
    this.apiImages = this.apiImages.bind(this);
    this.state = {
      imageLink: undefined,
      loading: true,
      message: '',
    }
  }

  async apiImages() {
    this.setState({ loading: true},
      async () => {
        const results = await fetch('https://dog.ceo/api/breeds/image/random');
        const toObject = await results.json();
        this.setState({
        imageLink: [toObject.message],
        loading: false,
        message: toObject.message,
      })
    })
  }

  componentDidMount() {
    this.apiImages()
  }

  render() {
    const { imageLink, loading } = this.state;
    const loadingMessage = <h3>Loading...</h3>
    return (
      <div>
        {loading ? loadingMessage : <img src={imageLink} alt="Dog"/>}
        <br /><br />
        <button type="button" onClick={this.apiImages}>Other</button>
      </div>
    )
  }
}

export default DogsImage;