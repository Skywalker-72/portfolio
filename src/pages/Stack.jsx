import { motion } from "framer-motion";

export function Stack() {
  const groups = [
    {
      title: "Frontend",
      items: ["React", "TypeScript", "Tailwind CSS", "Responsive Design"],
    },
    {
      title: "Backend",
      items: ["Node.js / Express", "Spring Boot", "REST APIs", "Microservices"],
    },
    {
      title: "Data & Storage",
      items: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
    },
    {
      title: "Infrastructure",
      items: ["AWS (EC2, RDS, S3)", "Docker", "CI/CD", "Git"],
    },
  ];

  return (
    <Section>
      <h2 className="text-3xl font-bold text-slate-900 mb-16">Capabilities</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {groups.map((group) => (
          <motion.div
            key={group.title}
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="border border-slate-200 rounded-xl p-8 bg-gradient-to-br from-slate-50 to-blue-50 hover:from-indigo-50 hover:to-blue-50 transition-all"
          >
            <h3 className="text-lg font-semibold text-slate-900 mb-6">{group.title}</h3>
            <ul className="space-y-3">
              {group.items.map((item) => (
                <li key={item} className="text-slate-600 flex items-center">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-3"></span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Section({ children, id }) {
  return <section id={id} className="max-w-6xl mx-auto px-6 py-20 lg:py-28 border-b border-slate-100">{children}</section>;
}