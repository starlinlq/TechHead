import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  root: {
    marginTop: "8%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    height: "auto",
  },
  paper: {
    maxWidth: 1300,
    margin: "auto",
    height: "auto",
    display: "flex",
    alignItems: "center",
  },
  img: { objectFit: "contain", height: 450, width: "100%" },
  des: { maxWidth: "55%" },
  grid: { paddingTop: "5%" },
  img2: { objectFit: "contain", height: 150, width: 100 },
}));
