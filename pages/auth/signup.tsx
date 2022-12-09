import React, {useState} from 'react';
//import NextLink from 'next/link';
import {Button, TextInput} from "carbon-components-react";
//import {AuthLayout} from "../../components/layouts/AuthLayout";
//import {Box, Grid} from "@mui/material";
import styles from "/styles/signup.module.css"
import {useForm} from "react-hook-form";
import {airdaneelApi} from "../../api";
import {ErrorOutline} from "@mui/icons-material";
import {Chip} from "@mui/material";
//import {Chip} from "@carbon/icons-react/next";


type FormData = {
    name: string,
    email: string,
    password: string,
}


const SignUpPage = () => {

    const { register, handleSubmit } = useForm<FormData>();
    const [showError, setShowError] = useState(false);

    const onRegisterForm = async ({name, email, password}: FormData) => {

        setShowError(false);

        try{
            const {data} = await airdaneelApi.post('/user/signup',{name, email, password})
            const {token, user} = data;
            console.log(token, user)
        } catch (error){
            console.log('Error en las credenciales')
            setShowError(true)
            setTimeout(()=>setShowError(false),3000)
        }
    }


    return (
        <>
            <div className="login">
                <main className={styles.form}>
                    <div className={styles.formlogin}>
                        <h1 className={styles.title}>Sign Up</h1>

                        <form className={styles.form} onSubmit={handleSubmit(onRegisterForm)}>
                            <Chip
                                label="This email is already registered"
                                color="error"
                                icon={<ErrorOutline/>}
                                className="fadeIn"
                                sx={{display: showError ? 'flex': 'none'}}
                            />
                            <TextInput
                                id="Name"
                                labelText="Name:"
                                placeholder="User"
                                style={{ marginBottom: '1rem' }}
                                required={true}
                                {...register('name')}
                                minLength={2}
                            />
                            <TextInput
                                id="Email"
                                labelText="Email:"
                                placeholder="username@promitia.com"
                                style={{ marginBottom: '1rem' }}
                                required={true}
                                type={"email"}
                                {...register('email')}
                            />
                            <TextInput
                                id="Password"
                                labelText="Password:"
                                placeholder="Enter your password"
                                style={{ marginBottom: '1rem' }}
                                required={true}
                                type={"password"}
                                {...register('password')}
                                minLength={6}
                            />
                            <Button type="submit">Continue</Button>
                        </form>


                    </div>
                </main>
            </div>

        </>
    )
}

export default SignUpPage