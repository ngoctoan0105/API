
const HomeTest03 = ({resultList,onview,onEdit,onDelete}) => {

    return (
        <div>
            {
                resultList.map((fd) => {
                    return (<div>
                        
                        <div key={fd.id} className='ftt'>

                            <div > {fd.name}</div>
                            <div > {fd.email}</div>
                            <div > {fd.createdAt}</div>
                            <div className='button-form'>
                                <button onClick={() => { onview(fd.id) }} >Onview</button>
                                <button onClick={() => { onEdit(fd) }}>edit</button>
                                <button onClick={() => { onDelete(fd.id) }} >Delete</button>
                            </div>
                        </div>
                    </div>)
                })
            }

        </div>
    )
}
export default HomeTest03;  