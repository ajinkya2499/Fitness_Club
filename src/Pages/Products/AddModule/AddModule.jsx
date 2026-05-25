import React from 'react'
import styles from './AddProduct.module.css';
import { Handshake } from '@mui/icons-material';

function AddModule() {

    function handleSubmit(e){
            e.preventDefauld()
    }

  return (
    <div className={styles.container}>
        <h1 className={StyleSheetList.header}>Add Products</h1>

        <form className={styles.form} onSubmit={handleSubmit}>
            <input type="text" name='title' placeholder='Enter the title'/>
            <input type="number" name='price' placeholder='enter the price' />
            <input type="text" name='category' placeholder='enter the catergoty'/>
            |<input type="text" name='shortdescription' placeholder='enter the Short Description'/>
            <textarea name='decription' placeholder='Enter the short Description'/>
        </form>
      
    </div>
  )
}

export default AddModule
