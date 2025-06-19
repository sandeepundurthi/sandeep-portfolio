import React from 'react';

const projects = [
  {
    title: 'Fraud Detection System',
    description: 'Engineered a fraud detection model achieving 99% AUC-ROC accuracy using anomaly detection and ML algorithms.',
    tech: ['Python', 'TensorFlow', 'Scikit-learn'],
  },
  {
    title: 'House Price Prediction',
    description: 'Built a real estate price prediction system using statistical modeling and XGBoost. Ranked Top 20% on Kaggle.',
    tech: ['Python', 'Scikit-learn', 'XGBoost'],
  },
  {
    title: 'Twitter Sentiment Analysis',
    description: 'Developed an entity-level sentiment classifier for tweets with 96.89% accuracy using traditional ML and DL models.',
    tech: ['Python', 'TensorFlow', 'NLTK'],
  },
  {
    title: 'Fake Job Posting Detection',
    description: 'Created a Streamlit app using TF-IDF + Logistic Regression to detect fraudulent job listings (94% accuracy).',
    tech: ['Python', 'Scikit-learn', 'Streamlit'],
  },
];

export function Projects() {
  return (
    <section className="px-6 py-16" id="projects">
      <h2 className="text-3xl font-bold text-teal-400 mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div key={project.title} className="border border-teal-600 p-4 rounded-lg shadow-lg bg-gray-800">
            <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-2">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span key={tech} className="bg-teal-700 text-white px-2 py-1 text-xs rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}