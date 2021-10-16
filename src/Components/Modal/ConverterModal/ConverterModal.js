import React from 'react'
import Modal from 'react-modal'
import Convertor from '../../User/HomeContentUser/Convertor'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    overflow: 'inherit',
    borderRadius: '10px',
    width: '65%',
    padding: '0',
  },
  overlay: {
    zIndex:'20'
  }
}

const ConverterModal = ({ modalOpen, setModalOpen, theme }) => {
  return (
    <Modal isOpen={modalOpen} style={customStyles}>
      <Convertor
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        theme={theme}
      />
    </Modal>
  )
}

export default ConverterModal