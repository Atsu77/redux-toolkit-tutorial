import React, { memo, ReactNode, VFC } from "react";
import { Button, makeStyles, createStyles } from "@material-ui/core";

type Props = {
  children: ReactNode;
  onClick: () => void;
};


const useStyles = makeStyles(() =>
  createStyles({
    root: {
      backgroundColor: "#359FFC",
      color: "#fff",
      '&:hover': {
        backgroundColor: "#359FFC",
        opacity: '0.9',
      }
    },
  })
);

export const PrimaryButton: VFC<Props> = memo(({ children, onClick }) => {
  const classes = useStyles();

  return (
    <Button variant="contained" className={classes.root} onClick={onClick}>
      {children}
    </Button>
  );
});
