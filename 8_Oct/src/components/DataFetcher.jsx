import React, { Component } from "react";

class DataFetcher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      loading: true,
    };
  }

  //called after the component is mounted
  componentDidMount() {
    console.log("component mounted");
    this.fetchData();
  }

  //called when the component updates, when props or state changes
  componentDidUpdate(prevProps) {
    if (prevProps.apiUrl !== this.props.apiUrl) {
      console.log("component updated");
      this.fetchData();
    }
  }

  componentWillUnmount() {
    console.log("component will unmount");
  }

  fetchData() {
    fetch(this.props.apiUrl)
      .then((response) => response.json())
      .then((data) => this.setState({ data, loading: false }))
      .catch((error) => console.log("Error fetching data :", error));
  }

  render() {
    console.log("render method");
    const { data, loading } = this.state;

    return (
      <>{loading ? <p>loading...</p> : <p>Data : {JSON.stringify(data)}</p>}</>
    );
  }
}

export default DataFetcher;
