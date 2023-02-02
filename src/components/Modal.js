import ModalContent from "./ModalContent";

function Modal(props){
  const {launchData } = props;
  return(
    <>
      <div className='container'>
        <h2> Launch Details </h2>
        <br />
        {launchData?.id && <div>
          <ModalContent  launchData={launchData}/>  
        </div>}
      </div>
    </>
  )
}

export default Modal;