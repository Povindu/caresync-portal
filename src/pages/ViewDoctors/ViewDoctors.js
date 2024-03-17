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
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import formatDistance from "date-fns/formatDistance";
import { format, isDate } from "date-fns";

import axios from "axios";

const baseUrl = "http://localhost:4000/api";

const columns = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "spec", label: "Specialization", minWidth: 100 },
  {
    id: "doctorID",
    label: "Doctor ID",
    minWidth: 170,
    align: "left",
  },
  {
    id: "createdAt",
    label: "Created At",
    minWidth: 170,
    align: "left",
  },
  { id: "ApproveBtn", label: "Apporve", minWidth: 100 },
  { id: "delBtn", label: "Remove", minWidth: 100 },
  // {
  //     id: "density",
  //     label: "Density",
  //     minWidth: 170,
  //     align: "right",
  //     format: (value) => value.toFixed(2),
  // },
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [userData, setUserData] = React.useState();

  // const dateStr = "2021-10-26T12:24:33.433+00:00";
  // const str = formatDistance(new Date(dateStr), new Date());

  const formatDate = (date) => {
    // const dateStr = "2021-10-26T12:24:33.433+00:00";
    // const dateStr = Date.parse(date);
    // date = date + "00:00"
    return date
    // if (isDate(date)) {
    //   const str = formatDistance(new Date(date), new Date());
    //   return str;
    // }
    // else{
    //   return "fee"
    // }
    
  };

  React.useEffect(() => {
    setUserData();
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const configurationObject = {
        method: "get",
        url: `${baseUrl}/doctors`,
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
                            {/* {formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })} */}
                            {/* {column.id === "createdAt" && 
                            formatDistanceToNow(new Date(row.createdAt), { addSuffix: true })} */}
                            {/* {column.id === "createdAt" && (
                              <p>{formatDate(row.createdAt)}</p>
                            )} */}
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
