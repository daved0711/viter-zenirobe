
import React from 'react'

import Searchbar from '../partials/Searchbar'


import { StoreContext } from '@/components/Store/storeContext'
import { setIsAdd } from '@/components/Store/storeAction'

import ToastSuccess from '../partials/ToastSuccess'
import ModalError from '../partials/modals/ModalError'
import ModalValidation from '../partials/modals/ModalValidation'
import Header from '../partials/Header'

import { Plus } from 'lucide-react'
import AdsTable from './CategoryTable'
import Footer from '../partials/Footer'
import SideNavigation from '../partials/SideNavigation'
import ModalAddCategory from './ModalAddCategory'




const Category = () => {
    const { dispatch, store} = React.useContext(StoreContext);
    const handleAdd = () => {dispatch(setIsAdd(true));
    }
  return (
    <>
      <section className='layout-main '>
        <div className=" layout-division ">
       <SideNavigation menu="category"/>
            <main className=''>
               <Header title='Category' subtitle='Manage Kiosk Category'/>
                <div className='p-8'> 
                    <div className='flex justify-between items-center'>
                      <Searchbar/>
                        <button className='btn btn-add' onClick={handleAdd} >
                           <Plus size={16}/> Add New 
                        </button>
                    </div>  
                    <AdsTable/>
                </div>
                <Footer/>
            </main>
        </div>
    </section>
    {store.validate && <ModalValidation/> }
    {store.error && <ModalError/>}
     {store.success && <ToastSuccess/>}
    {/* {store.isView && <SpinnerWindow/>} */}
    {store.isAdd && <ModalAddCategory/>}
    </>
  )
}

export default Category