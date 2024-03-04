import React from "react";
import security from "assets/amico.svg"
import logo from "assets/logo.svg"
import { TextBox } from "components/text/TextBox";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "utils/validators";
import { signIn } from "services/utils.service";
import { PrimaryButton } from "components/buttons";
import { CircleLoader } from 'react-spinners'
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const Home = () => {
    const navigate = useNavigate();
    const {
        handleSubmit,
        control,
        formState: { isSubmitting },
    } = useForm({
        resolver: yupResolver(loginSchema),
        mode: 'onBlur'
    });

    const onSubmit = async (values) => {
        try {
            const { data, success, message } = await signIn(values);

            if (success) {
                toast.success(message);
                localStorage.setItem('user', JSON.stringify(data))
                navigate('/dashboard', { replace: true });
            }
        } catch (e) {
            toast.error(e?.message || 'Network Error');
        }
    } 

    return (
        <div className="w-full flex h-screen">
            <div className="w-[60%] bg-soft-pink h-full flex items-center justify-center">
                <img src={security} alt="Diagram depicting security"/>
            </div>
            <div className="w-[40%] h-full px-11 py-32">
                <div className="w-full h-full flex-col justify-between items-center">
                    <div className="w-full h-[67px] flex items-center justify-center mb-24">
                        <img src={logo} alt="Profile" width={260} height={67} />
                    </div>
                    <div className="w-full h-[75%] self-end">
                        <h2 className="text-4xl font-bold">Welcome back</h2>
                        <p className="text-xl font-normal">Welcome back! Please enter your details</p>
                        <form method="post" onSubmit={handleSubmit(onSubmit)}>
                            <Controller
                                control={control}
                                name="email"
                                render={({
                                field: { onChange, value, onBlur },
                                fieldState: { error }
                                }) => (
                                    <TextBox
                                        label="Email"
                                        inputPlaceholder="Email"
                                        name="email"
                                        type="email"
                                        onBlur={onBlur}
                                        value={value}
                                        onChange={onChange}
                                        error={error?.message}
                                    />

                                )}
                            />
                            <Controller
                                control={control}
                                name="password"
                                render={({
                                field: { onChange, value, onBlur },
                                fieldState: { error }
                                }) => (
                                    <TextBox
                                        label="Password"
                                        inputPlaceholder="Password"
                                        name="password"
                                        onBlur={onBlur}
                                        value={value}
                                        onChange={onChange}
                                        type="password"
                                        error={error?.message}
                                    />
                                )}
                            />
                            <div className="flex items-center justify-between w-full h-[19px] mb-8">
                                <div className="w-1/2 flex items-center justfy-start">
                                    <input type="checkbox" className="mr-2"/>
                                    <p className="text-black font-normal text-[15px] font-grotesk">Terms & Conditions</p>
                                </div>
                                <div className="w-1/2 flex justify-end">
                                    <span className="text-black font-normal text-[15px] font-grotesk">
                                        <Link to='/' className="no-underline">Forgot Password</Link>
                                    </span>
                                </div>
                            </div>
                            <PrimaryButton type={'submit'} disabled={isSubmitting}>
                                {isSubmitting ? <CircleLoader loading={isSubmitting} color="inherit" size={28} /> : 'Login'}
                            </PrimaryButton>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;