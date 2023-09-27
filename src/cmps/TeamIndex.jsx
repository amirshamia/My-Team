import { TeamList } from "./TeamList"


export function TeamIndex() {
const team=[
    {
        name: 'Kady Baker',
        disc:' “The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”',
        avatar: './src/assets/PP-images/avatar-kady.jpg'
    },
    {
        name: 'Aiysha Reese',
        disc:' “We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!',
        avatar: './src/assets/PP-images/avatar-aiysha.jpg'
    },
    {
        name: 'Arthur Clarke',
        disc:' “Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”',
        avatar: './src/assets/PP-images/arthur-aiysha.jpg'
    }
]

    return (
        <section className="team-container">
            <img className="img1" src="./src/assets/PP-images/bg-pattern-home-4-about-3.svg" alt="" />
            <main>

            <div className="title">Delivering real results for top <br /> companies. Some of our <span>success stories.</span> </div>
           <section className="cards-container"> 
             <TeamList team={team}/>
            
            </section>
            </main>
            <img className="img2" src="./src/assets/PP-images/bg-pattern-home-5.svg" alt="" />

        </section>

    )
}