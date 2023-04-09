import { FunctionComponent } from "react";
import { useMatch } from "react-router-dom";

const Test: FunctionComponent = () => {
  const isExamplePath = useMatch("/todos/:id");

  return <p>{isExamplePath ? "It's todos details path" : "Not todos details path"}</p>;
};

export default Test;
