import React from 'react';
import './About.css'; // Assuming you will create a corresponding CSS file for styles

const About = () => {
    return (
        <section className="about">
            <div className="about-content">
                <h2>About Kushagra</h2>
                <p>
                    Kushagra is an independent pop artist from India, known for his unique sound that blends traditional Indian music with contemporary pop influences. 
                    His journey began in the vibrant streets of Delhi, where he discovered his passion for music at a young age. 
                    With a voice that resonates with emotion and lyrics that tell stories, Kushagra aims to connect with listeners on a deeper level.
                </p>
                <p>
                    Influenced by a diverse range of artists, Kushagra's music reflects his experiences and the rich culture of India. 
                    He believes in the power of music to transcend boundaries and bring people together.
                </p>
            </div>
            <div className="about-timeline">
                {/* Interactive timeline or carousel can be implemented here */}
            </div>
        </section>
    );
};

export default About;