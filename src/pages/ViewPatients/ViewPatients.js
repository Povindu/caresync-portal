import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";

import axios from "axios";

import { baseUrl } from "../../constants/constants";

const columns = [
  { id: "name", label: "Name", minWidth: 170 },
  // { id: "spec", label: "Specialization", minWidth: 100 },
  {
    id: "patientID",
    label: "Patient ID",
    minWidth: 170,
    align: "left",
  },
  {
    id: "createdAt",
    label: "Created At",
    minWidth: 170,
    align: "left",
  },
  // { id: "ApproveBtn", label: "Apporve", minWidth: 100 },
  { id: "delBtn", label: "Remove", minWidth: 100 },
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [userData, setUserData] = React.useState();


  React.useEffect(() => {
    setUserData();
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const configurationObject = {
        method: "get",
        url: `${baseUrl}/patients`,
      };
      console.log(configurationObject.url);

      const response = await axios(configurationObject);
      console.log(response.data);
      setUserData(response.data);
    } catch (error) {
      console.log("error " + error);
    }
  };

  const handleApprove = (row) => {
    alert(row);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 500 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {userData &&
              userData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row._id}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.id === "ApproveBtn" &&
                              (!row.medicalIdVerify ? (
                                <Button
                                  onClick={() => {
                                    handleApprove(row.name);
                                  }}
                                  variant="outlined"
                                  size="small"
                                >
                                  Approve
                                </Button>
                              ) : (
                                <Button
                                  disabled
                                  onClick={() => {
                                    handleApprove(row.name);
                                  }}
                                  variant="text"
                                  size="small"
                                >
                                  Approved
                                </Button>
                              ))}

                            {column.id === "delBtn" && (
                              <Button
                                onClick={() => {
                                  handleApprove(row.name);
                                }}
                                variant="outlined"
                                color="error"
                                size="small"
                              >
                                Delete
                              </Button>
                            )}
                            {column.id !== "ApproveBtn" &&
                              column.id !== "delBtn" &&
                              // column.id !== "createdAt" &&
                              value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={userData ? userData.length : 0}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
