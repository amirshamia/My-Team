

export function About() {
    return (
        <section className="about-container">
            <main >
                <section className="title-container">

                    <div className="line"></div>
                    <div>Build & manage <br /> distributed teams <br /> like no one else.</div>
                </section>
                <section className="info">
                    <article>
                        <img src="./src/assets/PP-images/icon-person.svg" alt="" />
                        <div>Experienced Individuals</div>
                        <p>Our network is made up of highly experienced professionals <br /> who are passionate about what they do.</p>
                    </article>
                    <article>
                        <img src="./src/assets/PP-images/icon-cog.svg" alt="" />
                        <div>Easy to Implement</div>
                        <p>Our processes have been refined over years of implementation <br /> meaning our teams always deliver.</p>
                    </article>
                    <article>
                        <img src="./src/assets/PP-images/icon-chart.svg" alt="" />
                        <div>Enhanced Productivity</div>
                        <p>Our customized platform with in-built analytics helps you <br /> manage your distributed teams.</p>
                    </article>

                </section>
            </main>
            <img className="img1" src="./src/assets/PP-images/bg-pattern-home-3.svg" alt="" />

        </section>
    )
}