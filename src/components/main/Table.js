import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { deletContact, patchContact } from '../../redux/Contacts/saga'

const useRowStyles = makeStyles({
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
    },
});

function createData(name, description, email, phone, position, _id) {
    const res = {
        name,
        description,
        email,
        phone,
        position,
        history: { name: name, id: _id, phone, position },
    };
    console.log(res);
    return res;
}

function deleteContacts(id){
    deletContact(id);
    window.location.reload();
}

function patchContacts(id, data){
    patchContact(id, data);
    window.location.reload();
}

function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    const classes = useRowStyles();
    const [name, setName] = useState(row.name);
    const [email, setEmail] = useState(row.email);
    const [phone, setPhone] = useState(row.phone);
    const [position, setPosition] = useState(row.position);
    const [description, setDescription] = useState(row.description);
    const data = {
        name,
        email,
        phone,
        position
    }

    return (
        <React.Fragment>
            <TableRow className={classes.root}>
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.name}
                </TableCell>
                <TableCell align="left">{row.email}</TableCell>
                <TableCell align="left">{row.phone}</TableCell>
                <TableCell align="left">{row.position}</TableCell>
                <TableCell align="left">{row.description}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            <Typography variant="h6" gutterBottom component="div">
                                Редактирование
              </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>id</TableCell>
                                        <TableCell>ФИО</TableCell>
                                        <TableCell align="left">Емаил</TableCell>
                                        <TableCell align="left">Телефон</TableCell>
                                        <TableCell align="left">Должность</TableCell>
                                        <TableCell align="left">Описание</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                        <TableRow key={row.history.id}>
                                            <TableCell>
                                                <TextField value={row.history.id} disabled={true}></TextField>
                                            </TableCell>
                                            <TableCell component="th" scope="row">
                                                <TextField value={name} onChange={(e) => setName(e.target.value)}></TextField>
                                            </TableCell>
                                            <TableCell align="left">
                                                <TextField value={email} onChange={(e) => setEmail(e.target.value)}></TextField>
                                            </TableCell>
                                            <TableCell align="left">
                                                <TextField value={phone} onChange={(e) => setPhone(e.target.value)}></TextField>
                                            </TableCell>
                                            <TableCell align="left">
                                                <TextField value={position} onChange={(e) => setPosition(e.target.value)}></TextField>
                                            </TableCell>
                                            <TableCell align="left">
                                                <TextField value={description} onChange={(e) => setDescription(e.target.value)}></TextField>
                                            </TableCell>
                                        </TableRow>
                                    <Button onClick={() => patchContacts(row.history.id, data)}>Сохранить</Button>
                                    <Button color="secondary" onClick={() => deleteContacts(row.history.id)}>Удалить</Button>
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

Row.propTypes = {
    row: PropTypes.shape({

        carbs: PropTypes.number.isRequired,
        fat: PropTypes.number.isRequired,
        history: PropTypes.arrayOf(
            PropTypes.shape({
                amount: PropTypes.number.isRequired,
                customerId: PropTypes.string.isRequired,
                date: PropTypes.string.isRequired,
            }),
        ).isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        protein: PropTypes.number.isRequired,
    }).isRequired,
};

export default function CollapsibleTable({ rowse }) {
    const renderRows = [];
    rowse.forEach(item => {
        renderRows.push(createData(item.name, item.description, item.email, item.phone, item.position, item._id));
    });
    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell>ФИО</TableCell>
                        <TableCell align="left">Емаил</TableCell>
                        <TableCell align="left">Телефон</TableCell>
                        <TableCell align="left">Должность</TableCell>
                        <TableCell align="left">Описание</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {renderRows.map((row) => (
                        <Row key={row._id} row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}