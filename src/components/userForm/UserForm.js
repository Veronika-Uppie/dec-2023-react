import React from 'react';
import {useForm} from "react-hook-form";
import {userService} from "../../servises/user.service";

const UserForm = () => {
    const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm({mode:'all'});

    const save = async (user) => {
        const {data} = await userService.create(user);
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type={"number"} placeholder={'id'} {...register('id', {valueAsNumber: true})} required={true}/>
            <input type={"text"} placeholder={'name'} {...register('name')} required={true}/>
            <input type={"text"} placeholder={'username'} {...register('username')} required={true}/>
            <input type={"submit"} name={'Save'} disabled={!isValid}/>
        </form>
    );
};

export default UserForm;