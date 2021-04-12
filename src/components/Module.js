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
    <div className="p-4">
      <div className="bg-white shadow-md rounded-xl overflow-hidden">
        <div className="p-2 bg-blue-500 hover:bg-blue-400 border-b shadow-inner">
          <div className="py-2 text-white text-5xl text-center font-bold">{moduleData.title}</div>
        </div>
        <div className="py-2 border-b text-center">
          <div className="text-xl text-gray-500 font-thin">Lecturer</div>
          <div className="text-3xl text-black font-semibold"><span className="border-t">{moduleData.lecturer}</span></div>
        </div>
        <div className="px-4 py-2">
          <div className="text-xl text-gray-500 text-center font-thin"><span className="border-b">Module Description</span></div>
          <div className="mb-2">{moduleData.description}</div>
        </div>
      </div>
    </div>
  );
};

export default Module;
