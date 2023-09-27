import { AppFooter } from "../cmps/AppFooter";
import { AppHeader } from "../cmps/AppHeader";
import { ContactUs } from "../cmps/ContactUs";
import { TeamIndex } from "../cmps/TeamIndex";
import { About } from "./About";



export function HomePage() {


    return (
        <section className="main-layout">
            <AppHeader />
            <About/>
            <TeamIndex />
            <ContactUs/>
            <AppFooter/>
        </section>
    )
}