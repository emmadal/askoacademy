import React, { useState } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBInput,
  MDBTextArea,
} from "mdb-react-ui-kit";

export default function ModalNotes({ centredModal, toggleShow, setCentredModal }) {
    const [note, setNote] = useState({ title: "", desc: "", date: "" });

    const handleChange = (e) => {
      setNote({ ...note, [e.target.name]: e.target.value });
    };

    const saveNote = () => {
        console.log(note);
        setNote({ title: "", desc: "", date: "" });
        setCentredModal(false)
    };

  return (
    <MDBModal tabIndex="-1" show={centredModal} setShow={setCentredModal}>
      <MDBModalDialog centered>
        <MDBModalContent>
          <MDBModalHeader>
            <MDBModalTitle>Ajouter une note</MDBModalTitle>
            <MDBBtn
              className="btn-close"
              color="none"
              onClick={toggleShow}
            ></MDBBtn>
          </MDBModalHeader>
          <MDBModalBody>
            <form onSubmit={() => ""} className="form_wrapper">
              <MDBInput
                size="lg"
                className="ctact_input form-control"
                label="Titre"
                value={note.title}
                onChange={handleChange}
                name="title"
                type="text"
                required
              />
              <MDBInput
                label="Date"
                id="form1"
                type="date"
                name="date"
                value={note.date}
                required
                onChange={handleChange}
              />
              <MDBTextArea
                className="ctact_input form-control"
                required
                label="Description"
                id="textAreaExample"
                maxLength={200}
                rows={2}
                value={note.desc}
                onChange={handleChange}
                name="desc"
              />
            </form>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="danger" onClick={toggleShow}>
              Annuler
            </MDBBtn>
            <MDBBtn type="submit" color="success" onClick={saveNote}>
              Enregistrer
            </MDBBtn>
          </MDBModalFooter>
        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>
  );
}
