import React from "react";
import security from "assets/amico.svg"
import logo from "assets/logo.svg"
import { TextBox } from "components/text/TextBox";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "utils/validators";
import { signIn } from "services/utils.service";
import { PrimaryButton } from "components/buttons";
import { CircleLoader } from 'react-spinners'

const Home = () => {
    const {
        register,
        handleSubmit,
        formState: { isSubmitting, errors },
    } = useForm({
        resolver: yupResolver(loginSchema),
    });

    const onSubmit = async (data) => {
        try {
            const res = await signIn(data);

        } catch (e) {
            
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
                        <form method={"post"} onSubmit={handleSubmit(onSubmit)}>
                            <TextBox
                                label="Email"
                                inputPlaceholder="Email"
                                name="email"
                                {...register("email")}
                                inputType="email"
                            />
                            <TextBox
                                label="Password"
                                inputPlaceholder="Password"
                                name="password"
                                {...register("password")}
                                inputType="password"
                            />
                            <PrimaryButton label={isSubmitting ? <CircleLoader color="inherit" size={28} /> : 'Login'} />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;