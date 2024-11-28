import { Plus } from 'lucide-react'
import React from 'react'

import SideNavigation from '../partials/SideNavigation'
import TshirtsTable from './TshirtsTable'
import { StoreContext } from '@/components/Store/storeContext'
import { setIsAdd } from '@/components/Store/storeAction'
import ModalAddTshirts from './ModalAddTshirts'
import ToastSuccess from '../partials/ToastSuccess'
import ModalError from '../partials/modals/ModalError'
import ModalValidation from '../partials/modals/ModalValidation'
import Header from '../partials/Header'
import Searchbar from '../partials/Searchbar'
import Footer from '../partials/Footer'





const Tshirts = () => {
    const { dispatch, store} = React.useContext(StoreContext);
    const [ itemEdit,setItemEdit] = React.useState(null);
    const handleAdd = () => {dispatch(setIsAdd(true));
        setItemEdit(null);
    }
  return (
    <>
      <section className='layout-main '>
        <div className=" layout-division ">
       <SideNavigation menu="Tshirts"/>
            <main className=''>
               <Header title='Tshirts' subtitle='Manage Kiosk Tshirts'/>
                <div className='p-8'> 
                    <div className='flex justify-between items-center'>
                      <Searchbar/>
                        <button className='btn btn-add' onClick={handleAdd} >
                           <Plus size={16}/> Add New 
                        </button>
                    </div>  
                    <TshirtsTable setItemEdit ={setItemEdit} />
                </div>
                <Footer/>
            </main>
        </div>
    </section>
    {store.validate && <ModalValidation/> }
    {store.error && <ModalError/>}
     {store.success && <ToastSuccess/>}
    {/* {store.isView && <SpinnerWindow/>} */}
    {store.isAdd && <ModalAddTshirts itemEdit = {itemEdit}/>}
    </>
  )
}

export default Tshirts
