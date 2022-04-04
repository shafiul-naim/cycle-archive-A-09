import { useEffect, useState } from "react";

const useReview = () => {
  const [cycles, setCycles] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCycles(data));
  }, []);
  return [cycles, setCycles];
};

export default useReview;