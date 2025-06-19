import React from 'react';

export function Skills() {
  const categories = {
    'Languages & Tools': ['Python', 'SQL', 'Spark', 'Git', 'Streamlit', 'VS Code', 'MySQL'],
    'ML/DS Methods': ['BERT', 'LLM Fine-tuning', 'A/B Testing', 'LTV Modeling', 'Prompt Engineering', 'RAG'],
    'MLOps & Deployment': ['MLflow', 'Airflow', 'Vertex AI', 'Ray', 'Docker', 'LangGraph'],
    'Other': ['Entity Recognition', 'Schema Mapping', 'Cloud Deployment']
  };

  return (
    <section className="px-6 py-16 bg-gray-900" id="skills">
      <h2 className="text-3xl font-bold text-teal-400 mb-6">Skills</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {Object.entries(categories).map(([category, skills]) => (
          <div key={category}>
            <h3 className="text-xl font-semibold text-white mb-2">{category}</h3>
            <ul className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="bg-teal-600 text-white px-3 py-1 rounded-full text-sm shadow"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}