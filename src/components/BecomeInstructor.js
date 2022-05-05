import React, { memo } from "react";
import { Link } from "react-router-dom";

const BecomeInstructor = () => {
  return (
    <div className="container">
      <div className="cta__inner mb-5">
        <div className="row">
          <div className="col-xxl-6 col-xl-6 col-lg-6">
            <div className="cta__item cta__item-border pt-40 pb-15 d-sm-flex align-items-start pr-110">
              <div className="cta__icon mr-30">
                <span>
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.0801 0C8.84004 0 4.58002 4.26003 4.58002 9.50006C4.58002 14.6401 8.60004 18.8001 13.8401 18.9801C14.0001 18.9601 14.1601 18.9601 14.2801 18.9801C14.3201 18.9801 14.3401 18.9801 14.3801 18.9801C14.4001 18.9801 14.4001 18.9801 14.4201 18.9801C19.5401 18.8001 23.5601 14.6401 23.5801 9.50006C23.5801 4.26003 19.3201 0 14.0801 0Z"
                      fill="#192A88"
                    ></path>
                    <path
                      d="M24.2401 24.2998C18.6601 20.5798 9.56006 20.5798 3.94002 24.2998C1.40001 25.9998 0 28.2998 0 30.7598C0 33.2198 1.40001 35.4998 3.92002 37.1799C6.72004 39.0599 10.4001 39.9999 14.0801 39.9999C17.7601 39.9999 21.4401 39.0599 24.2401 37.1799C26.7602 35.4798 28.1602 33.1998 28.1602 30.7198C28.1402 28.2598 26.7602 25.9798 24.2401 24.2998Z"
                      fill="#192A88"
                    ></path>
                    <path
                      d="M35.0602 10.6802C35.3802 14.5603 32.6202 17.9603 28.8002 18.4203C28.7802 18.4203 28.7802 18.4203 28.7602 18.4203H28.7002C28.5802 18.4203 28.4602 18.4203 28.3602 18.4603C26.4202 18.5603 24.6402 17.9403 23.3002 16.8003C25.3602 14.9603 26.5402 12.2002 26.3002 9.20023C26.1602 7.58022 25.6002 6.10021 24.7602 4.8402C25.5202 4.4602 26.4002 4.2202 27.3002 4.1402C31.2202 3.8002 34.7202 6.72021 35.0602 10.6802Z"
                      fill="#FF7648"
                    ></path>
                    <path
                      d="M39.0602 29.1799C38.9002 31.1199 37.6602 32.7999 35.5802 33.9399C33.5802 35.0399 31.0602 35.5599 28.5602 35.4999C30.0002 34.1999 30.8402 32.5799 31.0002 30.8599C31.2002 28.3799 30.0202 25.9998 27.6601 24.0998C26.3201 23.0398 24.7601 22.1998 23.0601 21.5798C27.4801 20.2998 33.0402 21.1598 36.4602 23.9198C38.3002 25.3998 39.2402 27.2599 39.0602 29.1799Z"
                      fill="#FF7648"
                    ></path>
                  </svg>
                </span>
              </div>
              <div className="cta__content">
                <h3 className="cta__title">Devenir Professeur</h3>
                <p>
                  Askoacademy vous donne les outils nécessaires pour devenir
                  instructeur.
                </p>
                <Link className="tp-btn tp-btn-3" to="contact">
                  Enseignez maintenant
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6">
            <div className="cta__item pl-85 pt-40 pb-15 d-sm-flex align-items-start">
              <div className="cta__icon mr-30">
                <span>
                  <svg
                    width="46"
                    height="46"
                    viewBox="0 0 46 46"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M32.2575 29.977C33.5417 29.1336 35.2283 30.0536 35.2283 31.587V34.0595C35.2283 36.4936 33.3308 39.1003 31.05 39.867L24.9358 41.8986C23.8625 42.2628 22.1183 42.2628 21.0642 41.8986L14.95 39.867C12.65 39.1003 10.7717 36.4936 10.7717 34.0595V31.5678C10.7717 30.0536 12.4583 29.1336 13.7233 29.9578L17.6717 32.5261C19.1858 33.542 21.1025 34.0403 23.0192 34.0403C24.9358 34.0403 26.8525 33.542 28.3667 32.5261L32.2575 29.977Z"
                      fill="#FF7648"
                    ></path>
                    <path
                      d="M38.295 12.3817L26.8142 4.84924C24.7442 3.4884 21.3325 3.4884 19.2625 4.84924L7.72416 12.3817C4.02499 14.7776 4.02499 20.2017 7.72416 22.6167L10.7908 24.6101L19.2625 30.1301C21.3325 31.4909 24.7442 31.4909 26.8142 30.1301L35.2283 24.6101L37.8542 22.8851V28.7501C37.8542 29.5359 38.5058 30.1876 39.2917 30.1876C40.0775 30.1876 40.7292 29.5359 40.7292 28.7501V19.3201C41.4958 16.8476 40.71 13.9726 38.295 12.3817Z"
                      fill="#192A88"
                    ></path>
                  </svg>
                </span>
              </div>
              <div className="cta__content">
                <h3 className="cta__title">Demande d'enregistrement</h3>
                <p>
                  Étudiants, Lycéens, Collégiens et Travailleurs, enregistrez
                  vous pour bénéficiez des formations ou de coaching.
                </p>
                <Link className="tp-btn tp-btn-4" to="contact">
                  S'enregistrez
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(BecomeInstructor);
