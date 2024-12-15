import { Archive, ArchiveRestore, FilePenLine, Trash2 } from 'lucide-react'
import React from 'react'
import LoadMore from '../partials/LoadMore'
import Pills from '../partials/Pills'
import { setIsAdd, setIsArchive, setIsConfirm, setIsDelete, setIsRestore } from '@/components/Store/storeAction'
import { StoreContext } from '@/components/Store/storeContext'
import { menus } from '@/components/menu-data'
import useQueryData from '@/components/custom-hook/useQueryData'
import ModalRestore from '../../partials/modal/ModalRestore'
import ModalArchive from '../../partials/modal/ModalArchive'
import ModalDelete from '../../partials/modal/ModalDelete'
import SpinnerTable from '../partials/spinners/SpinnerTable'



const TshirtsTable = ({setItemEdit}) => {
     const { dispatch, store} = React.useContext(StoreContext);
     const [id, setId] = React.useState(null);
     
   let counter = 1;

   const{
    isLoading,
    isFetching,
    error,
    data:result,
    status,
  } = useQueryData(
    `/v2/tshirts`, //endpoint
    "get", //method
    "tshirts"// key
  
  );

  const handleEdit = (item) => {
     dispatch(setIsAdd(true));
     setItemEdit(item);
   };
 
   const handleDelete = (item) => {
     dispatch(setIsDelete(true));
     setId(item.tshirts_aid);
   };
 
   const handleRestore = (item) => {
     dispatch(setIsRestore(true));
     setId(item.tshirts_aid);
   };
 
   const handleArchive = (item) => {
     dispatch(setIsArchive(true));
     setId(item.tshirts_aid);
   };

 


  return (
    <>
    <div className='mt-10 bg-secondary rounded-md p-4 border border-line relative ' >
                      
                        {!isLoading || (isFetching && <SpinnerTable />)}{" "}
                      <div className="table-wrapper custom-scroll">
                        
                        <table>
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>Status</th>
                              <th className='w-[50%]'>Title</th>
                              <th>Price</th>
                              <th>Category</th>
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
                              <td><Pills/></td>
                              <td>{item.tshirts_title}</td>
                              <td>{item.tshirts_price}</td>
                              <td>{item.category_title}</td>
                              <td>
                                  <ul className='table-action  '>
                                      {item.tshirts_is_active === 1 ? (
                                   <>
                                    
                                      <li><button className='tooltip' data-tooltip="Edit" onClick={() => handleEdit(item)}><FilePenLine/></button></li>
                                      <li><button className='tooltip' data-tooltip="Archive" onClick={()=>handleArchive(item)}><Archive /></button></li>
                                  </>) :(<>
                                      <li><button className='tooltip' data-tooltip="Restore" onClick={()=>handleRestore(item)}><ArchiveRestore /></button></li>
                                      <li><button className='tooltip' data-tooltip="Delete" onClick={()=>handleDelete(item)}><Trash2 /></button></li>
                                  </>)}  
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
                    mysqlApiDelete={`/v2/tshirts/${id}`}
                    queryKey="tshirts"/>}                

                    {store.isArchive && <ModalArchive 
                    setIsArchive={setIsArchive}
                    mysqlEndpoint={`/v2/tshirts/active/${id}`}
                    queryKey="tshirts"/>}

                    {store.isRestore && <ModalRestore
                    setIsRestore={setIsRestore}
                    mysqlEndpoint={`/v2/tshirts/active/${id}`}
                    queryKey="tshirts"/>}

                    
                     </>
  )
}

export default TshirtsTable
