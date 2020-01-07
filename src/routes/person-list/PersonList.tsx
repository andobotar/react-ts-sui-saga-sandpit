import React from 'react';
import { useSelector } from 'react-redux';
import { Table } from 'antd';

import { IPerson } from '../../models/person';

 const PersonList: React.FC = () => {
    
    const people = useSelector((state: {people: Array<IPerson>}) => state.people); // get 'people' from the redux store

    const columns = [
        {title: 'Name', dataIndex: 'name'},
        {title: 'Email', dataIndex: 'email'},
        {title: 'Planet', dataIndex: 'planet'},
    ]

    return (
        <div className={'content content-wide'}>
            <Table
                dataSource={people}
                columns={columns}
                rowKey={person => person.name}
                pagination={{
                    position: 'both',
                    defaultPageSize: 5,
                    pageSizeOptions: ['5', '10', '25'],
                    showSizeChanger: true,
                }}
            />
        </div>
    );
}

export default React.memo(PersonList);