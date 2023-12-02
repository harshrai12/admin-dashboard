import React, { useState } from 'react';
import { MdDeleteOutline } from 'react-icons/md';
import { FaRegEdit } from 'react-icons/fa';

function UserTable({ api, search, deleterow, setapi6 }) {
  const [editableRowId, setEditableRowId] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8); 

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = api
    .filter(
      (item) =>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.email.toLowerCase().includes(search.toLowerCase()) ||
        item.role.toLowerCase().includes(search.toLowerCase())
    )
    .slice(indexOfFirstItem, indexOfLastItem);

  const handleEdit = (itemId) => {
    setEditableRowId(itemId);
  };

  const handleCancelEdit = () => {
    setEditableRowId(null);
  };

  const handleSave = (itemId) => {
    const userobj = api.find((item) => item.id === itemId);

    if (name !== "") {
      userobj.name = name;
    }
    if (email !== "") {
      userobj.email = email;
    }
    if (role !== "") {
      userobj.role = role;
    }

    console.log(userobj);
    setEditableRowId(null);
    setName("");
    setEmail("");
    setRole("");
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div>
      <table className="user-table">
        <thead>
          <tr>
            <th>
              <input type="radio" value="" />
            </th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item) => (
            <tr className='container' key={item.id}>
              <td>
                <input type="radio" value="" />
              </td>
              <td>{editableRowId === item.id ? <input type="text" value={name === "" ? item.name : name} onChange={(e) => setName(e.target.value)} /> : item.name}</td>
              <td>{editableRowId === item.id ? <input type="text" value={email === "" ? item.email : email} onChange={(e) => setEmail(e.target.value)} /> : item.email}</td>
              <td>{editableRowId === item.id ? <input type="text" value={role === "" ? item.role : role} onChange={(e) => setRole(e.target.value)} /> : item.role}</td>
              <td className='action'>
                {editableRowId === item.id ? (
                  <>
                    <button onClick={() => handleSave(item.id)}>Save</button>
                    <button onClick={handleCancelEdit}>Cancel</button>
                  </>
                ) : (
                  <>
                    <button>
                      <MdDeleteOutline color='red' size='15' onClick={() => deleterow(item.id)} />
                    </button>
                    <button onClick={() => handleEdit(item.id)}>
                      <FaRegEdit size='15' />
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Prev
        </button>
        <button onClick={handleNextPage} disabled={currentItems.length < itemsPerPage}>
          Next
        </button>
      </div>
    </div>
  );
}

export default UserTable;



    