import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import "./AddMovie.css"

const AddMovie = ({add}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const [title, setTitle]= useState("")
  const [rate, setRate]= useState("")
  const [description, setDescription]= useState("")
  const [posterUrl, setPosterUrl]= useState("")

const handleTitle =(e)=>{
  setTitle(e.target.value)
}

const handleRate =(e)=>{
  setRate(e.target.value)
}

const handleDescription =(e)=>{
  setDescription(e.target.value)
}

const handlePosterUrl =(e)=>{
  setPosterUrl(e.target.value)
}

const handleAdd =()=>{
  let newMovie ={title,rate,description,posterUrl}
  add(newMovie)
}

  return (
    <div>
      <Button className="midb" variant="primary" onClick={handleShow}>
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add movie</Modal.Title>
        </Modal.Header>
        <p>Title</p>
        <Form.Control type="text" placeholder="title" onChange={(e)=>handleTitle(e)} value={title}  />
        <p>Rate</p>
        <Form.Control type="number" placeholder="rate" onChange={(e)=>handleRate(e)} value={rate}  />
        <p>Description</p>
        <Form.Control type="text" placeholder="description" onChange={(e)=>handleDescription(e)} value={description}  />
        <p>PosterUrl</p>
        <Form.Control type="url" placeholder="posterurl" onChange={(e)=>handlePosterUrl(e)} value={posterUrl}  />
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>handleAdd()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddMovie;
