import { useEffect, useState } from "react";
import { getModule } from "../backendCalls/ModuleCalls";

const Module = ({ match }) => {
  const [moduleData, setModuleData] = useState({});

  useEffect(() => {
    updateData();
    // eslint-disable-next-line
  }, []);

  const updateData = async () => {
    let matchid = match.params.id;
    let data = await getModule(matchid);
    // console.log(data);
    setModuleData(data[0]);
  };

  return (
    <div>
      <div>{moduleData.id}</div>
      <div>{moduleData.title}</div>
      <div>{moduleData.lecturer}</div>
      <div>{moduleData.description}</div>
    </div>
  );
};

export default Module;
