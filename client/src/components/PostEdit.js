import React from 'react';
import { Edit, SimpleForm, TextInput, DateInput } from 'react-admin';

const PostEdit = (props) => {
    return (
        <Edit title="Edit a Post" {...props}>
            <SimpleForm>
                <TextInput disabled source='id' label='id' />
                <TextInput source='title' label='Title' />
                <TextInput source='body' multiline label='Body' />
                <DateInput source='publishedAt' label='Published' />
            </SimpleForm>
        </Edit>
    );
}

export default PostEdit;
