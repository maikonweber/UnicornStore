import {useContext} from "react"

import {DataContext} from "../store/GlobalState"
import Loading from "./Loading"
import Toast from "./toast"

const Notify = () => {
    const [state, dispatch ] = useContext(DataContext)
    const { notify } = state

    return (
        <>
            {notify.loading && <Loading />}

            {notify.error && <Toast
            msg={{msg: notify.err, title: "error"}}
            handleShow={() => dispatch({type:'NOTIFY', payload: {}})}
            bgColor="bg-danger"/>}


            {notify.sucess && <Toast  msg={{msg: notify.sucess, title: "Sucess"}}
            handleShow={() => dispatch({type:'NOTIFY', payload: {}})}
            bgColor="bg-sucess"/>}
            
        </>
    )
}

export default Notify