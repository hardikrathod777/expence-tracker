import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import { plus } from '../../utils/Icons';
import { useGlobalContext } from '../../context/globalContext'; // Adjust the path

function RegisterForm() {
    const { registerUser, error, setError } = useGlobalContext();
    const [inputState, setInputState] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const { username, email, password, confirmPassword } = inputState;

    const handleInput = name => e => {
        setInputState({ ...inputState, [name]: e.target.value });
        setError('');
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        registerUser(inputState);
        setInputState({
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        });
    };

    return (
        <FormStyled onSubmit={handleSubmit}>
            {error && <p className="error">{error}</p>}
            <div className="input-control">
                <input
                    type="text"
                    value={username}
                    name="username"
                    placeholder="Username"
                    onChange={handleInput('username')}
                    required
                />
            </div>
            <div className="input-control">
                <input
                    type="email"
                    value={email}
                    name="email"
                    placeholder="Email"
                    onChange={handleInput('email')}
                    required
                />
            </div>
            <div className="input-control">
                <input
                    type="password"
                    value={password}
                    name="password"
                    placeholder="Password"
                    onChange={handleInput('password')}
                    required
                />
            </div>
            <div className="input-control">
                <input
                    type="password"
                    value={confirmPassword}
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    onChange={handleInput('confirmPassword')}
                    required
                />
            </div>
            <div className="submit-btn">
                <Button
                    name={'Register'}
                    icon={plus}
                    bPad={'.8rem 1.6rem'}
                    bRad={'30px'}
                    bg={'var(--color-accent'}
                    color={'#fff'}
                />
            </div>
        </FormStyled>
    );
}

const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    input {
        font-family: inherit;
        font-size: inherit;
        outline: none;
        border: none;
        padding: .5rem 1rem;
        border-radius: 5px;
        border: 2px solid #fff;
        background: transparent;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        color: rgba(34, 34, 96, 0.9);
        &::placeholder {
            color: rgba(34, 34, 96, 0.4);
        }
    }
    .submit-btn {
        button {
            box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
            &:hover {
                background: var(--color-green) !important;
            }
        }
    }
`;

export default RegisterForm;
