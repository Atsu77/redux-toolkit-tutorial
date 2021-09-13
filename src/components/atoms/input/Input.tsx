import React, { memo, VFC } from 'react'
import { TextField } from '@material-ui/core'

type Props = {
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input: VFC<Props> = memo(({
  value,
  onChange,
}) => {
  return (
    <TextField id="standard-basic" value={value} onChange={onChange}/>
  )
});
