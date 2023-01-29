import React from 'react';

const AddBillModal = () => {
  return (
    <div>
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal" id="my-modal-5">
        <div className="modal-box  w-1/2 max-w-5xl px-12 py-12  ">
          <h3 className="font-bold text-xl  mb-5">Add New Bill</h3>
          <form>
            <div className="grid lg:grid-cols-2 gap-x-10 gap-y-3 pb-5">
              <div className="flex flex-col">
                <label htmlFor="firstName" className="text-sm font-semibold ">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  className="input input-bordered input-sm py-5"
                />
              </div>
              <div className="flex flex-col ">
                <label htmlFor="firstName" className="text-sm font-semibold ">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  className="input input-bordered input-sm py-5"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="firstName" className="text-sm font-semibold ">
                  Email
                </label>
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="input input-bordered input-sm py-5"
                />
              </div>

              <div className="flex flex-col ">
                <label htmlFor="firstName" className="text-sm font-semibold ">
                  Phone Number
                </label>
                <input
                  type="text"
                  placeholder="Enter your phone number"
                  className="input input-bordered input-sm py-5"
                />
              </div>
              <div className="flex flex-col ">
                <label htmlFor="firstName" className="text-sm font-semibold ">
                  Payment Amount
                </label>
                <input
                  type="text"
                  placeholder="Enter Payment Amount"
                  className="input input-bordered input-sm py-5"
                />
              </div>
              <div className="modal-action flex justify-end items-center">
                <label
                  htmlFor="my-modal-"
                  className="py-3 h-full btn btn-sm my-auto bg-green-500 hover:border-none border-none hover:bg-green-500 px-4 mr-3"
                >
                  Add Bill
                </label>
                <label
                  htmlFor="my-modal-5"
                  className="btn h-full btn-sm bg-red-500 py-3 my-auto hover:border-none border-none hover:bg-red-500 px-4  "
                >
                  Close
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBillModal;
