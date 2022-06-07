import { memo, useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBTable
} from "mdb-react-ui-kit";
import {
  DatatableWrapper,
  Filter,
  Pagination,
  PaginationOptions,
  TableBody,
  TableHeader,
} from "react-bs-datatable";
import Calendar from "react-calendar";
import Avatar from 'react-avatar'

import InstructorLayout from "../components/InstructorLayout";
import ModalNotes from "../components/ModalNotes";
import TABLE_BODY from "../data/table.json";

// Create table headers consisting of 4 columns.
const STORY_HEADERS = [
  {
    prop: "name",
    title: "Nom",
    isFilterable: true,
  },
  {
    prop: "username",
    title: "Prénoms",
  },
  {
    prop: "location",
    title: "Profession",
    isFilterable: true,
  },
  {
    prop: "date",
    title: "Last Update",
  },
  {
    prop: "score",
    title: "Score",
    isSortable: true,
  },
];

// Randomize data of the table columns.
// Note that the fields are all using the `prop` field of the headers.


const Instructors = () => {
  const [value, onChange] = useState(new Date());
  const [centredModal, setCentredModal] = useState(false);
  const toggleShow = () => setCentredModal(!centredModal);
  
  return (
    <InstructorLayout title="Enseignant - Coach">
      <MDBRow>
        <MDBCol sm={8}>
          <MDBRow>
            <MDBCol sm="4">
              <MDBCard className="border">
                <MDBCardBody>
                  <div className="text-end">
                    <span className="fs-5 fw-bold text-muted">Clients</span>
                    <br />
                    <span className="fs-5 fw-bold text-end">0</span>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol sm="4">
              <MDBCard className="border">
                <MDBCardBody>
                  <div className="text-end">
                    <span className="fs-5 fw-bold text-muted">Rapports</span>
                    <br />
                    <span className="fs-5 fw-bold text-end">0</span>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol sm="4">
              <MDBCard className="border">
                <MDBCardBody>
                  <div className="text-end">
                    <span className="fs-5 fw-bold text-muted">Activités</span>
                    <br />
                    <span className="fs-5 fw-bold text-end">0</span>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
          <MDBRow className="my-3">
            <MDBCol>
              <MDBCard>
                <MDBCardTitle className="fw-bold ms-4 mt-3">Liste des clients</MDBCardTitle>
                <MDBCardBody>
                  <DatatableWrapper
                    body={TABLE_BODY}
                    headers={STORY_HEADERS}
                    paginationOptionsProps={{
                      initialState: {
                        rowsPerPage: 5,
                        options: [5, 10, 15, 20],
                      },
                    }}
                  >
                    <MDBRow className="mb-4 p-2">
                      <MDBCol sm={5}>
                        <Filter placeholder="Entre votre recherche..." />
                      </MDBCol>
                      <MDBCol className="d-flex flex-col justify-content-lg-center align-items-center justify-content-sm-start mb-2 mb-sm-0">
                        <PaginationOptions labels={{
                          beforeSelect: 'Nombre de lignes à afficher',
                        }}/>
                      </MDBCol>
                    </MDBRow>
                    <MDBRow className="mb-4 p-2">
                      <MDBCol>
                        <Pagination labels={{
                          firstPage: '<<',
                          lastPage: '>>',
                          prevPage: '<',
                          nextPage: '>'
                        }}/>
                      </MDBCol>
                    </MDBRow>
                    <MDBTable className="table-responsive">
                      <TableHeader/>
                      <TableBody />
                    </MDBTable>
                  </DatatableWrapper>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBCol>
        <MDBCol sm={4}>
          <MDBCard>
            <MDBCardBody>
              <div className="d-inline-flex">
                <Avatar name="emma" round size="55" />
                <section className="d-flex flex-column ms-2">
                  <p className="fw-bold m-0">Metasploit ruby</p>
                  <p className="fs-6 text-muted fw-bold">Professeur de math</p>
                </section>
              </div>
              <hr className="my-3" />
              <Calendar
                className="class1"
                onChange={onChange}
                value={value}
                locale="fr"
              />
              <p className="fs-4 my-3 fw-bold">Notes</p>
              <div className="text-end">
                <MDBBtn rounded outline color="success" onClick={toggleShow}>
                  <MDBIcon className="me-2" fas icon="plus" /> Ajouter une note
                </MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      <ModalNotes
        setCentredModal={setCentredModal}
        centredModal={centredModal}
        toggleShow={toggleShow}
      />
    </InstructorLayout>
  );
};

export default memo(Instructors);
