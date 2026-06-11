import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ContactUs from "./pages/ContactUs";
import Layout from "./ui/Layout";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Route>
      </Routes>
    </>
  );
}
