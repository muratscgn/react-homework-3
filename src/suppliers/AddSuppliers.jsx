import axios from 'axios';
import React, { useState } from 'react'

function AddSuppliers({ add, setid,
    setcontactname,
    setcity,
    setcountry }) {

    return (<>
        <div className="w3-container">
            <div>
                <label>Id:</label>
                <input className="w3-input" type="text" onChange={(e) => setid(e.target.value)} />
            </div>
            <div>
                <label>Contact Name:</label>
                <input className="w3-input" type="text" onChange={(e) => setcontactname(e.target.value)} />
            </div>
            <div>
                <label>City:</label>
                <input className="w3-input" type="text" onChange={(e) => setcity(e.target.value)} />
            </div>
            <div>
                <label>Country:</label>
                <input className="w3-input" type="text" onChange={(e) => setcountry(e.target.value)} />
            </div>
            <div>
                <button style={{ marginBottom: "10px", marginTop: "10px" }} onClick={add}>Add Suppliers</button>
            </div>
        </div>
    </>)
}

export default AddSuppliers