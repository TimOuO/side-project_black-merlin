import React from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import HomePage from "./pages/HomePage";
import ScrollToTop from "./utils/ScrollToTop";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ContactUsPage from "./pages/ContactUsPage";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import Navbar from "./components/Navbar/Navbar";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      {/* <Header /> */}
      <Navbar/>
      <Switch>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/music">
          <ServicesPage />
        </Route>
        <Route path="/contact-us">
          <ContactUsPage />
        </Route>
        <Route path="/sign-up">
          <SignUpPage/>
        </Route>
        <Route path="/sign-in">
          <SignInPage/>
        </Route>
        <Route path="/">
          <HomePage/>
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
