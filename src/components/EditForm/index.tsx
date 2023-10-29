import React, { useState } from 'react';

import { FormContainer, Form, Label, Input, Button } from './styles'

interface EditFormProps {
    newEmail: any;
    setNewEmail: any;
    newUsername: any;
    setNewUsername: any;
    onSubmit: () => void;
}

const EditForm: React.FC<EditFormProps> = ({ 
    newEmail,
    setNewEmail, 
    newUsername, 
    setNewUsername,
    onSubmit
}) => {
    

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit();
    };

    return (
        <FormContainer>
            <p>Atualizar perfil</p>
            <Form onSubmit={handleSubmit}>
                <div>
                    <Label>Email:</Label>
                    <Input
                        type="email"
                        value={newEmail}
                        onChange={(e: any) => setNewEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <Label>Username:</Label>
                    <Input
                        type="text"
                        value={newUsername}
                        onChange={(e) => setNewUsername(e.target.value)}
                        required
                    />
                </div>
                <Button type="submit">Salvar</Button>
            </Form>
        </FormContainer>
    );
};

export default EditForm;