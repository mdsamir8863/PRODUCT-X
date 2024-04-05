import { useState } from "react";

const AccessManagement = () => {
  const [features, setFeatures] = useState([
    { id: 1, name: "Feature 1", isChecked: false },
    { id: 2, name: "Feature 2", isChecked: false },
    { id: 3, name: "Feature 3", isChecked: false },
    { id: 4, name: "Feature 4", isChecked: false },
    { id: 5, name: "Feature 5", isChecked: false },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [users, setUser] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [deleteIndex, setDeleteIndex] = useState(null); // Step 1: New state variable for delete index

  // Function to initiate the deletion process
  const initiateDeleteUser = (index) => {
    setDeleteIndex(index); // Set the index of the user to be deleted
    setConfirmDelete(true); // Show the confirmation modal
  };

  // Updated deleteUser function
  const deleteUser = () => {
    if (deleteIndex !== null) {
      const updatedUsers = [...users];
      updatedUsers.splice(deleteIndex, 1);
      setUser(updatedUsers);
      setConfirmDelete(false);
      setDeleteIndex(null); // Reset the delete index
    }
  };

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal and reset input fields
  const closeModal = () => {
    setIsModalOpen(false);
    setName("");
    setEmail("");
  };

  // Function to handle adding a new todo
  const addUsers = () => {
    if (name && email) {
      setUser([...users, { name, email }]);
      closeModal();
    }
  };

  // features list

  // Function to handle checkbox change
  const handleCheckboxChange = (id) => {
    const updatedFeatures = features.map((feature) =>
      feature.id === id
        ? { ...feature, isChecked: !feature.isChecked }
        : feature
    );
    setFeatures(updatedFeatures);
  };

  // Function to handle select/deselect all checkbox
  const handleToggleAll = () => {
    const allChecked = features.every((feature) => feature.isChecked);
    const updatedFeatures = features.map((feature) => ({
      ...feature,
      isChecked: !allChecked,
    }));
    setFeatures(updatedFeatures);
  };
  return (
    <>
      <section>
        {/*confirm delete modal */}
        {confirmDelete && (
          <div className="hs-overlay fixed top-0 left-0 z-[80] w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50">
            <div className="relative p-4 w-full max-w-md max-h-full">
              <div className="relative bg-white rounded-lg shadow ">
                <button
                  onClick={() => setConfirmDelete(false)}
                  type="button"
                  className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-red-600 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                  data-modal-hide="popup-modal"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
                <div className="p-4 md:p-5 text-center">
                  <svg
                    className="mx-auto mb-4 text-gray-400 w-12 h-12 "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <h3 className="mb-5 text-lg font-normal text-gray-500 ">
                    Are you sure you want to delete this User?
                  </h3>
                  <button
                    onClick={deleteUser}
                    data-modal-hide="popup-modal"
                    type="button"
                    className="text-white rounded-full bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300  font-medium text-sm inline-flex items-center px-5 py-2.5 text-center"
                  >
                    Yes, I&apos;m sure
                  </button>
                  <button
                    onClick={() => setConfirmDelete(false)}
                    data-modal-hide="popup-modal"
                    type="button"
                    className="py-2.5 px-5 rounded-full ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white border border-gray-200 hover:bg-gray-100 hover:text-dark-blue focus:z-10 focus:ring-4 focus:ring-gray-100 "
                  >
                    No, cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Render the modal only if isModalOpen is true */}
        {isModalOpen && (
          <div
            id="hs-static-backdrop-modal"
            className="hs-overlay fixed top-0 left-0 z-[80] w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50"
          >
            <div className="bg-white border shadow-sm rounded-xl w-96">
              <div className="flex justify-between items-center py-3 px-4 border-b">
                <h3 className="font-bold text-dark-blue uppercase">
                  ADD NEW USER
                </h3>
                <button
                  type="button"
                  className="text-gray-500 hover:text-gray-800"
                  onClick={closeModal}
                >
                  <span className="sr-only">Close</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 hover:text-red-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="p-4">
                <input
                  className="rounded-full w-full border-2 border-saffron px-2 py-1 outline-none accent-saffron"
                  type="text"
                  placeholder="Enter Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  className="rounded-full w-full border-2 border-saffron px-2 py-1 mt-4 outline-none accent-saffron"
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t">
                <button
                  type="button"
                  className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                  onClick={closeModal}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent bg-saffron text-white hover:bg-dark-saffron disabled:opacity-50 disabled:pointer-events-none"
                  onClick={addUsers}
                >
                  Add User
                </button>
              </div>
            </div>
          </div>
        )}
        {/* features list */}
        <div className="container mx-auto mt-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Feature List</h2>
            <button
              className="px-3 py-1 bg-saffron text-white rounded-full hover:bg-dark-saffron"
              onClick={handleToggleAll}
            >
              {features.every((feature) => feature.isChecked)
                ? "Deselect All"
                : "Select All"}
            </button>
          </div>
          <div>
            {features.map((feature) => (
              <div key={feature.id} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id={`feature-${feature.id}`}
                  className="mr-2 w-5 h-5 accent-saffron"
                  checked={feature.isChecked}
                  onChange={() => handleCheckboxChange(feature.id)}
                />
                <label htmlFor={`feature-${feature.id}`}>{feature.name}</label>
              </div>
            ))}
          </div>
        </div>

        {/* user accounts */}
        <div className="flex flex-col items-start  py-2 bg-gray-50">
          <div className="flex w-full flex-col gap-5 container mx-auto">
            <div className="flex md:items-center justify-between px-3 py-3 items-start w-full md:flex-row flex-col gap-2  border-b-saffron border-b-2 mx-auto bg-white shadow-mdd">
              <p className="flex flex-col w-full md:w-1/2">
                <span className="uppercase text-saffron font-bold">
                  USER ACCOUNTS
                </span>
                <span className=" text-dark-blue font-light text-[12px]">
                  Grant, revoke and manage access rights to other users
                </span>
              </p>

              <button
                className="border-2 uppercase px-2 flex items-center gap-1 justify-center  bg-saffron text-white hover:bg-transparent hover:text-dark-blue border-saffron rounded-full  py-1"
                type="button"
                onClick={openModal}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
                  />
                </svg>
                Add New user
              </button>
            </div>

            <div className="flex bg-dark-blue w-full p-3">
              <div className="flex w-1/2 items-center justify-between text-white">
                <p className="text-start w-full font-bold ">Name</p>
                <p className="text-center w-full font-bold  ">Email</p>
              </div>
            </div>
            <div className="flex bg-gray-800 w-full justify-between  gap-2 flex-wrap">
              {users.map((user, index) => (
                <div
                  key={index}
                  className="flex w-full items-center justify-between px-2 border-saffron pb-3 border-b-2 py-3 text-white"
                >
                  <p>{user.name}</p>
                  <p>{user.email}</p>
                  <div className="flex items-center gap-1">
                    <button className="rounded-full bg-saffron px-2 py-1 text-white hover:bg-dark-saffron">
                      Manage Permission
                    </button>
                    <button
                      className="bg-red-600 hover:bg-red-500 rounded-full text-white px-2 py-1"
                      onClick={() => initiateDeleteUser(index)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AccessManagement;
