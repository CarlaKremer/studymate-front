
import styled from 'styled-components';

export const Container = styled.div`
.chat-container {
    width: 800px;
    height: 800px;
    margin: 0 auto;
    padding: 1rem;
    
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: #484B5C;
}

.message-list {
    list-style: none;
    padding: 0;
    margin: 1rem 0;
    height: 700px;

    overflow-y: auto;
    border-radius: 4px;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    
    .author{
        font-weight: 500;
        font-size: 16px;
        letter-spacing: 0.06em;
        color: #E4E4E4;
    }
    .message{
        font-weight: 500;
        font-size: 14px;
        letter-spacing: 0.06em;
        color: #E4E4E4;
    }
}

.input-wrap{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border: #343243 solid 1px;
    border-radius: 10px;
}

.message-input {
    flex: 1 0;
    min-width: 50px;
    min-height: 25px;
    background-color: transparent;
    border: 0;
    color: #fafafa;
    padding-left: 5px;
    
    font-weight: 300;
    font-size: 12px;
    letter-spacing: 0.06em;
    color: #cccccc;
    
    &:focus {
        outline: none;
    }
    &::placeholder {
        font-weight: 300;
        font-size: 12px;
        letter-spacing: 0.06em;
        color: #8D8D8D;
    }
}

.message-input input[type="text"] {
    flex-grow: 1;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.button-input {
    padding: 8px 16px;
    background-color: #363847;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
`;