import React from 'react';
import { Create, SimpleForm, TextInput, DateInput } from 'react-admin';

const PostCreate = (props) => {
    return (
        <Create title="Create a Post" {...props}>
            <SimpleForm>
                <TextInput source='title' label='Title' />
                <TextInput source='body' multiline label='Body' />
                <DateInput source='publishedAt' label='Published' />
            </SimpleForm>
        </Create>
    );
}

export default PostCreate;
