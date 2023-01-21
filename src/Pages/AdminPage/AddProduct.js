import React from 'react'
import LeftSide from './LeftSide'
import style from "./admin.module.css"
import addformStyle from "./addProduct.module.css"
function AddProduct() {
  return (
    <>
      <div className={style["main-wrapper"]} >
        <div className={style["container-wrapper"]}>

          <LeftSide />

          {/* Right Side bar */}
          <div>
            <div className={addformStyle["main-cont"]} >
              <div>
                <h2 className={addformStyle.heading}>Add Product</h2>
                <form >
                  <input type="text" placeholder='Enter title' /> <br />
                  <input type="number" placeholder='Enter price' /> <br />
                  <select className={addformStyle.sel}>
                    <option value="Select Category">Select Category</option>
                    <option value="cloth">Clothe</option>
                    <option value="mobile">Mobile</option>
                    <option value="laptop" >Laptop</option>
                    <option value="television">Television</option>
                    <option value="watch">Watch</option>
                  </select>
                  <input type="text" placeholder='Enter image url' /> <br />
                  <textarea placeholder='Write description...'></textarea>

                  <button type='submit' className={addformStyle.btnform} >Submit</button>
                </form>
              </div>

              <div className={addformStyle.preview} >
                <h2 className={addformStyle.heading}>Preview</h2>
                <h3>Title : <span> Something.......</span> </h3>
                <h3>Price : <span> Something.......</span> </h3>
                <h3>Category: <span> Something.......</span> </h3>
                <h3> 
                  <img src="https://cdn1.smartprix.com/rx-iGNlyOFEo-w1200-h1200/GNlyOFEo.jpg" alt="product mg"/>
                </h3>
                <h3>Description: <br /> <span> Something.......</span> </h3>
           
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default AddProduct
