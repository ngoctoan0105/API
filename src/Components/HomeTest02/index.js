 import userEvent from "@testing-library/user-event"
import { useMemo } from 'react';
import './style1.css'

const HomeTest02 = ({ submit, onChange,Create,formData }) => {
    const disabled = useMemo( () => {
        return formData.ten === '' || formData.email === ''|| formData.createdAt === ''
    },[formData])
    return (
        <div >
            <button type="button" onClick={Create} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">NHập thông tin</button>


            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Nhập thông tin</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Name address</label>
                        <input type="text"  name="ten" value={formData.ten} id="exampleInputEmail1" className="form-control" onChange={onChange} aria-describedby="name" />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleModalLabel" className="form-label">Email address</label>
                        <input type="email" name="email" value={formData.email} id="exampleModalLabel" onChange={onChange} className="form-control" aria-describedby="emailHelp" />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="text" name="matkhau" value={formData.createdAt} id="exampleInputPassword1" onChange={onChange} className="form-control" />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" id="exampleCheck1" className="form-check-input" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                   
                        </div>
                        <div className="modal-footer">
                          
                            <button type="submit" disabled={disabled} onClick={submit}  className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>







        </div>
    )
}

export default HomeTest02;