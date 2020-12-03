import { faCalculator } from '@fortawesome/free-solid-svg-icons'
import React , {useState} from 'react'
import Modal from 'react-modal'
import './BookModal.css'

export default function BookModal(props){

    const centerStyle = {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }

    const style = {
            content : {
                position: 'absolute',
                width:'calc(100% - 800px)',
                backgroundColor: '#fff',
                border: '2px solid #000',
                ...centerStyle
            }
      }

    const handleClose = (e) => {
        e.preventDefault()
        props.setOpen(false)
    }

    return (
       <>
            <Modal
                style={style}
                isOpen={props.open}
                onRequestClose={handleClose}
            >
                {props.children}
            </Modal>
       </>
    )
}