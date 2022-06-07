import { useState } from "react";
import {
  MDBInput,
  MDBBtn,
  MDBTextArea,
  MDBCol,
  MDBRow,
  MDBFile,
  MDBInputGroup,
} from "mdb-react-ui-kit";
import Avatar from 'react-avatar'

const ProfileName = () => {
    const [formValue, setFormValue] = useState({
      fname: "",
      lname: "",
      email: "",
      city: "",
      contact: "",
      address: "",
      biography: "",
      fees: 0,
    });

    const onChange = (e) => {
      setFormValue({ ...formValue, [e.target.name]: e.target.value });
    };

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };

  return (
    <MDBRow>
      <MDBCol sm={5}>
        <p className="fw-bold fs-3">Profile</p>
        <p>Votre adresse E-mail est votre identifiant sur Askoacademy.</p>
      </MDBCol>
      <MDBCol sm={7}>
        <MDBRow>
          <MDBCol sm={3}>
            <Avatar
              round
              name="Metasploit Ruby"
              size={90}
              className="text-center"
            />
          </MDBCol>
          <MDBCol>
            <MDBFile
              label="Choisissez votre image de profil"
              size="sm"
              accept="image/*"
            />
          </MDBCol>
        </MDBRow>
        <form className="" onSubmit={() => ""}>
          <MDBInput
            value={formValue.email}
            name="email"
            onChange={onChange}
            label="Email"
            className="my-4"
            disabled
          />
          <MDBInput
            value={formValue.fname}
            name="fname"
            onChange={onChange}
            required
            className="my-4"
            label="Nom"
          />
          <MDBInput
            value={formValue.lname}
            name="lname"
            onChange={onChange}
            required
            className="my-4"
            label="Prénoms"
          />
          <MDBInput
            value={formValue.contact}
            name="contact"
            onChange={onChange}
            required
            type="tel"
            className="my-4"
            label="Contact"
          />
          <MDBInput
            value={formValue.address}
            name="address"
            onChange={onChange}
            required
            className="my-4"
            label="Adresse"
          />
          <MDBInputGroup className="mb-3" textAfter="/heure">
            <input
              className="form-control"
              type="number"
              name="fees"
              onChange={onChange}
              required
              value={formValue.fees}
              placeholder="Taux horaire (FCFA)"
            />
          </MDBInputGroup>
          <MDBFile
            label="Telechargez votre CV au format pdf"
            size="lg"
            accept=".pdf"
          />
          <MDBTextArea
            value={formValue.biography}
            label="Biographie (500 caractères maxi.)"
            onChange={onChange}
            className="my-4"
            name="biography"
            maxLength={500}
            rows={4}
          />
          <MDBBtn className="tp-btn-3 mb-3" type="submit">
            Mettre à jour
          </MDBBtn>
        </form>
      </MDBCol>
    </MDBRow>
  );
};

export default ProfileName;
