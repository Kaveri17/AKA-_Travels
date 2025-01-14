import React from "react";
import Cart from "../Pages/Cart";

const Modal = () => {
  return (
    <>
      {/* Button trigger modal */}
      <button
        type="button"
        className="bg-orange-500 text-white px-16 lg:px-8 xl:px-16 py-3 text-lg rounded-md tracking-wide hover:bg-orange-600"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Check Availability
      </button>
      {/* Modal  */}
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header border-b-0  ">
              <button
                type="button"
                className="btn-close "
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="bi bi-x text-3xl"></i>
              </button>
            </div>
            <div className="modal-body w-full">
              <Cart />
            </div>
            {/* <div className="modal-footer">
              <button type="button" className="btn btn-primary text-slate-800">
                Save changes
              </button>
            </div> */}
          </div>
        </div>
      </div>

      {/* toggelmodel */}
      {/* <div
        class="modal fade"
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabindex="-1"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalToggleLabel">
                Modal 1
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              Show a second modal and hide this one with the button below.
            </div>
            <div class="modal-footer">
              <button
                class="btn btn-primary"
                data-bs-target="#exampleModalToggle2"
                data-bs-toggle="modal"
              >
                Open second modal
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal fade"
        id="exampleModalToggle2"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel2"
        tabindex="-1"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalToggleLabel2">
                Modal 2
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              Hide this modal and show the first with the button below.
            </div>
            <div class="modal-footer">
              <button
                class="btn btn-primary"
                data-bs-target="#exampleModalToggle"
                data-bs-toggle="modal"
              >
                Back to first
              </button>
            </div>
          </div>
        </div>
      </div>
      <button
        class="btn btn-primary"
        data-bs-target="#exampleModalToggle"
        data-bs-toggle="modal"
      >
        Open first modal
      </button> */}
    </>
  );
};

export default Modal;
