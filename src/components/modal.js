import Button from "./Button";
import ReactDOM from "react-dom";

function Modal({close,children}){
    return ReactDOM.createPortal(<div className="fixed inset-0 bg-gray-300 opacity-80 ">
    <div className={"fixed inset-40 p-10 p-10 bg-white"}>
    
    {children}
    </div>
    </div>
    ,

    document.querySelector(".modals-receiver")
    );
}

export default Modal;

