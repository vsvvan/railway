import React from 'react';
import './SearchBar.css';
import { useForm, SubmitHandler } from "react-hook-form";
import ConInfo from "./ConInfo";

type FormValues = {
    from: string,
    to: string,
    day: number,
    month: number,
    hour: number,
    minute: number
};

interface SearchBarProps{
    dispatch: React.Dispatch<React.SetStateAction<ConInfo>>
}

export function SearchBar(props: SearchBarProps) {
    const DefVals = () => {
        const curD = new Date();
        const defVal: FormValues = {
            from: '',
            to: '',
            day: curD.getDate(),
            month: curD.getMonth()+1,
            hour: curD.getHours(),
            minute: curD.getMinutes()
        };
        return defVal;
    }
    const { register, handleSubmit, getValues, setValue, formState: { errors } } = useForm<FormValues>({ defaultValues: DefVals() });
    const onSubmit: SubmitHandler<FormValues> = data => {
        props.dispatch({
            from: data.from,
            to: data.to,
            month: data.month,
            day: data.day,
            hour: data.hour,
            minute: data.minute
        })
        console.log(data);
    }
    const SwapDestinations = () => {
        const tmp = getValues("to");
        setValue("to", getValues("from"));
        setValue("from", tmp);
    }

    return (
        <div className='SearchBar'>
            <h3 className='searchTitle'>Connection search</h3>

            <form onSubmit={handleSubmit(onSubmit)} className="searchForm">
                <input className='from' placeholder="From" {...register("from", { required: true })} />
                {errors.from && <span className="fromError">Enter name of the starting station</span>}

                <button className='swapbtn' onClick={SwapDestinations}>swap</button>

                <input className='to' placeholder="To" {...register("to", { required: true })} />
                {errors.to && <span className="toError">Enter name of the destination station</span>}

                <input className="day" type="number" {...register("day", { min:1, max: 31, required: true })}/>
                <input className='month' type="number" {...register("month", { min:1, max: 12, required: true })}/>
                <input className='hour' type="number" {...register("hour", { min:0, max: 23, required: true })}/>
                <input className='minute' type="number" {...register("minute", { min:0, max: 59, required: true })}/>
                {(errors.day || errors.month || errors.hour || errors.minute) && <span className="timeError">Enter a correct date and time of desired departure</span>}

                <input className='submitbtn' value="Search Connections" type="submit" />
            </form>
        </div>
    );
}