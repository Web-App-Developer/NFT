import React, { useState } from "react";
import useTable from "../hooks/useTable";
import TableFooter from "./TableFooter";
import {  Table } from 'react-bootstrap';
// import TableFooter from "./TableFooter";

const TableItem = ({ data, rowsPerPage, setRowPerpage }) => {
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);
  return (
    <>
      <Table responsive striped hover>
        <thead>
          <tr>
            <th>#</th>
            <th>
              Name 
            </th>

            <th>
              Title 
            </th>
            <th>
              Company 
            </th>
            <th>
              Email 
            </th>
            <th>
              Industry 
            </th>
            <th>
              Person Linkedin Url{" "}
              
            </th>
            {/* <th>Website <i class="fa fa-caret-down" aria-hidden="true"></i></th>
                                            <th>Country <i class="fa fa-caret-down" aria-hidden="true"></i></th>
                                            <th>Region <i class="fa fa-caret-down" aria-hidden="true"></i></th>
                                            <th>ZB Gender <i class="fa fa-caret-down" aria-hidden="true"></i></th> */}
          </tr>
        </thead>
        <tbody>
          {slice && slice.length > 0 ? (
            slice.map((item, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>
                  {item.f_name} {item.l_name}
                </td>

                <td>{item.title}</td>
                <td>{item.company}</td>
                <td>{item.email}</td>
                <td>{item.industry}</td>
                <td>{item.person_linkedin_url}</td>
                {/* <td>{item.website}</td>
                                                    <td>{item.country}</td>
                                                    <td>{item.region}</td>
                                                    <td>{item.zb_gender}</td> */}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={12}>There is no record</td>
            </tr>
          )}
        </tbody>
      </Table>
      <TableFooter range={range} rowsPerPage={rowsPerPage} setRowPerpage={setRowPerpage} slice={slice} setPage={setPage} page={page} />
      {/* <table className={styles.table}>
        <thead className={styles.tableRowHeader}>
          <tr>
            <th className={styles.tableHeader}>Country</th>
            <th className={styles.tableHeader}>Capital</th>
            <th className={styles.tableHeader}>Language</th>
          </tr>
        </thead>
        <tbody>
          {slice.map((el) => (
            <tr className={styles.tableRowItems} key={el.id}>
              <td className={styles.tableCell}>{el.name}</td>
              <td className={styles.tableCell}>{el.capital}</td>
              <td className={styles.tableCell}>{el.language}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
      {/* <TableFooter range={range} slice={slice} setPage={setPage} page={page} /> */}
    </>
  );
};

export default TableItem;
