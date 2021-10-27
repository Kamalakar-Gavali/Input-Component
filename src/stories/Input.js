import React from 'react'

import './Input.scss'
import Icon from './Icon'
const Input = ({ variant = 'default',labelText='Label', disabled = false, helperText, startIcon, endIcon, value, size, fullWidth, multiLine, rows, color = 'inherit' }) => {
let paddingTop='12.5px';

    return (
        <>
            <div className='inputBox'>

                <div className={`${variant} ${disabled && 'disabled'} ${size} ${fullWidth && 'fullWidth'}`} style={{ height: multiLine && rows ? (Number(rows) * 14 + 60) + 'px' : '', alignItems:!multiLine && 'center', borderColor: color && (color != 'inherit') && color }}>
                    <Icon iconName={startIcon} padding={multiLine &&paddingTop }  style={{ marginTop: multiLine &&paddingTop}} />
                    {
                        multiLine ?
                            <textarea placeholder='Placeholder' rows={rows} disabled={disabled} value={value} style={{ width: fullWidth ? '80%' : ((startIcon || endIcon) ? ((startIcon && endIcon) ? '70%' : '80%') : '85%'), height: multiLine && rows ? (Number(rows) * 14 + 35) + 'px' : '', marginTop: multiLine &&'12.5px'}} /> :
                            <input type='text' placeholder='Placeholder' disabled={disabled} value={value} style={{ width: fullWidth ? ((startIcon || endIcon) ? ((startIcon && endIcon) ? '70%' : '80%') : '90%'):((startIcon || endIcon) ? ((startIcon && endIcon) ? '70%' : '75%') : '90%') }} />
                    }
                    <Icon iconName={endIcon} padding={multiLine &&paddingTop }  style={{ marginTop: multiLine&&paddingTop}} />
                </div>
                <label style={{ color: color && (color != 'inherit') && color }}>
                    {
                        labelText && labelText
                    }
                </label>
                <label className='helperText' style={{ color: color && (color != 'inherit') && color }}>

                    {helperText && helperText}
                </label>
            </div>

        </>
    )
}

export default Input;