import React from 'react'
import ModalWrapper from '../partials/modals/ModalWrapper'
import { ImagePlusIcon, X } from 'lucide-react'
import SpinnerButton from '../partials/spinners/SpinnerButton'
import { StoreContext } from '@/components/Store/storeContext'
import { setIsAdd } from '@/components/Store/storeAction'
import { Form, Formik } from 'formik'
import *as Yup from "Yup";
import useUploadPhoto from '@/components/custom-hook/useUploadPhoto'
import { imgPath } from '@/components/helpers/functions-general'
import { InputPhotoUpload, InputText } from '@/components/helpers/FormInputs'

const ModalAddCategory = () => {

  const { dispatch} = React.useContext(StoreContext);
  const { uploadPhoto, handleChangePhoto, photo } = useUploadPhoto("");

  const handleClose = () => {dispatch(setIsAdd(false));
  
  };

  const initVal={
    category_title: "",
  
     
  };
  
  const yupSchema = Yup.object ({
    category_title: Yup.string().required ("Required"),
 
 
  });

  return (
    
    <>
      <ModalWrapper>
        <div className="modal-side absolute top-0 right-0 bg-primary h-[100dvh] w-[300px] border-l border-line">
       <div className="modal-header p-4 flex justify-between items-center" >
        <h5 className='mb-0'>
            Add Category
        </h5>
        <button onClick={handleClose}><X/>
        </button>
       </div>

       <Formik
        initialValues={initVal}
        validationSchema={yupSchema}
        onSubmit={async (values) => {
          console.log(values)
        }}
      >
        {(props) => {
          return (
            <Form>
       <div className="modal-form h-full max-h-[calc(100vh-56px)] grid grid-rows-[1fr_auto]">
        <div className="form-wrapper p-4 max-h-[85vh] h-full overflow-y-auto custom-scroll">
        
        <div className="input-wrap ">
            <InputText
            label="Title"
             type="text"
             name="Category_title"/>
            </div>
                
            
        
       
          
      
        </div>
        <div className='form-action flex p-4 justify-end gap-3'>
            <button className='btn btn-add' type='submit'> <SpinnerButton/>save</button>
            <button className='btn btn-cancel' onClick={handleClose}>cancel</button>
        </div>
       </div>
       </Form>
          );
        }}
      </Formik>
        </div>
      </ModalWrapper>
    </>
  )
}

export default ModalAddCategory
