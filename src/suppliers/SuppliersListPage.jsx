import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import AddSuppliers from './AddSuppliers'
import SuppliersTable from './SuppliersTable'

function SuppliersListPage() {

  const [id, setid] = useState("");
  const [contactname, setcontactname] = useState("")
  const [city, setcity] = useState("")
  const [country, setcountry] = useState("")

  const [isLoading, setLoading] = useState(false);


  const add = () => {
    setLoading(true)

    let newSuppliers = {
      id: id,
      contactName: contactname,
      address: {
        city: city,
        country: country,
      }
    }

    fetch('https://northwind.vercel.app/api/suppliers', {
      method: 'POST',
      body: JSON.stringify(newSuppliers),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(res => {
        loadSuppliers();
      })
  }

  const loadSuppliers = () => {
    fetch('https://northwind.vercel.app/api/suppliers')
      .then(res => res.json())
      .then(res => {
        setsuppliers(res);
        setLoading(false)
      })
  }

  const deleteSuppliers = (id) => {
    setLoading(true)

    fetch('https://northwind.vercel.app/api/suppliers/' + id, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(res => {
        loadSuppliers();
      })
  }

  const [suppliers, setsuppliers] = useState([])

  useEffect(() => {
    loadSuppliers();
  }, [])



  return (<>
    <AddSuppliers loading={isLoading} add={add} setid={setid}
      setcontactname={setcontactname}
      setcity={setcity}
      setcountry={setcountry} />
    <SuppliersTable loading={isLoading} list={suppliers} deleteSuppliers={deleteSuppliers} />
  </>)
}

export default SuppliersListPage