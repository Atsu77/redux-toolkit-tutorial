import React, { memo, ReactNode, VFC } from "react";
import { Button, makeStyles, createStyles } from "@material-ui/core";

type Props = {
  children: ReactNode;
  onClick: () => void;
};

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      backgroundColor: "#808080",
      color: "#fff",
      '&:hover': {
        backgroundColor: "#808080",
        opacity: '0.9',
      }
    },
  })
);

export const SecondaryButton: VFC<Props> = memo(({ children, onClick }) => {
  const classes = useStyles();

  return (
    <Button variant="contained" onClick={onClick} className={classes.root}>
      {children}
    </Button>
  );
});
