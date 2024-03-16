import maruthi from '../img/maruthi.png';
import tata from '../img/tata.png';
import logo from '../img/logo.jpg';
import { useState } from 'react';
import { Link } from 'react-router-dom'
// import './App.css';

function Landing() {
  const [cardetail, setCarDetail] = useState({
    model: "",
    color: "",
    yearofmanu: "",
    insurance_valid: "",
    kms: "",
    location: "",
    noofowner: "",
    trandmission: "",
    externalfit: "",
    photo: ""
  });
  const [showform, setShowform] = useState(false)
  const [showjson, setShowJson] = useState(false)

  const handleSubmit = (event) => {
    debugger;
    event.preventDefault();
    console.log(cardetail);
    setShowJson(!showjson)
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setCarDetail(values => ({ ...values, [name]: value }))
  }


  const showDetails = () => {
    setShowform(!showform)
  }
  return (
    <>
      <div className="topnav">
        <a><img src={logo} alt="logo"></img></a>
        <a className="active" href="#home">Home</a>
        <Link to={"./CarDetail"}>
          Filter
        </Link>
        <a href="#gallery">Gallery</a>
        <a href="#contact">Contact Us</a>
      </div>

      <div style={{ paddingLeft: "16px" }}>
        <div onClick={showDetails}> <img src={maruthi}></img></div>
        <div onClick={showDetails}> <img src={tata}></img></div>
      </div>
      {showform ?
        <><div>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Model:
                <input
                  type="text"
                  name='model'
                  value={cardetail.model}
                  onChange={handleChange} />
              </label>
            </div>

            <div>
              <label>Color:
                <input
                  type="text"
                  name='color'
                  value={cardetail.color}
                  onChange={handleChange} />
              </label>
            </div>

            <div>
              <label>Year of Manufacture:
                <input
                  type="text"
                  name='yearofmanu'
                  value={cardetail.yearofmanu}
                  onChange={handleChange} />
              </label>
            </div>

            <div>
              <label>Insurance valid:
                <input
                  type="text"
                  name='insurance_valid'
                  value={cardetail.insurance_valid}
                  onChange={handleChange} />
              </label>
            </div>

            <div>
              <label>KMS:
                <input
                  type="text"
                  name='kms'
                  value={cardetail.kms}
                  onChange={handleChange} />
              </label>
            </div>

            <div>
              <label>Location:
                <input
                  type="text"
                  name='location'
                  value={cardetail.location}
                  onChange={handleChange} />
              </label>
            </div>

            <div>
              <label>NO of Owner:
                <input
                  type="text"
                  name='noofowner'
                  value={cardetail.noofowner}
                  onChange={handleChange} />
              </label>
            </div>

            <div>
              <label>Transmission:
                <input
                  type="text"
                  value={cardetail.trandmission}
                  name='trandmission'
                  onChange={handleChange} />
              </label>
            </div>

            <div>
              <label>External Fit:
                <input
                  type="text"
                  name='externalfit'
                  value={cardetail.externalfit}
                  onChange={handleChange} />
              </label>
            </div>

            <div>
              <label>Photo:
                <input
                  type="file"
                  name='photo'
                  value={cardetail.photo}
                  onChange={handleChange} />
              </label>
            </div>

            <input type="submit" />
          </form>
        </div>

          {showjson ? <div>Save Items: {JSON.stringify(cardetail)}</div> : null}</>
        : null
      }
    </>
  );
}

export default Landing;
