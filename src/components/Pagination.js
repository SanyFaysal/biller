import React from 'react';
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from 'react-icons/md';
const Pagination = () => {
  return (
    <div className="flex justify-center my-5">
      <button className="btn btn-sm">
        <MdOutlineArrowBackIosNew />
      </button>
      <button className="btn btn-sm mx-2">1</button>
      <button className="btn btn-sm  mx-2">2</button>
      <button className="btn btn-sm  mx-2">3</button>
      <button className="btn btn-sm  mx-2">4</button>
      <button className="btn btn-sm">
        <MdOutlineArrowForwardIos />
      </button>
    </div>
  );
};

export default Pagination;
