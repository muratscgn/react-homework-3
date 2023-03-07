import axios from 'axios'
import React, { useEffect, useState } from 'react'

function SuppliersTable({ list, deleteSuppliers, loading }) {




    return (<>
        <table className="w3-table w3-striped w3-border">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Contact Name</th>
                    <th>City</th>
                    <th>Country</th>
                    <th>Delete</th>
                </tr>
            </thead>
            {
                loading ? <tbody>
                    <tr>
                        <td style={{ textAlign: 'center' }} colspan={5}><img src='https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif' /></td>
                    </tr>
                </tbody> :
                    <tbody>
                        {
                            list && list.map(item => {
                                return <tr>
                                    <td>{item?.id}</td>
                                    <td>{item?.contactName}</td>
                                    <td>{item?.address?.city}</td>
                                    <td>{item?.address?.country}</td>
                                    <td><td><button onClick={() => deleteSuppliers(item.id)}>Delete</button></td></td>
                                </tr>
                            })
                        }
                    </tbody>
            }

        </table>
    </>)
}

export default SuppliersTable

