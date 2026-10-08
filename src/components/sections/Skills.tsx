const groups = [
  { number: '01', title: 'Interfaces & experiences', text: 'From responsive web apps to mobile products.', skills: ['React', 'React Native', 'Next.js', 'TypeScript', 'Expo', 'JavaFX'] },
  { number: '02', title: 'Logic & foundations', text: 'The languages and tools behind the behaviour.', skills: ['Java', 'Python', 'JavaScript', 'C', 'Git', 'JUnit'] },
  { number: '03', title: 'Systems & workflows', text: 'Connecting services and making work flow.', skills: ['Docker', 'AWS', 'Firebase', 'Linux', 'n8n', 'Bash'] },
];
export default function Skills() {
  return <section id="skills" className="shell skills-section" aria-labelledby="skills-title"><div className="skills-intro"><p className="eyebrow">THE TOOLKIT</p><h2 id="skills-title">Different tools.<br /><span className="serif">One curious mind.</span></h2></div><div className="skills-grid">{groups.map(group => <div className="skill-group" key={group.number}><span className="skill-number">{group.number}</span><h3>{group.title}</h3><p>{group.text}</p><div className="tags">{group.skills.map(skill => <span key={skill}>{skill}</span>)}</div></div>)}</div></section>;
}
