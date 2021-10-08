import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getData } from "./actions";
import "./App.css";

function App(props) {
  const { data, error, isFetching, getData } = props;
  console.log(props.data.usd);
  useEffect(() => {
    getData();
  }, []);

  if (error) {
    return <h2>We got an error: {error}</h2>;
  }

  if (isFetching) {
    return <h2>Fetching data for you!</h2>;
  }

  return (
    <div className="App">
      <h2>
        {data.btc.name} / {data.usd.name}
      </h2>
      <h3>
        ({data.btc.unit} / {data.usd.unit})
      </h3>
      <h4>${data.usd.value}</h4>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.data,
    isFetching: state.isFetching,
    error: state.error,
  };
};

export default connect(mapStateToProps, { getData })(App);
