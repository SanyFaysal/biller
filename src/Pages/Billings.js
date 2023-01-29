import React from 'react';
import AddBillModal from '../components/AddBillModal';
import Header from '../components/Header';
import Pagination from '../components/Pagination';

const Billings = () => {
  return (
    <div className="overflow-x-auto mt-4 px-6">
      <div className="bg-gray-100 py-3 rounded-lg flex justify-between my-4 px-12">
        <div className="flex items-center font-semibold w-3/4">
          <h2 className="">Billing List</h2>
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered input-sm ml-28 w-1/4"
          />
        </div>
        <div className="w-1/4 flex justify-end">
          {/* <button className="btn btn-sm btn-none ">Add New Bill</button> */}
          <label htmlFor="my-modal-5" className="btn btn-sm btn-none ">
            Add New Bill
          </label>
        </div>
      </div>
      <table className="table table-compact border  rounded  w-full">
        <thead>
          <tr>
            <th>Billing Id</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>company</th>
            <th>location</th>
            <th>Last Login</th>
            <th>Favorite Color</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Littel, Schaden and Vandervort</td>
            <td>Canada</td>
            <td>12/16/2020</td>
            <td>Blue</td>
          </tr>
          <tr>
            <th>2</th>
            <td>Hart Hagerty</td>
            <td>Desktop Support Technician</td>
            <td>Zemlak, Daniel and Leannon</td>
            <td>United States</td>
            <td>12/5/2020</td>
            <td>Purple</td>
          </tr>
          <tr>
            <th>3</th>
            <td>Brice Swyre</td>
            <td>Tax Accountant</td>
            <td>Carroll Group</td>
            <td>China</td>
            <td>8/15/2020</td>
            <td>Red</td>
          </tr>
          <tr>
            <th>4</th>
            <td>Marjy Ferencz</td>
            <td>Office Assistant I</td>
            <td>Rowe-Schoen</td>
            <td>Russia</td>
            <td>3/25/2021</td>
            <td>Crimson</td>
          </tr>
          <tr>
            <th>5</th>
            <td>Yancy Tear</td>
            <td>Community Outreach Specialist</td>
            <td>Wyman-Ledner</td>
            <td>Brazil</td>
            <td>5/22/2020</td>
            <td>Indigo</td>
          </tr>
          <tr>
            <th>6</th>
            <td>Irma Vasilik</td>
            <td>Editor</td>
            <td>Wiza, Bins and Emard</td>
            <td>Venezuela</td>
            <td>12/8/2020</td>
            <td>Purple</td>
          </tr>
          <tr>
            <th>7</th>
            <td>Meghann Durtnal</td>
            <td>Staff Accountant IV</td>
            <td>Schuster-Schimmel</td>
            <td>Philippines</td>
            <td>2/17/2021</td>
            <td>Yellow</td>
          </tr>
          <tr>
            <th>8</th>
            <td>Sammy Seston</td>
            <td>Accountant I</td>
            <td>O'Hara, Welch and Keebler</td>
            <td>Indonesia</td>
            <td>5/23/2020</td>
            <td>Crimson</td>
          </tr>
          <tr>
            <th>9</th>
            <td>Lesya Tinham</td>
            <td>Safety Technician IV</td>
            <td>Turner-Kuhlman</td>
            <td>Philippines</td>
            <td>2/21/2021</td>
            <td>Maroon</td>
          </tr>

          <tr>
            <th>10</th>
            <td>Lorelei Blackstone</td>
            <td>Data Coordiator</td>
            <td>Witting, Kutch and Greenfelder</td>
            <td>Kazakhstan</td>
            <td>6/3/2020</td>
            <td>Red</td>
          </tr>
        </tbody>
      </table>
      <Pagination />

      <AddBillModal />
    </div>
  );
};

export default Billings;
