import "./update.css";
import React from "react";
import { useEffect } from "react";
// import { Routes, Route, useNavigate } from "react-router-dom";
const Appointment = () => {
  const initialValues = {
    name: "",
    date: "",
    file: "",
    address: "",
    phoneno: "",
    iris: "",
    thumb: "",
    aadhar: "",
  };
  const [formValues, setFormValues] = React.useState(initialValues);
  const [Errors, setErrors] = React.useState({});
  const [Submit, setSubmit] = React.useState(false);
  const [file, setFile] = React.useState("");
  const [apply, setApply] = React.useState(false);
  // const navigate = useNavigate();
  // const [click, onClick] = React.useState(0);

  //  const [image, setImage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(formValues));
    setSubmit(true);
  };

  const applyform = (
    <h1
      className="applyform"
      onClick={(e) => {
        e.preventDefault();
        setApply(true);
      }}
    >
      <button>APPLY NOW</button>
    </h1>
  );

  const handleFile = (e) => {
    console.log(e.target.files[0]);
    // setFile(URL.createObjectURL(e.target.files[0]));
    setFile(reader.readAsDtatURL(file));
    //reader.readAsDataURL(file);
  };
  //   if (!e.target.files.length) return;
  //   const file = e.target.files[0];
  //   const reader = new FileReader();
  //   reader.onload = () => {
  //     setImage(reader.result);
  //   };

  //   reader.readAsDataURL(file);
  // };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "name is required!";
    } else if (values.user.length < 3) {
      errors.user = "name must have more than 3 characters";
    }

    if (!values.date) {
      errors.date = "date is required!";
    } else if (!regex.test(values.date)) {
      errors.date = "This is not a valid format!";
    }

    if (!values.file) {
      errors.file = "file is required!";
    } else if (!regex.test(values.file)) {
      errors.file = "This is not a valid format!";
    }

    if (!values.address) {
      errors.address = "address is required!";
    } else if (!regex.test(values.address)) {
      errors.address = "This is not a valid format!";
    }

    if (!values.phoneno) {
      errors.phoneno = "phoneno is required!";
    } else if (!regex.test(values.phoneno)) {
      errors.phoneno = "This is not a valid format!";
    }

    if (!values.iris) {
      errors.iris = "iris is required!";
    } else if (!regex.test(values.iris)) {
      errors.iris = "This is not a valid format!";
    }

    if (!values.thumb) {
      errors.thumb = "thumb is required!";
    } else if (!regex.test(values.thumb)) {
      errors.thumb = "This is not a valid format!";
    }

    if (!values.aadhar) {
      errors.aadhar = "aadhar is required!";
    } else if (!regex.test(values.aadhar)) {
      errors.aadhar = "This is not a valid format!";
    }

    return errors;
  };

  useEffect(() => {
    if (Object.keys(Errors).length === 0 && Submit) {
      console.log(formValues);
    }
  }, [Errors]);

  return (
    <div
      className="App"
      /* style={{
        backgroundImage: `linear-gradient(rgb(0,0,0,0.75),rgba(0,0,0,0.75)),
    url(${backrground})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100%",
      }}*/
    >
      {Object.keys(Errors).length === 0 && Submit && (
        <span className="success">Registered Successfully</span>
      )}
      <form onSubmit={handleSubmit} no Validate>
        <div className="book">
          <p> BOOK AN APPOINTMENT</p>
          <br></br>
          <div className="click">
            <div>
              <button
                className="applyform"
                onClick={() => {
                  apply.setApply ? "true" : "false";
                }}
              >
                <a href="#apply">APPLY NOW</a>
              </button>
              {/* <a href="#apply">apply now</a> */}
              {/* <button onclick={navigateapply}>APPLY NOW</button> */}
            </div>
            <div>
              {" "}
              <button>UPDATE YOUR AADHAR</button>
            </div>
          </div>
          <br></br>
          <p>UPDATE DEMOGRAPHIC</p>
          <br></br>
          <div className="inputs">
            <label for="username">Name:</label>
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              value={formValues.name}
              onChange={handleChange}
            />
            {Errors.name}
          </div>
          <br />
          <br />
          <div className="inputs">
            <label for="date">Date Of Birth:</label>
            <input
              type="date"
              name="date"
              value={formValues.date}
              onChange={handleChange}
            />
            {Errors.date}
          </div>
          <br />
          <br />

          <div className="inputs">
            <label for="file">Choose The File To Upload:</label>
            <input
              type="file"
              name="file"
              value={formValues.file}
              onChange={handleChange}
            />
            {handleFile}
            <br></br>
            <img src={file} width="100px" height="100px" />
            {Errors.file}
          </div>
          <br />
          <br />
          <div className="inputs">
            <label for="address">Address:</label>
            <input
              type="text"
              name="address"
              placeholder="Enter Address"
              value={formValues.address}
              onChange={handleChange}
            />
            {Errors.address}
          </div>
          <br />
          <br />
          <div className="inputs">
            <label for="phone number">Phone Number:</label>
            <input
              type="number"
              name="phoneno"
              placeholder="Enter Phone Number"
              value={formValues.phoneno}
              onChange={handleChange}
            />
            {Errors.phoneno}
          </div>
          <br />
          <br />
          <p>BIOMETRIC UPDATE</p>
          <br></br>
          <div class="inputs">
            <label for="iris">Iris:</label>
            <input
              type="text"
              name="iris"
              placeholder="Enter Iris"
              value={formValues.iris}
              onChange={handleChange}
            />
            {Errors.iris}
          </div>
          <br />
          <br />
          <div className="inputs">
            <label for="thumb">Thumb:</label>
            <input
              type="text"
              name="thumb"
              placeholder="Enter Thumb"
              value={formValues.thumb}
              onChange={handleChange}
            />
            {Errors.thumb}
          </div>
          <br />
          <br />
          <p>ABOUT YOUR AADHAR</p>
          <br />
          <br />
          <div className="inputs">
            <label for="aadhar">Enter Your Aadhar No:</label>
            <input
              type="number"
              name="aadhar"
              placeholder="Enter Your Aadhar Number"
              value={formValues.aadhar}
              onChange={handleChange}
            />
            {Errors.aadhar}
          </div>
          <br></br>
          <br></br>
          <div className="close">
            <div>
              <button type="submit">Submit</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

// return (
//   <React.Fragment>
//     <Customer />
//   </React.Fragment>
// );

export default Appointment;
