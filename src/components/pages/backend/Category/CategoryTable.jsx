import React from 'react'
import IconServerError from '../partials/IconServerError'
import TableLoader from '../partials/TableLoader'
import LoadMore from '../partials/LoadMore'

import { Archive, ArchiveRestore, FilePenLine, Trash2 } from 'lucide-react'
import IconNoData from '../partials/IconNoData'
import SpinnerTable from '../partials/spinners/SpinnerTable'

import { setIsAdd, setIsArchive, setIsConfirm, setIsDelete, setIsRestore } from '@/components/Store/storeAction'
import ModalDelete from '../partials/modals/ModalDelete'
import ModalConfirm from '../partials/modals/ModalConfirm'
import { StoreContext } from '@/components/Store/storeContext'
import Pills from '../partials/Pills'
import useQueryData from '@/components/custom-hook/useQueryData'
import Status from '../../partials/Status'
import ModalArchive from '../../partials/modal/ModalArchive'
import ModalRestore from '../../partials/modal/ModalRestore'


const CategoryTable = ({setItemEdit}) => {
     const { dispatch, store} = React.useContext(StoreContext);
     const [id, setId] = React.useState(null);

   let counter = 1;
   
   const {
    isLoading,
    isFetching,
    error,
    data: result,
  } = useQueryData(
    `/v2/category`, // endpoint
    "get", // method
    "category"
  );

  const handleEdit = (item) => {
    dispatch(setIsAdd(true));
    setItemEdit(item);
  };

  const handleDelete = (item) => {
    dispatch(setIsDelete(true));
    setId(item.category_aid);
  };

  const handleRestore = (item) => {
    dispatch(setIsRestore(true));
    setId(item.category_aid);
  };

  const handleArchive = (item) => {
    dispatch(setIsArchive(true));
    setId(item.category_aid);
  };
  return (
    <>
    <div className='mt-10 bg-secondary rounded-md p-4 border border-line relative' >
    {!isLoading || (isFetching && <SpinnerTable />)}{" "}
      <div className="table-wrapper custom-scroll">
                        
<table>
  <thead>
    <tr>
    <th>#</th>
    <th>Status</th>
    <th className='w-[50%]'>Title</th>
    <th></th>
  </tr>
</thead>
<tbody>
{/* {((isLoading && !isFetching) || result?.data.length === 0) && (
      <tr>
        <td colSpan="100%">
          {isLoading ? (
            <TableLoader count={30} cols={6} />
          ) : (
            <IconNoData />
          )}
        </td>
      </tr>
    )}
 
 {error && (
      <tr>
        <td colSpan="100%">
          <IconServerError />
        </td>
      </tr>
    )} */}
 {result?.count > 0 &&
result.data.map((item, key) => (
  <tr key={key}>
    <td>{counter++}.</td>
    <td>
      {item.category_is_active === 1 ? (
        <Status text="Active" />
      ) : (
        <Status text="Inactive" />
      )}
    </td>
    <td>{item.category_title}</td>
    <td>
      <ul className="table-action ">
        {item.category_is_active === 1 ? (
          <>
            <li>
              <button
                className="tooltip"
                data-tooltip="Edit"
                onClick={() => handleEdit(item)}
              >
                <FilePenLine />
              </button>
            </li>
            <li>
              <button
                className="tooltip"
                data-tooltip="Archive"
              >
                <Archive onClick={() => handleArchive(item)} />
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <button
                className="tooltip"
                data-tooltip="Restore"
              >
                <ArchiveRestore
                  onClick={() => handleRestore(item)}
                />
              </button>
            </li>
            <li>
              <button
                className="tooltip"
                data-tooltip="Delete"
                onClick={() => handleDelete(item)}
              >
                <Trash2 />
              </button>
            </li>
          </>
        )}
      </ul>
    </td>
  </tr>
))}   
 </tbody>    
</table>    

<LoadMore/>
</div>
</div> 
                  
  {store.isDelete && <ModalDelete 
  setIsDelete={setIsDelete}
  mysqlApiDelete={`/v2/category/${id}`}
  queryKey="category"/>}
   {store.isArchive && <ModalArchive 
   setIsArchive={setIsArchive}
    mysqlEndpoint={`/v2/category/active/${id}`}
     queryKey="category"/>}
    {store.isRestore && <ModalRestore
     setIsRestore={setIsRestore}
      mysqlEndpoint={`/v2/category/active/${id}`}
      queryKey="category"/>}              
 </>
  )
}

export default CategoryTable
