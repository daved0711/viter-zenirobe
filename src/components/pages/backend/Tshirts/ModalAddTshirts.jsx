import React from 'react'
import ModalWrapper from '../partials/modals/ModalWrapper'
import { ImagePlusIcon, X } from 'lucide-react'
import SpinnerButton from '../partials/spinners/SpinnerButton'
import { StoreContext } from '@/components/Store/storeContext'
import { setIsAdd } from '@/components/Store/storeAction'
import { Form, Formik } from 'formik'
import *as Yup from "Yup";
import useUploadPhoto from '@/components/custom-hook/useUploadPhoto'

import { InputPhotoUpload, InputSelect, InputText } from '@/components/helpers/FormInputs'
import { imgPath } from '@/components/helpers/functions-general'


const ModalAddTshirts = ({ itemEdit }) => {

  const { dispatch} = React.useContext(StoreContext);
  const { uploadPhoto, handleChangePhoto, photo } = useUploadPhoto("");

  const handleClose = () => {dispatch(setIsAdd(false));
  
  };

  const initVal={
  menu_title: itemEdit ? itemEdit.menu_title: "",
  menu_price:  itemEdit ? itemEdit.menu_price : "",
  menu_category: itemEdit ? itemEdit.menu_category : "",
  
     
  };
  
  const yupSchema = Yup.object ({
    menu_title: Yup.string().required ("Required"),
    menu_price: Yup.string().required ("Required"),
    menu_category: Yup.string().required ("Required"),
 
 
  });

  return (
    
    <>
      <ModalWrapper>
        <div className="modal-side absolute top-0 right-0 bg-primary h-[100dvh] w-[300px] border-l border-line">
       <div className="modal-header p-4 flex justify-between items-center" >
        <h5 className='mb-0'>
            Add Tshirts
        </h5>
        <button onClick={handleClose}><X/>
        </button>
       </div>

       <Formik
        initialValues={initVal}
        validationSchema={yupSchema}
        onSubmit={async (values) => {
         
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
             name="menu_title"/>
            </div>
        <div className="input-wrap ">
            <InputText
            label="Price"
             type="text"
             name="menu_price"/>
            </div>

            <div className="input-wrap ">
               
                <InputSelect label="category" name="menu_category">
                         <option value="" hidden> Select Category</option>
                    <option value="BlackTshirt">BlackTshirt</option>
                    <option value="	WhiteTshirt">	WhiteTshirt</option>
                    <option value="	White">	White</option>
                   
                  </InputSelect>
      
            </div>
        
            <div className="input-wrap relative  group input-photo-wrap h-[150px] ">
            <label htmlFor="">Photo</label>
                {itemEdit === null ? (
                  <div className="w-full border border-line  rounded-md flex justify-center items-center flex-col h-full">
                    <ImagePlusIcon
                      size={50}
                      strokeWidth={1}
                      className="opacity-20 group-hover:opacity-50 transition-opacity"
                    />
                    <small className="opacity-20 group-hover:opacity-50 transition-opacity">
                      Upload Photo
                    </small>
                  </div>
                ) : (
                  <img
                    src={
                     itemEdit === null
                        ? URL.createObjectURL(photo) // preview
                        : imgPath + "/" + itemEdit?.menu_image // check db
                    }
                    alt="employee photo"
                    className={`group-hover:opacity-30 duration-200 relative object-cover h-full w-full  m-auto `}
                  />
                )}
                <InputPhotoUpload
                          name="photo"
                          type="file"
                          id="photo"
                          accept="image/*"
                          title="Upload photo"
                          onChange={(e) => handleChangePhoto(e)}
                          onDrop={(e) => handleChangePhoto(e)}
                          className={`opacity-0 absolute top-0 right-0 bottom-0 left-0 rounded-full  m-auto cursor-pointer w-full h-full `}
                        />
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

export default ModalAddTshirts
