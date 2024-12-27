import React from "react";
import ModalWrapper from "../partials/modals/ModalWrapper";
import { ImagePlusIcon, X } from "lucide-react";
import SpinnerButton from "../partials/spinners/SpinnerButton";
import { StoreContext } from "@/components/Store/storeContext";
import {
  setError,
  setIsAdd,
  setMessage,
  setSuccess,
} from "@/components/Store/storeAction";
import { Form, Formik } from "formik";
import * as Yup from "Yup";
import useUploadPhoto from "@/components/custom-hook/useUploadPhoto";

import {
  InputPhotoUpload,
  InputSelect,
  InputText,
} from "@/components/helpers/FormInputs";
import { imgPath } from "@/components/helpers/functions-general";
import useQueryData from "@/components/custom-hook/useQueryData";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryData } from "@/components/helpers/queryData";

const ModalAddclothess = ({ setItemEdit }) => {
  const { dispatch } = React.useContext(StoreContext);
  const { uploadPhoto, handleChangePhoto, photo } = useUploadPhoto("");
  const [value, setValue] = React.useState("");

  const handleClose = () => {
    dispatch(setIsAdd(false));
  };
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const {
    isFetching,
    error,
    data: clothes,
    status,
  } = useQueryData(
    `/v2/clothes`, //endpoint
    "get", //method
    "clothes" //key
  );

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        setItemEdit ? `/v2/clothes/${setItemEdit.clothes_aid}` : "/v2/clothes",
        setItemEdit ? "PUT" : "POST",
        values
      ),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["clothes"] });
      // show error box
      if (!data.success) {
        dispatch(setError(true));
        dispatch(setMessage(data.error));
        dispatch(setSuccess(false));
      } else {
        console.log("Success");
        dispatch(setIsAdd(false));
        dispatch(setSuccess(true));
        dispatch(setMessage("Successful!"));
      }
    },
  });

  const initVal = {
    clothes_title: setItemEdit ? setItemEdit.clothes_title : "",
    // clothes_image: setItemEdit ? setItemEdit.clothes_image : "",
    clothes_category_id: setItemEdit ? setItemEdit.clothes_category_id : "",
    clothes_price: setItemEdit ? setItemEdit.clothes_price : "",
  };

  const yupSchema = Yup.object({
    clothes_title: Yup.string().required("Required"),
    clothes_category_id: Yup.string().required("Required"),
    clothes_price: Yup.string().required("Required"),
  });

  return (
    <>
      <ModalWrapper>
        <div className="modal-side absolute top-0 right-0 bg-primary h-[100dvh] w-[300px] border-l border-line">
          <div className="modal-header p-4 flex justify-between items-center">
            <h5 className="mb-0">Add clothess</h5>
            <button onClick={handleClose}>
              <X />
            </button>
          </div>
          <Formik
            initialValues={initVal}
            validationSchema={yupSchema}
            onSubmit={async (values) => {
              mutation.mutate({
                ...values,
                clothes_image:
                  (setItemEdit?.clothes_image === "" && photo) ||
                  (!photo && "") ||
                  (photo === undefined && "") ||
                  (photo && setItemEdit?.clothes_image !== photo?.name)
                    ? photo?.name || ""
                    : setItemEdit?.clothes_image || "",
              });
              uploadPhoto();
            }}
          >
            {(props) => {
              return (
                <Form>
                  <div className="modal-form h-[calc(100vh-56px)] grid grid-rows-[1fr_auto]">
                    <div className="form-wrapper p-4 max-h-[85vh] overflow-y-auto custom-scroll">
                      <div className="input-wrap">
                        <InputText
                          label="Title"
                          type="text"
                          name="clothes_title"
                          onChange={handleChange}
                        />
                      </div>

                      <div className="input-wrap relative  group input-photo-wrap h-[150px] ">
                        <label htmlFor="">Photo</label>
                        {setItemEdit === null && photo === null ? (
                          <div className="w-full border border-line rounded-md flex justify-center items-center flex-col h-full">
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
                              photo
                                ? URL.createObjectURL(photo) // preview
                                : imgPath + "/" + setItemEdit?.clothes_image // check db
                            }
                            alt="clothes photo"
                            className={`group-hover:opacity-30 duration-200 relative object-cover h-full w-full  m-auto ${
                              mutation.isPending
                                ? "opacity-40 pointer-events-none"
                                : ""
                            }`}
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
                          className={`opacity-0 absolute top-0 right-0 bottom-0 left-0 rounded-full  m-auto cursor-pointer w-full h-full`}
                        />
                      </div>

                      <div className="input-wrap">
                        <InputSelect
                          label="clothes Category"
                          type="text"
                          name="clothes_category_id"
                          onChange={handleChange}
                        >
                          <option value="" hidden>
                            Select Category
                          </option>
                          {clothes?.data.map((item, key) => {
                            return (
                              <>
                                {item.category_is_active === 1 && (
                                  <option key={key} value={item.category_aid}>
                                    {item.category_title}
                                  </option>
                                )}
                              </>
                            );
                          })}
                        </InputSelect>
                      </div>

                      <div className="input-wrap">
                        <InputText
                          label="Price"
                          type="text"
                          name="clothes_price"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="form-action flex p-4 justify-end gap-3">
                      <button className="btn btn-accent" type="submit">
                        <SpinnerButton />
                        Save
                      </button>
                      <button
                        className="btn btn-cancel"
                        type="reset"
                        onClick={handleClose}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </ModalWrapper>
    </>
  );
};

export default ModalAddclothess;
