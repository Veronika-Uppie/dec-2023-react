import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../../servises/car.cervice";

const CarForm = ({setAllCars, carForUpdate}) => {
    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({mode: 'all'});
    useEffect(()=>{
        if (carForUpdate){
            setValue('brand', carForUpdate.brand, {shouldValidate:true})
            setValue('price', carForUpdate.price, {shouldValidate:true})
            setValue('year', carForUpdate.year, {shouldValidate:true})

        }
    }, [carForUpdate])
    const save = async (car)=>{
        const {data} = await carService.create(car);
        setAllCars(prev=>!prev)
        reset()
    }

    const update = async (car) =>{

    }

    return (
        <form onSubmit={handleSubmit(carForUpdate?update:save)}>
            <input  placeholder={'brand'} {...register('brand',
                {pattern: {
                        value:/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/,
                        message: 'Бренд має складатись з літер та містити 1-20 символів'
                    },
                    required:{value:true}
                })}/>
            {errors.brand&&<span>{errors.brand.message}</span>}
            <input  placeholder={'price'} {...register('price', {
                valueAsNumber:true,
                min: {value: 0, message: 'Мінімальне значення 0'},
                max: {value: 1000000, message: 'Максимальне значення 1000000'},
                required:{value:true}
            })}/>
            {errors.price&& <span>{errors.price.message}</span>}
            <input  placeholder={'year'} {...register('year', {
                valueAsNumber:true,
                min: {value: 1990, message: 'Мінімум 1990 рік'},
                max: {value: new Date().getFullYear(), message: 'Максімум поточний рік'},
                required:{value:true}
            })} />

            <input type={"submit"} value={carForUpdate?'Update':'Create'} disabled={!isValid}/>
        </form>
    );
};

export default CarForm;