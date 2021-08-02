import React from 'react';
import '../styles/table.css';

function ContentTable({ tableData }) {
  return (
    <>
      {tableData.error ? (
        <p id="info">{tableData.error}</p>
      ) : tableData.loading ? (
        <p id="info">loading....</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Content</th>
            </tr>
          </thead>
          <tbody>
            {tableData.data.map((items) => (
              <tr key={items.id}>
                <td>{items.id}</td>
                <td>{items.title}</td>
                <td>{items.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

export default ContentTable;
