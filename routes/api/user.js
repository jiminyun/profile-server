import express from "express";
import passport from "passport";
import jwt from "jsonwebtoken";

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

router.post("/login", function(req, res, next) {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  passport.authenticate("local", function(err, user, info) {
    if (!user) {
      errors.email = "User not found";
      return res.status(404).json(errors);
    }
    req.logIn(user, function(err) {
      if (err) {
        return next(err);
      }
      const payload = {
        id: user._id,
        name: user.name
      };
      jwt.sign(
        payload,
        "secret",
        {
          expiresIn: 3600
        },
        (err, token) => {
          if (err) console.error("there is some error in token", err);
          else {
            res.json({
              success: true,
              token: `Bearer ${token}`
            });
          }
        }
      );
    });
  })(req, res, next);
});

export default router;
