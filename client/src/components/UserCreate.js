import React from 'react';
import { Create, SimpleForm, TextInput, required, email } from 'react-admin';

const validateEmail = [required(), email()];

const UserCreate = (props) => {
    return (
        <Create title="Create a User" {...props}>
            <SimpleForm>
                <TextInput source='name' label='User Name' validate={required()} />
                <TextInput source='email' label='User Email Address' validate={validateEmail} />
            </SimpleForm>
        </Create>
    );
}

export default UserCreate;