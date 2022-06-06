import { useState } from 'react';
import { FormControl, InputLabel, OutlinedInput } from '@mui/material';
function Input(label) {
    const [name, setName] = useState('');

    const handleChange = (event) => {
        setName(event.target.value);
    };
    return (
        <FormControl>
            <InputLabel htmlFor="component-outlined">{label}</InputLabel>
            <OutlinedInput id="component-outlined" value={name} onChange={handleChange} label={label} />
        </FormControl>
    );
}

export default Input;
