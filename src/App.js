import Grid from "@material-ui/core/Grid";
import React, { useState, useEffect } from "react";
import makeStyles from "./makeStyles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import NumberFormat from "react-number-format";
import target from "./target.svg";
import "./Body.css";
import axios from "axios";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const classes = makeStyles();

  const [marketCap, setMarketCap] = useState(0);

  const [volume, setVolume] = useState(null);
  const [socialVolume, setSocialVolume] = useState(null);
  const [socialDominance, setSocialDominance] = useState(null);
  const [twitterVolume, setTwitterVolume] = useState(null);
  const [bearishSentiment, setBearishSentiment] = useState(null);
  const [bullishSentiment, setBullishSentiment] = useState(null);
  const [marketDominance, setMarketDominance] = useState(null);

  const handleClickToOpen = () => {
    setOpen(true);
  };

  const handleToClose = () => {
    setOpen(false);
  };

  const [open, setOpen] = useState(false);

  const handlePredict = async () => {
    if (
      socialVolume === null ||
      volume === null ||
      socialDominance == null ||
      twitterVolume == null ||
      bullishSentiment == null ||
      bearishSentiment == null ||
      marketDominance == null
    ) {
      toast.error("You entered invalid value.");
      return;
    }

    const body = {
      volume: volume,
      socialVolume: socialVolume,
      socialDominance: socialDominance,
      twitterVolume: twitterVolume,
      bearishSentiment: bearishSentiment,
      bullishSentiment: bullishSentiment,
      marketDominance: marketDominance,
    };

    var NumberFormat = require("react-number-format");
    const response = await axios.post("/predictV2", body);
    console.log(response.data);
    setMarketCap(response.data.Output);

    setOpen(true);
  };

  return (
    <Grid container component="main">
      <Grid
        item
        md={2}
        elevation={6}
        square
        className={classes.backGroundSix2}
        style={{
          display: "flex",
          justifyContent: "right",
        }}
      >
        <Grid
          style={{
            display: "flex",

            marginTop: "10px",
          }}
        ></Grid>
      </Grid>
      <Grid item md={8} className={classes.backGroundSix}>
        <Box
          sx={{
            my: 8,
            mx: 4,

            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div className={classes.header1}>Predict Market Cap.</div>

          <Box
            component="form"
            noValidate
            sx={{
              width: "50vw",
              mt: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Grid style={{ marginTop: "4vw" }} container spacing={4} xs={12}>
              <Grid item xs={4}>
                <Typography class={classes.headerTextFieldComponent}>
                  Volume
                </Typography>
                <Grid>
                  <TextField
                    item
                    variant="outlined"
                    name="Volume"
                    type="number"
                    value={volume}
                    inputProps={{
                      className: "digitsOnly",
                    }}
                    onChange={(e) => setVolume(e.target.value)}
                    InputLabelProps={{
                      style: { color: "lightgray", background: "#transparent" },
                    }}
                    sx={{
                      input: {
                        color: "white",
                      },

                      label: { color: "white" },
                      borderColor: "white",
                      borderWidth: 2,

                      boxShadow: "none",
                      textTransform: "none",
                      fontSize: 16,

                      background: "transparent",

                      width: "12vw",
                      border: "2px solid white ",
                    }}
                  />
                </Grid>
              </Grid>
              <Grid
                item
                xs={4}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography class={classes.headerTextFieldComponent}>
                  Social Volume
                </Typography>
                <TextField
                  variant="outlined"
                  item
                  name="    Social Volume"
                  //helperText={socialVolume < 1 ? "İnvalid Value" : ""}
                  type="number"
                  value={socialVolume}
                  onChange={(e) => setSocialVolume(e.target.value)}
                  InputLabelProps={{
                    style: { color: "lightgray" },
                  }}
                  helperTextProps={{
                    style: { color: "lightgray" },
                  }}
                  sx={{
                    input: {
                      color: "white",
                    },
                    label: { color: "white" },
                    borderColor: "white",
                    borderWidth: 2,

                    boxShadow: "none",
                    textTransform: "none",
                    fontSize: 16,
                    width: "12vw",
                    background: "transparent",

                    border: "2px solid white ",
                  }}
                />
              </Grid>
              <Grid
                item
                xs={4}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography class={classes.headerTextFieldComponent}>
                  Social Dominance
                </Typography>
                <TextField
                  name="    Social Dominance"
                  type="number"
                  margin="normal"
                  variant="outlined"
                  value={socialDominance}
                  onChange={(e) => setSocialDominance(e.target.value)}
                  InputLabelProps={{
                    style: { color: "lightgray" },
                  }}
                  sx={{
                    input: {
                      color: "white",
                      backgroundColor: "transparent",
                    },

                    label: { color: "white", backgroundColor: "transparent" },
                    fontSize: 16,
                    width: "12vw",
                    background: "transparent",
                    marginTop: "0px",
                    border: "2px solid white ",
                  }}
                  fullWidth
                  className={classes.formInput}
                />
              </Grid>
              <Grid item xs={4}>
                <Typography class={classes.headerTextFieldComponent}>
                  Twitter Volume
                </Typography>
                <TextField
                  variant="outlined"
                  type="number"
                  item
                  margin="normal"
                  name="Twitter Volume"
                  id="Phone"
                  value={twitterVolume}
                  onChange={(e) => setTwitterVolume(e.target.value)}
                  InputLabelProps={{
                    style: { color: "lightgray" },
                  }}
                  sx={{
                    input: {
                      color: "white",
                    },
                    label: { color: "white" },
                    borderColor: "white",
                    borderWidth: 2,
                    width: "12vw",
                    boxShadow: "none",
                    textTransform: "none",
                    fontSize: 16,

                    background: "transparent",

                    border: "2px solid white ",
                  }}
                />
              </Grid>
              <Grid
                item
                xs={4}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography class={classes.headerTextFieldComponent}>
                  Bearish Sentiment
                </Typography>
                <TextField
                  autocomplete="Bearish Sentiment"
                  type="number"
                  name="Bearish Sentiment"
                  margin="normal"
                  variant="outlined"
                  value={bearishSentiment}
                  onChange={(e) => setBearishSentiment(e.target.value)}
                  InputLabelProps={{
                    style: { color: "lightgray" },
                  }}
                  sx={{
                    input: {
                      color: "white",
                      backgroundColor: "transparent",
                    },
                    width: "12vw",
                    label: { color: "white", backgroundColor: "transparent" },
                    fontSize: 16,

                    background: "transparent",

                    border: "2px solid white ",
                  }}
                  fullWidth
                  className={classes.formInput}
                />
              </Grid>
              <Grid
                item
                xs={4}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography class={classes.headerTextFieldComponent}>
                  Bullish Sentiment
                </Typography>
                <TextField
                  variant="outlined"
                  type="number"
                  item
                  margin="normal"
                  name="Bullish Sentiment"
                  value={bullishSentiment}
                  onChange={(e) => setBullishSentiment(e.target.value)}
                  id="Bullish Sentiment"
                  InputLabelProps={{
                    style: { color: "lightgray" },
                  }}
                  sx={{
                    input: {
                      color: "white",
                    },
                    label: { color: "white" },
                    borderColor: "white",
                    borderWidth: 2,

                    boxShadow: "none",
                    textTransform: "none",
                    fontSize: 16,
                    width: "12vw",
                    background: "transparent",

                    border: "2px solid white ",
                  }}
                />
              </Grid>
              <Grid item xs={4}>
                <Typography class={classes.headerTextFieldComponent}>
                  Market Dominance
                </Typography>
                <TextField
                  variant="outlined"
                  item
                  margin="normal"
                  name="Market Dominance"
                  type="number"
                  id="Phone"
                  value={marketDominance}
                  onChange={(e) => setMarketDominance(e.target.value)}
                  InputLabelProps={{
                    style: { color: "lightgray" },
                  }}
                  sx={{
                    input: {
                      color: "white",
                    },
                    label: { color: "white" },
                    borderColor: "white",
                    borderWidth: 2,
                    width: "12vw",
                    boxShadow: "none",
                    textTransform: "none",
                    fontSize: 16,

                    background: "transparent",

                    border: "2px solid white ",
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <Button
                  sx={{
                    backgroundColor: "#FF6412",
                    "&:hover": {
                      backgroundColor: "#FF6412",
                      boxShadow: "none",
                    },
                    marginTop: "80px",
                    fontSize: "16px",
                    fontFamily: "OpenSans-Medium",
                    width: "300px",
                    marginLeft: "40px",
                  }}
                  variant="contained"
                  size="large"
                  onClick={handlePredict}
                >
                  Predict
                </Button>

                <ToastContainer autoClose={5000}></ToastContainer>

                <Dialog
                  align="center"
                  fullWidth
                  open={open}
                  onClose={handleToClose}
                >
                  <DialogTitle id="id">
                    <Box
                      style={{
                        height: "5px",
                        marginTop: "15px",
                        marginRight: "20px",
                      }}
                      display="flex"
                      justifyContent="right"
                    >
                      <Box>
                        <IconButton onClick={handleToClose}>
                          <CloseIcon />
                        </IconButton>
                      </Box>
                    </Box>
                  </DialogTitle>

                  <DialogContent
                    style={{
                      height: "100%",
                    }}
                  >
                    <DialogContentText>
                      <Grid container xs={12} className={classes.popUpDesign}>
                        <Grid item xs={6}>
                          <Typography
                            style={{
                              fontFamily: "OpenSans-Bold",
                              color: "black",
                              fontSize: 36,
                              width: "350px",

                              marginTop: "-0.5vw",
                            }}
                          >
                            <img
                              className={classes.imagecss}
                              src={target}
                            ></img>
                            Predicted Result:
                          </Typography>
                          <Typography
                            style={{
                              fontFamily: "OpenSans-Medium",
                              color: "black",
                              fontSize: 30,
                            }}
                          >
                            <Grid>
                              <Typography
                                style={{
                                  fontFamily: "OpenSans-Medium",
                                  color: "black",
                                  marginTop: "5px",
                                }}
                              ></Typography>
                              <NumberFormat
                                value={marketCap}
                                className="foo"
                                style={{
                                  marginLeft: "1.5vw",
                                }}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"$"}
                                renderText={(value, props) => (
                                  <div {...props}>{value}</div>
                                )}
                              />
                            </Grid>
                          </Typography>
                        </Grid>
                      </Grid>
                    </DialogContentText>
                  </DialogContent>
                </Dialog>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>

      <Grid item md={2} className={classes.backGroundSix3}></Grid>
    </Grid>
  );
}

export default App;
