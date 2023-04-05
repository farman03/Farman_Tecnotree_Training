import React, { Component } from 'react';

class DataFetcher extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true,
      error: null
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        this.setState({
          data: data,
          isLoading: false,
          error: null
        });
      })
      .catch(error => {
        this.setState({
          data: [],
          isLoading: false,
          error: error.message
        });
      });
  }

  render() {
    const { data, isLoading, error } = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    if (error) {
      return <p>{error}</p>;
    }

    return (
      <div className="data-list">
        {data.map(item => (
          <div key={item.id} className="data-item">
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default DataFetcher;
