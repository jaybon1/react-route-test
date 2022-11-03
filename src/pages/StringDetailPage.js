import React from "react";
import { useLocation, useParams } from "react-router-dom";

const StringDetailPage = () => {
  // http://localhost:3000/str/1?loc=2
  const { idx } = useParams();
  const location = useLocation();
  const loc = new URLSearchParams(location.search).get("loc");
  return (
    <>
      <div>StringDetailPage</div>
      <div>idx: {idx}</div>
      <div>loc: {loc}</div>
    </>
  );
};

export default StringDetailPage;
