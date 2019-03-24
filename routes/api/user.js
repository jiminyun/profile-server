import express from "express";
import passport from "passport";
import User from "../../models/User";
import validateRegisterInput from "../../validation/register";
import validateLoginInput from "../../validation/login";

const router = express.Router();

router.post("/register", (req, res, next) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const {
    body: { name, email, password, password_confirm }
  } = req;

  if (password !== password_confirm) {
    return res.status(400).json({
      errors: {
        password: "is not matched"
      }
    });
  } else {
    const user = User({
      name,
      email
    });
    return User.register(user, password)
      .then(user => res.json(user._id))
      .catch(next =>
        res.json({
          name: next.message
        })
      );
  }
});

// router.post("/login", passport.authenticate("local", ), (req, res) => {
//   //console.log("res", res);
//   const { errors, isValid } = validateLoginInput(req.body);

//   if (!isValid) {
//     return res.status(400).json(errors);
//   }

//   return res.status(200).json(req.user.username);
// });

router.post("/login", function(req, res, next) {
  passport.authenticate("local", function(err, user, info) {
    if (err) {
      console.log(0);
      return next(err);
    }
    if (!user) {
      console.log(1);
      return res.redirect("/login");
    }
    if (info) {
      console.log(info);
    }
    req.logIn(user, function(err) {
      if (err) {
        return next(err);
      }
      return res.redirect("/users/" + user.username);
    });
  })(req, res, next);
});

export default router;
