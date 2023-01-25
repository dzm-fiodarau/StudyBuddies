import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { DialogContentText } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { GoogleSignin, SignInUser } from "../api/loginApi";

function LoginDialog() {
  const [open, setOpen] = React.useState(false);
  const [emailInput, setEmailInput] = React.useState("");
  const [passwordInput, setPasswordInput] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const signInUser = () => {
    const success = SignInUser(emailInput, passwordInput);
    success ? navigate("/") : console.log("Login Fail");
  };

  let navigate = useNavigate();

  const signInWithGoogle = () => {
    const success = GoogleSignin();
    success ? navigate("/") : console.log("Login Fail");
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Login
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Login User</DialogTitle>
        <DialogContentText>
          <Link to={"/register"}>Dont have an account? Register Today</Link>
        </DialogContentText>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={signInUser}>Sign In</Button>
          <Button onClick={signInWithGoogle}>Google Signin</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default LoginDialog;
