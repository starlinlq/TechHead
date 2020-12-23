import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  root: { marginTop: "5%", width: "100%" },
  paper: { maxWidth: 1000, margin: "auto", height: 450 },
  img: { objectFit: "contain", height: 450 },
  des: { maxWidth: "45%" },
}));
