import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { TextField, Grid } from '@material-ui/core';


function CustomTextField({ name, label, required }) {
    const { control } = useFormContext();
    const isError = false;

    return (
        <Grid item xs={12} sm={6}>
        {/* <Controller
          as={TextField}
          name={name}
          control={control}
          label={label}
          fullWidth
          required={required}
          error={isError}
        /> */}
        <Controller
        // defaultValue=""
            control={control}
            name={name}
            render = {({ field})=> (
                <TextField
                    fullWidth
                    label={label}
                    required
                />
            )}
         />
      </Grid>
    )
}

export default CustomTextField
