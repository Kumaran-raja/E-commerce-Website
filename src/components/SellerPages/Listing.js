import React from 'react'
import './Listing.css'
import menu from '../images/menu icon.png'
function Listing() {
  return (
    <div className='List_management_container'>
        <div className='list_management'>
            <h1>Listing Management</h1>
            <button className='add_new_Item'>Add New Item</button>
        </div>
        <div className='listing_category'>
            <div className='listing_category_box'>
                <p>0</p>
                <p>Active Item</p>
            </div>
            <div className='listing_category_box'>
                <p>0</p>
                <p>Blocked Item</p>
            </div>
            <div className='listing_category_box'>
                <p>0</p>
                <p>Inactive Item</p>
            </div>
            <div className='listing_category_box'>
                <p>0</p>
                <p>Archived Listing</p>
            </div>
        </div>
        <div style={{padding:"20px"}}>
            <table className='list_table'>
                <tr className='list_row'>
                    <th className='list_head'>S.No</th>
                    <th className='list_head'>Product</th>
                    <th className='list_head'>Price</th>
                    <th className='list_head'>Stock</th>
                    <th className='list_head'>Category</th>
                    <th className='list_head'>Action</th>
                    <th className='list_head'>menu</th>
                </tr>
            </table>

            <table className='list_data_table'>
                <tr className='list_row'>
                    <td className='list_data'>1</td>
                    <td className='list_data'>
                        <div className='list_item_detail_td'>
                            <img src='' className='list_item_image' alt='product Image'/>
                            <div>
                            <p style={{overflow:"hidden"}}>Name</p>
                            <p>Id</p>
                            </div>
                        </div>
                    </td>
                    <td className='list_data'>15000</td>
                    <td className='list_data'>10</td>
                    <td className='list_data'>Mobile</td>
                    <td className='list_data' ><p style={{textDecoration:"underline" ,color:"blue",cursor:"pointer"}}>Edit Item</p></td>
                    <td className='list_data' ><img style={{cursor:"pointer"}} src={menu}/></td>
                </tr>
            </table>
            
            
            
            

        </div>
    </div>
  )
}

export default Listing