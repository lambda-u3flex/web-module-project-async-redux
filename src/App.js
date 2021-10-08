import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getData } from "./actions";
import styled from "styled-components";
import "./App.css";

function App(props) {
  const { data, error, isFetching, getData } = props;

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
      <StyledH2>
        {data.btc.name} ({data.btc.unit}) vs. {data.usd.name} ({data.usd.unit})
      </StyledH2>
      <StyledH4>Current Value: ${data.usd.value}</StyledH4>
    </div>
  );
}

const StyledH2 = styled.h2`
  color: violet;
`;

const StyledH4 = styled.h4`
  color: purple;
`;

const mapStateToProps = (state) => {
  return {
    data: state.data,
    isFetching: state.isFetching,
    error: state.error,
  };
};

export default connect(mapStateToProps, { getData })(App);
