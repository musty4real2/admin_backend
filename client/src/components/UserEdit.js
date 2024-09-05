import React from 'react';
import { Edit, SimpleForm, TextInput } from 'react-admin';

const UserEdit = (props) => {
    return (
        <Edit title="Edit a User" {...props}>
            <SimpleForm>
                <TextInput disabled source='id' label='ID' />
                <TextInput source='name' label='Name' />
                <TextInput source='email' label='Email Address' />
            </SimpleForm>
        </Edit>
    );
}

export default UserEdit;