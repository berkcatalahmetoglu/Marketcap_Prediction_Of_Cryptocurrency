import { createStyles, makeStyles } from "@material-ui/core/styles";
import image from "./crypto.jpg";

export default makeStyles(() =>
  createStyles({
    backGroundSix: {
      background: " #141e30" /* fallback for old browsers */,
      background:
        "-webkit-linear-gradient(to right, #141e30, #243b55)" /* Chrome 10-25, Safari 5.1-6 */,
      background:
        "linear-gradient(to right, #141e30, #243b55)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
    },
    backGroundSix2: {
      backgroundImage: `url(${image})`,
      backgroundSize: "cover",
    },
    backGroundSix3: {
      backgroundImage: `url(${image})`,
      backgroundSize: "cover",
      minHeight: "100vh",
    },
    header1: {
      fontSize: 64,
      color: "#fff",
      lineHeight: 0.1,
      fontFamily: "OpenSans-Bold",
    },
    popUpDesign: {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
    },
    imagecss: {
      position: "absolute",
      width: "38%",
      marginLeft: "-33%",
      marginTop: "-5%",
    },

    popUpDesignTwo: {
      display: "flex",
      alignItems: "center",
      justifyContent: "left",
      flexDirection: "column",
    },

    textFieldComponent: {
      borderColor: "#fff",
      borderWidth: 2,

      boxShadow: "none",
      textTransform: "none",
      fontSize: 16,

      background: "transparent",

      border: "2px solid  ",
    },
    headerTextFieldComponent: {
      fontFamily: "OpenSans-Medium",
      color: "#fff",
    },
    signUpButton: {
      "&:hover": {
        backgroundColor: "#ffffff",
        boxShadow: "none",
      },
      "&:active": {
        boxShadow: "none",
        backgroundColor: "#3c52b2",
      },
      line: {
        borderTop: "1px solid red",
      },

      flexGrid: {
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
      },

      relativeGrid: {
        position: "relative",
      },
      absGrid1: {
        position: "absolute",
        left: "-21vw",
      },
      absGrid2: {
        position: "absolute",
      },
      iconColor: {
        color: "#FFFFFF",
      },
      nav3: {
        left: "30px",
        color: "#FFFFFF",
      },
      nav2: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    },
  })
);
