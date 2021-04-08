import React from "react";
import PublicNavbar from "../PublicNavbar";
import HomePage from "../HomePage";
import LoginPage from "../LoginPage";
import RegisterPage from "../RegisterPage";
import { Container } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import AlertMsg from "./AlertMsg";
import BlogDetailPage from "../BlogDetailPage";
import AddEditBlogPage from "../AddEditBlogPage";
import PrivateRoute from "../Routes/PrivateRoute";
import VerifyEmailPage from "../VerifyEmailPage";
import ForgotPassword from "../ForgotPassword";

const PublicLayout = () => {
  return (
    <>
      <PublicNavbar />
      <Container>
        <AlertMsg />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/blogs/:id" component={BlogDetailPage} />
          <Route exact path="/verify/:code" component={VerifyEmailPage} />
          <Route exact path="/forgotpassword" component={ForgotPassword} />
          <PrivateRoute exact path="/blog/add" component={AddEditBlogPage} />
          <PrivateRoute
            exact
            path="/blog/edit/:id"
            component={AddEditBlogPage}
          />
          <Route component={NotFoundPage} />
        </Switch>
      </Container>
    </>
  );
};

export default PublicLayout;
