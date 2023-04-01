import React, { useState } from "react";
import Cards from "../Cards/Cards";
import Modal from "../Modal/Modal";
import singleDataLoad from "../../Utilities/SingleDataLoad.js";

const Main = () => {
  const [isSorting, setSorting] = useState(true);
  const [showMore, setShowmore] = useState(false);
  const [AiCardId, setAiCardId] = useState(null);

  const handleCartModal = (id) => {
    setAiCardId(id);
  };
const singleData = singleDataLoad(AiCardId);

  return (
    <div>
      <h1 className="text-center text-3xl font-bold">AI Universe Hub</h1>
      <div className="text-center mt-5">
        <button
          onClick={() => setSorting(!isSorting)}
          className="bg-purple-600 text-white font-semibold px-11 py-4"
        >
          Sort Product
        </button>
      </div>
      <Cards
        isSorting={isSorting}
        showMore={showMore}
        handleCartModal={handleCartModal}
      ></Cards>
      <div className="text-center mt-5">
        <button
          onClick={() => setShowmore(!showMore)}
          className="bg-purple-600 text-white font-semibold px-11 py-4"
        >
          {showMore ? "Less more" : "Show More"}
        </button>
      </div>
      <Modal singleData={singleData}></Modal>
    </div>
  );
};

export default Main;
