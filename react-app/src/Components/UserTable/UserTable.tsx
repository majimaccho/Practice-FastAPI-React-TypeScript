import React, {useContext} from 'react'
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper'

import UserListContext from "GlobalState/UserList/UserListContext";

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    // head: {
    //   backgroundColor: theme.palette.common.black,
    //   color: theme.palette.common.white,
    // },
    body: {
      fontSize: 14,
    },
  }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }),
)(TableRow);

const useStyles = makeStyles(theme => ({
  root:{
    margin: theme.spacing(3)
  }
}))

export const UserTable:React.FC =  () => {
  const { state } = useContext(UserListContext)
  const { users } = state
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <TableContainer component={Paper}>
        <Table >
          <TableHead>
            <TableRow>
              <StyledTableCell>User ID</StyledTableCell>
              <StyledTableCell>User Name</StyledTableCell>
              <StyledTableCell>User Group</StyledTableCell>
              <StyledTableCell>Created at</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map(user => {
              return (
                <StyledTableRow>
                <StyledTableCell>{user.id}</StyledTableCell>
                <StyledTableCell>{user.name}</StyledTableCell>
                <StyledTableCell>{user.group.name}</StyledTableCell>
                <StyledTableCell>{user.createdAt}</StyledTableCell>
              </StyledTableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    
    )
}