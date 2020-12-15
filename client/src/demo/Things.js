import { Header } from "semantic-ui-react";
import { useState, useEffect } from "react";
import Axios from "axios";

export default () => {
  const [things, setThings] = useState([]);
  useEffect(() => {
    getThings();
  }, []);

  const getThings = async () => {
    let res = await Axios.get("/api/things");
    setThings(res.data);
  };

  return (
    <>
      <Header>Things</Header>
      {things.map((t) => (
        <div key={t.id}>{t.name}</div>
      ))}
    </>
  );
};
