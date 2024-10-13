"use client";


import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <nav className="navbar">
        <Link href="/">
          <h1>Home</h1>
        </Link>
        <Link href="/about">
          <h1>About</h1>
        </Link>
      </nav>
      
      <div className="container">
        <h1 className="title">Latest Blogs</h1>
        <div className="blogGrid">
          
          <div className="blogCard">
            <img src="/Quantum Computing.jpg" alt="Quantum Computing Basics for Developers" className="blogImage" width="300" height="200" />
            <h2 className="blogTitle">Quantum Computing Basics for Developers</h2>
            <p className="blogDescription">Learn the fundamentals of quantum computing and how it applies to software development.</p>
          </div>

          <div className="blogCard">
            <img src="/Edc.jpeg" alt="Edge Computing vs. Cloud Computing" className="blogImage" width="300" height="200" />
            <h2 className="blogTitle">Edge Computing vs. Cloud Computing</h2>
            <p className="blogDescription">An in-depth comparison of edge and cloud computing and their impact on modern applications.</p>
          </div>

          <div className="blogCard">
            <img src="/MLModel.jpeg" alt="Machine Learning Model Interpretability" className="blogImage" width="300" height="200" />
            <h2 className="blogTitle">Machine Learning Model Interpretability</h2>
            <p className="blogDescription">Explore methods for making machine learning models more interpretable and understandable.</p>
          </div>

          <div className="blogCard">
            <img src="Ai.jpeg" alt="Comparing Programming Languages for AI Development" className="blogImage" width="300" height="200" />
            <h2 className="blogTitle">Comparing Programming Languages for AI Development</h2>
            <p className="blogDescription">Find out which programming languages are best suited for AI development.</p>
          </div>

          <div className="blogCard">
            <img src="TS.jpeg" alt="The Future of TypeScript in Frontend Development" className="blogImage" width="300" height="200" />
            <h2 className="blogTitle">The Future of TypeScript in Frontend Development</h2>
            <p className="blogDescription">Understand the growing role of TypeScript in the frontend development landscape.</p>
          </div>

          <div className="blogCard">
            <img src="nlp.png" alt="Advancements in Natural Language Processing" className="blogImage" width="300" height="200" />
            <h2 className="blogTitle">Advancements in Natural Language Processing</h2>
            <p className="blogDescription">Stay updated on the latest advancements in Natural Language Processing and its applications.</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BMICalculator;
