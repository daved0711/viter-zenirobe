import { Trash2, X } from 'lucide-react'
import React from 'react'
import ModalWrapper from './Modalwrapper'
import SpinnerButton from '../spinners/SpinnerButton'
import { setIsDelete } from '@/components/Store/storeAction'
import { StoreContext } from '@/components/Store/storeContext'

const ModalDelete = () => {
    const { dispatch} = React.useContext(StoreContext);

    const handleClose = () => {dispatch(setIsDelete(false));
    };

return (
    
    <>
     <ModalWrapper>
        <div className="modal-main bg-primary absolute top-1/2 left-1/2 -translate-x-1/2
        -translate-y-1/2 max-w-[400px] w-full rounded-md border border-line">
            <div className="modal-header flex gap-2 p-2  items-center border-b border-line mb-2">
                <Trash2 size={16} stroke='red' /><span className='text-alert'>Delete</span>
                <button className='ml-auto' onClick={handleClose}>
                    <X/>
                </button>
            </div>
            <div className='modal-body p-2 py-4 '>
                <p className='mb-0 text-center'> 
                    Are you sure you want to remove this movies?
                </p>
                <div className=' flex justify-end gap-3 mt-10'>
                  <button className='btn btn-alert' type='reset'><SpinnerButton/>  Delete</button>
                  <button className='btn btn-cancel'onClick={handleClose}>Cancel</button>
                </div>
            </div>
        </div>
    </ModalWrapper>
      
    </>
  )
}

export default ModalDelete
