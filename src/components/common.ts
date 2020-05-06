import { Paper, TableCell } from '@material-ui/core';
import { Theme, withStyles } from '@material-ui/core/styles';

export const StyledPaper = withStyles(() => ({
  root: {
    backgroundColor: '#424242',
  },
}))(Paper);

export const StyledTableCell = withStyles((theme: Theme) => ({
  body: {
    color: theme.palette.common.white,
  },
  head: {
    color: theme.palette.common.white,
  },
}))(TableCell);
