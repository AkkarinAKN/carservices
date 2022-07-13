import { Link } from "react-router-dom";
import "./serviceStyles.css";
import { toast } from "react-toastify";
import axios from "axios";
import React, { useEffect, useState } from "react";

const service = () => {
  const [data, setData] = useState([]);

  const loadData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/service/v1");
      console.log(response);
      setData(response.data);
    } catch (err) {
      throw err;
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  // const deleteContact = (serviceID)=>{
  //   if(window.confirm("Are you sure")){
  //     axios.delete(`http://localhost:5000/api/service/${serviceID}`)
  //     toast.success("Contact")
  //     setTimeout(()=>loadData(),500)
  //   }
  // }
  return (
    <div className="service">
      <div className="serviceContainer">
        <p>
          <span className="primary-color">RESERVATION</span>
        </p>
        <table>
          <thead>
            <tr>
              <th>No.</th>
              {/* <th>ID</th> */}
              <th>From</th>
              <th>To</th>
              <th>Car Type</th>
              <th>Number of Seats</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr key={item.serviceID}>
                  <th scope="row">{index + 1}</th>
                  {/* <td>{item.serviceID}</td> */}
                  <td>{item.From}</td>
                  <td>{item.To}</td>
                  <td>{item.carName}</td>
                  <td>{item.carSeat}</td>
                  <td>{item.serviceCharge}</td>
                  <td className="btn">
                    {/* <Link to={`/v1/${item.serviceID}`}>
                    <button>edit</button>
                    </Link> */}

                    {/* <button onClick={()=>deleteContact(item.serviceID)}>d</button>
                     */}
                    <Link to={`/service/v1/${item.serviceID}`}>
                      <button>SELECT</button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default service;
