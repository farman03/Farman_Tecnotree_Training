import React from 'react';

function Intro() {
  return (
    <section className="intro">
      <div className="img-container">
        <img src="..\images\alb.png" alt="Albert Einstein" width={140} height={140}></img>
      </div>
      <div className="intro-text">
        <h2>Introduction</h2>
        <p>Albert Einstein was a German-born theoretical physicist who developed the theory of relativity, one of the two pillars of modern physics. He is best known for his mass-energy equivalence formula E = mc².</p>
        <p>Einstein was born on March 14, 1879, in Ulm, in the Kingdom of Württemberg in the German Empire. His family moved to Munich when he was an infant. In 1894, Einstein's family moved to Italy, where he stayed in Pavia for a year before leaving to continue his studies in Switzerland. He eventually became a professor at the University of Berlin in 1914.</p>
      </div>
    </section>
  );
}

export default Intro;



//<img src="paris.jpg" alt="Paris"></img>