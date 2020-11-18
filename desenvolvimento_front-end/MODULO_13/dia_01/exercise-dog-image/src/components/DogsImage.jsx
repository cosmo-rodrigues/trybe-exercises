import React from 'react';

class DogsImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: props.images,
    }
  }

  render() {
    return (
      <div>
        Seloko fiu, deu certo!
      </div>
    )
  }
}

export default DogsImage;