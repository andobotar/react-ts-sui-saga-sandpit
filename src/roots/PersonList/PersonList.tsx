import React, { useState } from 'react';
import { Table, Pagination, Form, Select } from 'semantic-ui-react';

import classes from './PersonList.module.scss';

export default function PersonList() {
    const [people] = useState([
        { name: '1-Luke', email: 'luke@rebellion.org', planet: 'Alderaan' },
        { name: '2-Vader', email: 'lord@empire.hu', planet: 'Dagobah' },
        { name: '3-Luke', email: 'luke@rebellion.org', planet: 'Alderaan' },
        { name: '4-Vader', email: 'lord@empire.hu', planet: 'Dagobah' },
        { name: '5-Luke', email: 'luke@rebellion.org', planet: 'Alderaan' },
        { name: '6-Vader', email: 'lord@empire.hu', planet: 'Dagobah' },
        { name: '7-Luke', email: 'luke@rebellion.org', planet: 'Alderaan' },
        { name: '8-Vader', email: 'lord@empire.hu', planet: 'Dagobah' },
        { name: '9-Luke', email: 'luke@rebellion.org', planet: 'Alderaan' },
        { name: '10-Vader', email: 'lord@empire.hu', planet: 'Dagobah' },
        { name: '11-Luke', email: 'luke@rebellion.org', planet: 'Alderaan' },
        { name: '12-Vader', email: 'lord@empire.hu', planet: 'Dagobah' },
        { name: '13-Luke', email: 'luke@rebellion.org', planet: 'Alderaan' },
        { name: '14-Vader', email: 'lord@empire.hu', planet: 'Dagobah' },
        { name: '15-Luke', email: 'luke@rebellion.org', planet: 'Alderaan' },
        { name: '16-Vader', email: 'lord@empire.hu', planet: 'Dagobah' },
        { name: '17-Luke', email: 'luke@rebellion.org', planet: 'Alderaan' },
        { name: '18-Vader', email: 'lord@empire.hu', planet: 'Dagobah' },
        { name: '19-Vader', email: 'lord@empire.hu', planet: 'Dagobah' },
        { name: '20-Vader', email: 'lord@empire.hu', planet: 'Dagobah' },
        { name: '21-Vader', email: 'lord@empire.hu', planet: 'Dagobah' },
        { name: '22-Vader', email: 'lord@empire.hu', planet: 'Dagobah' },
        { name: '23-Vader', email: 'lord@empire.hu', planet: 'Dagobah' },
    ]);
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
            <Table celle>
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
