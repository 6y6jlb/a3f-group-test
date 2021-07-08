import React, {ChangeEvent, DetailedHTMLProps, SelectHTMLAttributes} from 'react'
import style from './SuperSelect.module.css'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: string[]
    onChangeOption?: (option: string) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption, value,
        ...restProps
    }
) => {
    const mappedOptions: any[] | undefined = options?.map ( (opt, i) => {
        return (
            <option key={ i.toString () } className={ style.mappedItem }>
                { opt }
            </option>
        )
    } ); // map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChangeOption && onChangeOption ( e.currentTarget.value )
        // onChange, onChangeOption
    }

    return (
        <select className={ style.select } value={ value } onChange={ onChangeCallback } { ...restProps }>
            { mappedOptions }
        </select>
    )
}

export default SuperSelect
