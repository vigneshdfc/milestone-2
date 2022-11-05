import "./apply.css";
import React, { useContext } from "react";
import { useEffect } from "react";
import { UserContext } from "../pages/Home";
const Userform = () => {
  const initialValues = {
    user: "",
    date: "",
    phone: "",
    houseNo: "",
    city: "",
    pincode: "",
  };
  const [dataValues, setDataValues] = React.useState(initialValues);
  const [Errors, setErrors] = React.useState({});
  const [Submit, setSubmit] = React.useState(false);
  const { open } = useContext(UserContext);

  const handleApply = (e) => {
    const { name, value } = e.target;
    setDataValues({ ...dataValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(dataValues));
    setSubmit(true);
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.user) {
      errors.user = "Username is required!";
    } else if (!regex.test(values.user)) {
      errors.user = "This is not a valid format!";
    }

    if (!values.date) {
      errors.date = "date is required!";
    } else if (!regex.test(values.date)) {
      errors.date = "This is not a valid format!";
    }

    if (!values.phone) {
      errors.phone = "phone is required!";
    } else if (!regex.test(values.phone)) {
      errors.phone = "This is not a valid format!";
    }

    if (!values.houseNo) {
      errors.houseNo = "houseNo is required!";
    } else if (!regex.test(values.houseNo)) {
      errors.houseNo = "This is not a valid format!";
    }

    if (!values.city) {
      errors.city = "city is required!";
    } else if (!regex.test(values.city)) {
      errors.city = "This is not a valid format!";
    }

    if (!values.pincode) {
      errors.pincode = "pincode is required!";
    } else if (!regex.test(values.city)) {
      errors.pincode = "This is not a valid format!";
    }

    return errors;
  };

  useEffect(() => {
    if (Object.keys(Errors).length === 0 && Submit) {
      console.log(formValues);
    }
  }, [Errors]);
  console.log(open);
  if (!open) return null;

  return (
    <div className="collect" id="apply">
      {Object.keys(Errors).length === 0 && Submit && (
        <span className="success">Registered Successfully</span>
      )}
      <form onSubmit={handleSubmit} no validate>
        <div className="type">
          <p> APPOINTMENT DETAILS</p>
          <br></br>
          <br></br>
          <div className="details">
            <h4>Resident Type :</h4>
            <select name="Resident">
              <option value="none">-Please Select-</option>
              <option value="resident">Resident</option>
              <option value="non-resident">Non-Resident</option>
            </select>
          </div>
          <br></br>
          <br></br>
          <div className="details">
            <h4>Appointment Type:</h4>
            <select name="Enrollment">
              <option value="none">-Please Select-</option>
              <option value="Enrollment">Enrollment</option>
              <option value="non-Enroll">Non-Enrollment</option>
            </select>
          </div>
          <br />
          <br></br>
          <div className="details">
            <h4>Appointment Verification Type:</h4>
            <select name="Document">
              <option value="none">-Please Select-</option>
              <option value="Document">Document</option>
              <option value="HOF">HOF</option>
            </select>
          </div>
          <br />
          <br></br>
          <div className="details">
            <h4>State:</h4>
            <select name="State">
              <option value="none">-Please Select-</option>
              <option value="TmilNadu">TamilNadu</option>
              <option value="Gujarat">Gujarat</option>
              <option value="none">Kerala</option>
              <option value="Gujarat">Karnataka</option>
              <option value="none">Bangalore</option>
              <option value="Gujarat">Mumbai</option>
              <option value="none">Telugana</option>
              <option value="Gujarat">Odisha</option>
            </select>
          </div>
          <br />
          <br />
          <div className="details">
            <h4>District:</h4>
            <select name="District">
              <option value="none">-Please Select-</option>
              <option value="Chennai">Chennai</option>
              <option value="Tirunelveli">Tirunelveli</option>
              <option value="Tuticorin">Tuticorin</option>
              <option value="Madurai">Madurai</option>
              <option value="pondicherry">Pondicherry</option>
              <option value="Dindugal">Dindugal</option>
              <option value="Thanjavur">Thanjavur</option>
              <option value="Coimbatore">Coimbatore</option>
            </select>
          </div>
          <br />
          <br />
          <p>PERSONAL DETAILS</p>
          <br></br>
          <div class="details">
            <label htmlFor="user">Name:</label>
            <input
              type="text"
              name="user"
              placeholder="Enter your Name"
              value={dataValues.user}
              onChange={handleApply}
            />
            {Errors.user}
          </div>
          <br />
          <br />
          <div className="details">
            <h4>Gender:</h4>
            <select name="Gender">
              <option value="none">-Please Select-</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <br />
          <br />
          <div className="details">
            <label htmlFor="date">Date Of Birth:</label>
            <input
              type="date"
              name="date"
              value={dataValues.date}
              onChange={handleApply}
            />
            {Errors.date}
          </div>
          <br></br>
          <br></br>
          <div className="details">
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="number"
              name="phone"
              placeholder="Enter your Phone Number"
              value={dataValues.phone}
              onChange={handleApply}
            />
            {Errors.phone}
          </div>
          <br></br>
          <br></br>
          <p>ADDRESS DETAILS</p>
          <br />
          <br />
          <div className="details">
            <label htmlFor="house">House / Building No:</label>
            <input
              type="text"
              name="house"
              placeholder="Enter Your House/Building No"
              value={dataValues.houseNo}
              onChange={handleApply}
            />
            {Errors.houseNo}
          </div>
          <br></br>
          <br></br>
          <div className="city">
            <label htmlFor="city">Village / Town / City / Area:</label>
            <input
              type="text"
              name="city"
              placeholder="Enter your Village/Town/City/Area"
              value={dataValues.city}
              onChange={handleApply}
            />
            {Errors.city}
          </div>
          <br></br>
          <br></br>
          <div className="details">
            <h4>District:</h4>
            <select name="District">
              <option value="none">-Please Select-</option>
              <option value="Chennai">Chennai</option>
              <option value="Tirunelveli">Tirunelveli</option>
              <option value="Tuticorin">Tuticorin</option>
              <option value="Madurai">Madurai</option>
              <option value="pondicherry">Pondicherry</option>
              <option value="Dindugal">Dindugal</option>
              <option value="Thanjavur">Thanjavur</option>
              <option value="Coimbatore">Coimbatore</option>
            </select>
          </div>
          <br></br>
          <br></br>
          <div className="pincode">
            <label htmlFor="pincode">Pincode:</label>
            <input
              type="number"
              name="pincode"
              placeholder="Enter your Pincode"
              value={dataValues.pincode}
              onChange={handleApply}
            />
            {Errors.pincode}
          </div>
          <br></br>
          <br></br>
          <center>
            <div className="success">
              <button type="submit">Submit</button>
            </div>
          </center>
        </div>
      </form>
    </div>
  );
};

export default Userform;
