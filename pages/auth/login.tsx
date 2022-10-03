import React, {useState} from 'react';
import NextLink from 'next/link';
import {Button, Link, TextInput} from "carbon-components-react";
//import {AuthLayout} from "../../components/layouts/AuthLayout";
//import {Box, Grid} from "@mui/material";
import styles from "/styles/login.module.css"
import {useForm} from "react-hook-form";
import {airdaneelApi} from "../../api";
import {Chip} from "@mui/material";
import {ErrorOutline} from "@mui/icons-material";



type FormData = {
    email: string,
    password: string,
}

const LoginPage = () => {

    const { register, handleSubmit } = useForm<FormData>();
    const [showError, setShowError] = useState(false);

    const onLoginUser = async ({email, password}:FormData) => {

        setShowError(false);

        try{
            const {data} = await airdaneelApi.post('/user/signin',{email, password})
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

                <div className={styles.form}>

                    <div className={styles.formlogin}>
                        <h1 className={styles.title}>Sign In</h1>
                        <h1 className={styles.subtitle}>Don&apos;t have an account?
                            <NextLink href="/auth/signup">
                                <Link>Create One</Link>
                            </NextLink>
                        </h1>
                        <form onSubmit={handleSubmit(onLoginUser)}  className={styles.form}>
                            <Chip
                                label="We dont recognize that username/password"
                                color="error"
                                icon={<ErrorOutline/>}
                                className="fadeIn"
                                sx={{display: showError ? 'flex': 'none'}}
                            />
                            <TextInput
                                type="email"
                                id="Email"
                                labelText="Email:"
                                placeholder="username@promitia.com"
                                style={{ marginBottom: '1rem' }}
                                required={true}
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
                            <Button type="submit" >Continue</Button>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default LoginPage