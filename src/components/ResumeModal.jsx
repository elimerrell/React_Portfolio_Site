import React from 'react';
import {Button, Modal} from 'react-bootstrap'

const ResumeModal = (props) => {
    return(
    <Modal show={props.showModal} onHide={props.handleClose} dialogClassName="resume-modal">
        <Modal.Header closeButton>
        <Modal.Title>Resume</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            hl;ksaf;lkajsdf;lkj
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
            Close
        </Button>
        </Modal.Footer>
    </Modal>  
    )
}

export default ResumeModal; 
 