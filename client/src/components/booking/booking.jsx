import React, { useState } from "react";
import "./bookingStyles.css";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  customerName: "",
  customerEmail: "",
  phoneNumber: "",
  serviceID: "",
  desc: "",
  Date: "",
  Time: "",
};

const booking = () => {
  const [state, setState] = useState(initialState);
  const [select, setSelect] = useState({});
  const { serviceID } = useParams();

  const { customerName, customerEmail, phoneNumber, desc, Date, Time } = state;

  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!customerName || !customerEmail || !phoneNumber || !Date || !Time) {
      toast.error("input");
    } else {
      axios
        .post("http://localhost:5000/api/booking/v1", {
          customerName,
          customerEmail,
          phoneNumber,
          serviceID,
          desc,
          Date,
          Time,
        })
        .then(() => {
          setState({
            customerName: "",
            customerEmail: "",
            phoneNumber: "",
            serviceID: "",
            desc: "",
            Date: "",
            Time: "",
          });
        })
        .catch((err) => toast.error(err.response.data));
      setTimeout(() => history("/success"), 500);
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  //   useEffect(() => {
  //     axios
  //       .get(`http://localhost:5000/api/service/v1/${serviceID}`)
  //       .then((resp) => setSelect({ ...resp.data[0] }));
  //   }, [serviceID]);
  return (
    <div>
      <div className="hero">
        <div className="container">
          <div className="content">
            <div className="col-2">
              <div className="form-layout">
                <div className="form-container">
                  <div className="form-footer">
                    <p>
                      <span className="primary-color">RESERVATION</span>
                    </p>
                    {/* <div class="main-container">
                      <div class="cards">
                        <div class="card card-1">
                          <strong>
                            From : <span>{select.From}</span>
                          </strong>
                          <strong>
                            To : <span>{select.To}</span>
                          </strong>
                          <strong>
                            CAR TYPE : <span>{select.carName}</span>
                          </strong>
                          <strong>
                            CAR TYPE : <span>{select.carSeat}</span>
                          </strong>
                          <strong>
                            CAR TYPE : <span>{select.serviceCharge}</span>
                          </strong>
                        </div>
                      </div>
                    </div> */}
                  </div>
                  <form onSubmit={handleSubmit}>
                    <input
                      type="text"
                      id="customerName"
                      name="customerName"
                      placeholder="Name"
                      value={customerName}
                      onChange={handleInputChange}
                    />
                    <input
                      type="email"
                      id="customerEmail"
                      name="customerEmail"
                      placeholder="Email"
                      value={customerEmail}
                      onChange={handleInputChange}
                    />
                    <input
                      type="text"
                      id="phoneNumber"
                      name="phoneNumber"
                      placeholder="Phone"
                      value={phoneNumber}
                      onChange={handleInputChange}
                    />
                    <input
                      type="text"
                      id="serviceID"
                      name="serviceID"
                      placeholder="seviceID"
                      value={serviceID}
                      disabled="disabled"
                      onChange={handleInputChange}
                    />
                    <input
                      type="text"
                      id="desc"
                      name="desc"
                      placeholder="Your Message"
                      value={desc}
                      onChange={handleInputChange}
                    />
                    <input
                      type="date"
                      id="Date"
                      name="Date"
                      placeholder="Date"
                      value={Date}
                      onChange={handleInputChange}
                    />
                    <input
                      type="time"
                      id="Time"
                      name="Time"
                      placeholder="Time"
                      value={Time}
                      onChange={handleInputChange}
                    />
                    {/* <Link to={"/"}> */}
                    <button type="sumit" value="Save">
                      Send
                    </button>
                    {/* </Link> */}
                  </form>
                  <div className="divider">
                    <p>
                      <span>Or</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default booking;
