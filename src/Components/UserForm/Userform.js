import React, { useState, setState } from 'react';

import { database } from "../../firebase"
import { ref, push, child, update } from "firebase/database";


export default function Userform() {

    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [caddress, setCaddress] = useState(null);

    const [gender, setGender] = useState(null);
    const [address, setaddress] = useState(null);
    const [panchat, setPanchat] = useState(null);
    const [samajik, setSamajik] = useState(null);
    const [mStatus, setMstatus] = useState([]);
    const [gotra, setGotra] = useState(null);
    const [landLine, setLandline] = useState(null);
    const [mobile, setMobile] = useState(null);
    const [email, setEmail] = useState(null);
    const [education, setEducation] = useState(null);
    const [fName, setFname] = useState(null);
    const [mName, setMName] = useState(null);
    const [son, setSon] = useState(null);
    const [daughter, setDaughter] = useState(null);

    const [category, setCategory] = useState(null);
    const [shop, setShop] = useState(null);
    const [job, setJob] = useState(null);
    const [companyName, setCompantName] = useState(null);
    const [contact, setContact] = useState(null);
    const [Address, setAddress] = useState(null);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        if (id === "firstName") {
            setFirstName(value);
        }
        if (id === "lastName") {
            setLastName(value);
        }
        if (id === "fName") {
            setFname(value);
        }

        if (id === "mStatus") {
            setMstatus(value);
        }
        if (id === "gotra") {
            setGotra(value);
        }
        if (id === "email") {
            setEmail(value);
        }
        if (id === "landLine") {
            setLandline(value);
        }
        if (id === "mobile") {
            setMobile(value);
        }
        if (id === "gender") {
            setGender(value);
        }
        if (id === "caddress") {
            setCaddress(value);
        }
        if (id === "address") {
            setaddress(value);
        }
        if (id === "panchat") {
            setPanchat(value);
        }
        if (id === "samajik") {
            setSamajik(value);
        }
        if (id === "education") {
            setEducation(value);
        }

        if (id === "mName") {
            setMName(value);
        }
        if (id === "son") {
            setSon(value);
        }
        if (id === "daughter") {
            setDaughter(value);
        }

        if (id === "category") {
            setCategory(value);
        }
        if (id === "shop") {
            setShop(value);
        }
        if (id === "job") {
            setJob(value);
        }
        if (id === "companyName") {
            setCompantName(value);
        }
        if (id === "contact") {
            setContact(value);
        }
        if (id === "Address") {
            setAddress(value);
        }

    }
    const handleSubmit = () => {
        console.log(firstName, lastName,caddress, email, fName, mStatus, gotra, landLine, mobile, gender, address, panchat, samajik, mName, son, daughter, category, shop, job, companyName, contact, Address);

        let obj = {
            firstName: firstName,
            lastName: lastName,
            fName: fName,
            mStatus: mStatus,
            gotra: gotra,
            email: email,
            landLine: landLine,
            mobile: mobile,
            gender: gender,
            address: address,
            panchat: panchat,
            samajik: samajik,
            education: education,
            caddress:caddress,
            mName: mName,
            son: son,
            daughter: daughter,

            category: category,
            shop: shop,
            job: job,
            companyName: companyName,
            contact: contact,
            Address: Address,

        }
        const newPostKey = push(child(ref(database), 'posts')).key;
        const updates = {};
        updates['/' + newPostKey] = obj
        return update(ref(database), updates);

    }
    return (
        <div className="form">
            <div className="form-body">
                <div className="row g-3">
                    <h3 >Personnel Details</h3>
                    <div className="username col-md-6">
                        <label className="form__label" htmlFor="firstName">First Name </label>
                        <input className="form-control" type="text" value={firstName} onChange={(e) => handleInputChange(e)} id="firstName" placeholder="First Name" />
                    </div>
                    <div className="lastname col-md-6">
                        <label className="form__label" htmlFor="lastName">Last Name </label>
                        <input type="text" name="" id="lastName" value={lastName} className="form-control" onChange={(e) => handleInputChange(e)} placeholder="LastName" />
                    </div>
                    <div className="email col-md-6">
                        <label className="form__label" htmlFor="email">Email </label>
                        <input type="email" id="email" className="form-control" value={email} onChange={(e) => handleInputChange(e)} placeholder="Email" />
                    </div>
                    <div className="lastname col-md-6">
                        <label className="form__label" htmlFor="mStatus">Marital Status  </label>
                        <input type="text" name="" id="mStatus" value={mStatus} className="form-control" onChange={(e) => handleInputChange(e)} placeholder="Marital Status " />
                    </div>
                    <div className="lastname col-md-6">
                        <label className="form__label" htmlFor="gender">Select Gender  </label>
                        <input type="text" name="" id="gender" value={gender} className="form-control" onChange={(e) => handleInputChange(e)} placeholder="Select Gender " />
                    </div>
                    <div className="lastname col-md-6">
                        <label className="form__label" htmlFor="gender">Current Address </label>
                        <input type="text" name="" id="caddress" value={caddress} className="form-control" onChange={(e) => handleInputChange(e)} placeholder="Enter Current Address " />
                    </div>
                    <h5>If Yes then fill family details</h5>
                    <div className="lastname col-md-6">
                        <label className="form__label" htmlFor="gotra">Gotra  </label>
                        <input type="text" name="" id="gotra" value={gotra} className="form-control" onChange={(e) => handleInputChange(e)} placeholder="Enter gotra  " />
                    </div>

                    <div className="password col-md-6">
                        <label className="form__label" htmlFor="number">Select Education</label>
                        <input className="form-control" type="text" id="education" value={education} onChange={(e) => handleInputChange(e)} placeholder="Select Education" />
                    </div>
                    <div className="password col-md-6">
                        <label className="form__label" htmlFor="number">LandLine Number </label>
                        <input className="form-control" type="number" id="landLine" value={landLine} onChange={(e) => handleInputChange(e)} placeholder="LandLine" />
                    </div>

                    <div className="confirm-password col-md-6">
                        <label className="form__label" htmlFor="mobile-number">Mobile Number </label>
                        <input className="form-control" type="number" id="mobile" value={mobile} onChange={(e) => handleInputChange(e)} placeholder="Enter Mobile Number" />
                    </div>

                  
                    <div className="lastname col-md-6">
                        <label className="form__label" htmlFor="address">Enter Address  </label>
                        <input type="text" name="" id="address" value={address} className="form-control" onChange={(e) => handleInputChange(e)} placeholder="Enter Address  " />
                    </div>

                    <div className="lastname col-md-6">
                        <label className="form__label" htmlFor="Panchat">Panchat Name </label>
                        <input type="text" name="" id="panchat" value={panchat} className="form-control" onChange={(e) => handleInputChange(e)} placeholder="Enter Panchat Name " />
                    </div>
                    <div className="lastname col-md-6">
                        <label className="form__label" htmlFor="samajik">Enter Samajik  </label>
                        <input type="text" name="" id="samajik" value={samajik} className="form-control" onChange={(e) => handleInputChange(e)} placeholder="Enter Samajik Name
                      "/>
                    </div>
                    <h3>Family Details</h3>
                    <div className="username  col-md-6">
                        <label className="form__label" htmlFor="fName">Father Name </label>
                        <input className="form-control" type="text" value={fName} onChange={(e) => handleInputChange(e)} id="fName" placeholder="Father Name" />
                    </div>
                    <div className="username col-md-6">
                        <label className="form__label" htmlFor="mName">Mother Name </label>
                        <input className="form-control" type="text" value={mName} onChange={(e) => handleInputChange(e)} id="mName" placeholder="Mother Name" />
                    </div>
                    <div className="username col-md-6">
                        <label className="form__label" htmlFor="SName">Son Name </label>
                        <input className="form-control" type="text" value={son} onChange={(e) => handleInputChange(e)} id="son" placeholder="Son Name" />
                    </div>
                    <div className="username col-md-6">
                        <label className="form__label" htmlFor="DName">Daughter Name </label>
                        <input className="form-control" type="text" value={daughter} onChange={(e) => handleInputChange(e)} id="daughter" placeholder="Daughter Name" />
                    </div>


                    <h3>Business Details </h3>
                    <div className="username col-md-6">
                        <label className="form__label" htmlFor="category">Select Category </label>
                        <input className="form-control" type="text" value={category} onChange={(e) => handleInputChange(e)} id="category" placeholder="Select category" />
                    </div>
                    <div className="username col-md-6">
                        <label className="form__label" htmlFor="shop">shop Name </label>
                        <input className="form-control" type="text" value={shop} onChange={(e) => handleInputChange(e)} id="shop" placeholder="shop Name" />
                    </div>
                    <div className="username col-md-6">
                        <label className="form__label" htmlFor="job">job Name </label>
                        <input className="form-control" type="text" value={job} onChange={(e) => handleInputChange(e)} id="job" placeholder="job Name" />
                    </div>
                    <div className="username col-md-6">
                        <label className="form__label" htmlFor="companyName">Company Name </label>
                        <input className="form-control" type="text" value={companyName} onChange={(e) => handleInputChange(e)} id="companyName" placeholder="Company Name" />
                    </div>
                    <div className="username col-md-6">
                        <label className="form__label" htmlFor="contact">contact </label>
                        <input className="form-control" type="text" value={contact} onChange={(e) => handleInputChange(e)} id="contact" placeholder="contact " />
                    </div>
                    <div className="username col-md-6">
                        <label className="form__label" htmlFor="Address">Address </label>
                        <input className="form-control" type="text" value={Address} onChange={(e) => handleInputChange(e)} id="Address" placeholder="Address" />
                    </div>

                </div>
            </div>
            <div className="footer ">
                <button onClick={() => handleSubmit()} type="submit" className="btn">Submit</button>
            </div>
        </div>

    )
}
