import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { HowChooseUs } from "../components/HowChooseUs";
import { Processus } from "../components/Processus";
import { Faq } from "../components/Faq";
import { Testimonial } from "../components/Testimonial";
import { Appointment } from "../components/Appointment";
import { Header } from "../components/NavBar";
// import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
export const Home = () => {
    return (
        <div className="min-h-screen">
            <Header />
           <main>
            <Hero />
            <Services />
            <HowChooseUs />
            <Processus />
            <Faq />
            <Appointment />
            <Testimonial />
      </main>
       <Footer/>
        </div>
    );
};