import React from 'react'

import './Input.scss'
import Icon from './Icon'
const Input = ({ variant = 'default',labelText='Label', disabled = false, helperText, startIcon, endIcon, value, size, fullWidth, multiLine, rows, color = 'inherit' }) => {

    return (
        <>
            <div className='inputBox'>

                <div className={`${variant} ${disabled && 'disabled'} ${size} ${fullWidth && 'fullWidth'}`} style={{ height: multiLine && rows ? (Number(rows) * 14 + 60) + 'px' : '', alignItems: !multiLine && 'center', borderColor: color && (color != 'inherit') && color }}>
                    <Icon iconName={startIcon} />
                    {
                        multiLine ?
                            <textarea placeholder='Placeholder' rows={rows} disabled={disabled} value={value} style={{ width: fullWidth ? '80%' : ((startIcon || endIcon) ? ((startIcon && endIcon) ? '70%' : '80%') : '85%'), height: multiLine && rows ? (Number(rows) * 14 + 35) + 'px' : '' }} /> :
                            <input type='text' placeholder='Placeholder' disabled={disabled} value={value} style={{ width: fullWidth ? '80%' : ((startIcon || endIcon) ? ((startIcon && endIcon) ? '70%' : '80%') : '85%') }} />
                    }
                    <Icon iconName={endIcon} style={{ marginTop: '5px' }} />
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