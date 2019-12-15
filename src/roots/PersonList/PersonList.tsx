import React, { useState } from 'react';
import { Table, Pagination, Form, Select } from 'semantic-ui-react';
import { useSelector } from 'react-redux';

import { Person } from '../../models/person';
import classes from './PersonList.module.scss';

export default function PersonList() {
    
    const people = useSelector((state: {people: Array<Person>}) => state.people); // get 'people' from the redux store
    const [numRows, setNumRows] = useState(5);
    const [paginationIndex, setPaginationIndex] = useState(1);
    const [displayedPeople, setDisplayedPeople] = useState(people.slice(0, numRows));

    const handlePaginationChange = (e: any, f: any) => {
        setDisplayedPeople(filterPeople(f.activePage, numRows));
        setPaginationIndex(f.activePage);
    };

    const filterPeople = (index: number, numRows: number) => {
        const from = numRows * (index - 1);
        const to = numRows * index;
        return people.slice(from, to);
    }

    const paginationOptions = [
        { key: '5', text: '5', value: '5' },
        { key: '10', text: '10', value: '10' },
        { key: '25', text: '25', value: '25' },
    ];

    const handleNumRowsChange = (event: any, f: any) => {
        setNumRows(f.value)
        setDisplayedPeople(filterPeople(paginationIndex, f.value))
    }

    return (
        <div className={'content content-wide'}>
            <Table>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Planet</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {displayedPeople.map((person, index) => (
                        <Table.Row key={index}>
                            <Table.Cell>{person.name}</Table.Cell>
                            <Table.Cell>{person.email}</Table.Cell>
                            <Table.Cell>{person.planet}</Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan="2">
                            <Pagination
                                className={classes.pagination}
                                activePage={paginationIndex}
                                totalPages={Math.ceil(people.length / numRows)}
                                boundaryRange={1}
                                size="mini"
                                // floated="right"
                                siblingRange={1}
                                onPageChange={handlePaginationChange}
                            />
                        </Table.HeaderCell>
                        <Table.HeaderCell textAlign="right">
                            <Form.Input
                                control={Select}
                                options={paginationOptions}
                                placeholder={numRows + ''}
                                onChange={handleNumRowsChange}
                            />
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    );
}
