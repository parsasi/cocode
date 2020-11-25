import React , {useState} from 'react'
import Modal from 'react-modal'
import './BookModal.css'

export default function BookModal(props){


    const style = {
        position: 'absolute',
        width: 400,
        backgroundColor: '#ffffff',
        border: '2px solid #000',
      }

    const handleClose = (e) => {
        e.preventDefault()
        props.setOpen(false)
    }

    return (
       <>
            <Modal
                isOpen={props.open}
                onRequestClose={handleClose}
            >
                {props.children}
            </Modal>
       </>
    )
}