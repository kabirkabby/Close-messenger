'use client';

import Input from "@/app/components/input/Input";
import Button from "@/app/components/Button";
import { useCallback, useState } from "react";
import { useForm, SubmitHandler ,FieldValues } from "react-hook-form";

type Variant = 'LOGIN' | 'REGISTER';

const AuthForm = () => {
    const [variant, setVariant] = useState<Variant>('LOGIN');
    const [isLoading, setIsLoading] = useState(false);

    const toggleVariant = useCallback(() => {
        if(variant === 'LOGIN') {
            setVariant('REGISTER');
        } else {
            setVariant('LOGIN')
        }
    },[variant]);

    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    });

    const onSubmit : SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        if(variant ==='REGISTER'){
            // Axios Register
        }

        if (variant === 'LOGIN'){
            //NextAuth SignIn
        }
    }

    const socialAction = (action:string) => {
        setIsLoading(true);

        //NextAuth Social Signin
    }

    return (
     <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md"> 
        <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
            <form
            className="space-y-6"
            onSubmit={handleSubmit(onSubmit)}>
                {variant === "REGISTER" && (
                    <Input id="email" label="Email" register={register} errors={errors}/>
                )}
                <Input id="email" label="Email Address" type="email" register={register} errors={errors}/>
                <Input id="password" label="password" type="password" register={register} errors={errors}/>
                <div>
                    <Button 
                    disabled={isLoading}
                    fullWidth
                    type="submit"
                    >
                        {variant === 'LOGIN'? 'Sign In' : 'Register'}
                    </Button>
                </div>
            </form>
            <div className="mt-6">
                <div className="relative">
                    <div className="absolut inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"/>
                    </div>
                </div>
            </div>
        </div>  
     </div>
    );
}

export default AuthForm;