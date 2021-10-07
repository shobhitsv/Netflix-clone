import React from "react";
import Row from "../components/Row/Row";
import api from "../api/api";
import Banner from "../components/Banner/Banner";


const NetFlixShow = () => {
  return (
    <div>
        <Banner />
      <Row
        title="NETFLIX TRENDING"
        fetchUrl={api.fetchTrending}
        isLargeRow
      />
      
    </div>
  );
};

export default NetFlixShow;
