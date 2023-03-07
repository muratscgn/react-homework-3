import axios from 'axios';
import React from 'react'

function AxiosDenemeKodları() {


    axios.post('https://northwind.vercel.app/api/suppliers', newSuppliers)
        .then(res => {
            loadSuppliers();
        })


    axios.get("https://northwind.vercel.app/api/suppliers")
        .then(res => {
            setsuppliers(res.data);
            setLoading(false)
        })


    axios.delete("https://northwind.vercel.app/api/suppliers/" + id)
        .then(res => {
            loadSuppliers();
        })
    return (
        <div>AxiosDenemeKodları</div>
    )
}

export default AxiosDenemeKodları