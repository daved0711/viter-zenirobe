import { Archive, ArchiveRestore, FilePenLine, Trash2 } from 'lucide-react'
import React from 'react'
import LoadMore from '../partials/LoadMore'
import Pills from '../partials/Pills'



import { setIsAdd, setIsConfirm, setIsDelete } from '@/components/Store/storeAction'
import { StoreContext } from '@/components/Store/storeContext'

import ModalConfirm from '../partials/modals/ModalConfirm'
import ModalDelete from '../partials/modals/ModalDelete'
import { menus } from '@/components/menu-data'



const TshirtsTable = ({setItemEdit}) => {
     const { dispatch, store} = React.useContext(StoreContext);
    
   let counter = 1;

  const handleDelete = () => {
    dispatch(setIsDelete(true));
    }
  const handleRestore = () => {
    dispatch(setIsConfirm(true));
    }
  const handleArchive = () => {
    dispatch(setIsConfirm(true));
    }
 
  const handleEdit = (item) => {
    dispatch(setIsAdd(true));
    setItemEdit(item);
    }
  return (
    <>
    <div className='mt-10 bg-secondary rounded-md p-4 border border-line relative ' >
                        {/* <SpinnerTable/> */}
                    <div className='table-wrapper custom-scroll'>
                   
                   {/* <TableLoader count={7} cols={2}/> */}
                   
                    <table>
                    <thead>
                        <tr>
                        <th> # </th>
                        <th> Status </th>
                        <th> Title </th>
                        <th> Price </th>
                        <th> Category </th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <tr>
                            <td colSpan={100}>
                               <IconNoData/>
                            </td>    
                        </tr>
                        <tr>
                            
                             <td colSpan={100}>
                               <IconServerError/>
                            </td>
                            
                        </tr> */}
                  {menus.map ((item,key) =>(<tr  key={key}>
                            <td>{counter++}.</td>
                            <td><Pills/></td>
                            <td>{item.menu_title}</td>
                            <td>{item.menu_price}</td>
                            <td>{item.menu_category}</td>
                            
                       
                            <td>
                                <ul className='table-action  '>
                                    {true ? (
                                 <>
                                  
                                    <li><button className='tooltip' data-tooltip="Edit" onClick={() => handleEdit(item)}><FilePenLine/></button></li>
                                    <li><button className='tooltip' data-tooltip="Archive" onClick={()=>handleArchive()}><Archive /></button></li>
                                </>) :(<>
                                    <li><button className='tooltip' data-tooltip="Restore" onClick={()=>handleRestore()}><ArchiveRestore /></button></li>
                                    <li><button className='tooltip' data-tooltip="Delete" onClick={()=>handleDelete()}><Trash2 /></button></li>
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
                  
                    {store.isDelete && <ModalDelete/>}
                     {store.isConfirm && <ModalConfirm/> }
                     {store.isView && <ModalViewMovies movieInfo= {movieInfo}/> }
                    
                     </>
  )
}

export default TshirtsTable
