import React, { useState } from 'react';

import { FormContainer, Form, Label, Input, Button } from './styles'


interface EditFormProps {
    initialEmail: string;
    initialUsername: string;
    onSubmit: (email: string, username: string) => void;
}

const EditForm: React.FC<EditFormProps> = ({ initialEmail, initialUsername, onSubmit }) => {
    const [email, setEmail] = useState(initialEmail);
    const [username, setUsername] = useState(initialUsername);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(email, username);
    };

    return (
        <FormContainer>
            <Form onSubmit={handleSubmit}>
                <div>
                    <Label>Email:</Label>
                    <Input
                        type="email"
                        value={email}
                        onChange={(e: any) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <Label>Username:</Label>
                    <Input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <Button type="submit">Salvar</Button>
            </Form>
        </FormContainer>
    );
};

export default EditForm;