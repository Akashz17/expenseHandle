import { forwardRef } from "react"

const Modal = forwardRef ( function Modal({ref}){
    return(
        <dialog ref={ref} >
            <h2>The Values Cant be empty</h2>
            <p>Please Fill all details</p>
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>
    )
})
export default Modal;