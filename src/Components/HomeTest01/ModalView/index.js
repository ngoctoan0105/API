import { useEffect, useState } from "react";
import { getUser } from "../../../apis/users";


const ModalView = ({ id }) => {
    const [data, setData] = useState({})
    
    useEffect(()=>{
        if(id){
            getUser(id).then((res)=>{
                setData(res.data)
            }).catch((error)=>{console.log(error);})
        }
    },[id])

    return (
        <div>
           
        
            <div id="modal-view-user" className="modal fade" >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">view user</h5>
                            <button type="button" className="close" data-dismiss="modal" > </button>
                        </div>
                        <div className="modal-body">
                          <div className='mb-3'>
                            name: {data.name}
                          </div>
                        </div>
                        <div className="modal-body">
                          <div className='mb-3'>
                            email: {data.email}
                          </div>
                        </div>
                        <div className="modal-body">
                          <div className='mb-3'>
                            ...: {data.createdAt}
                          </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default ModalView;  