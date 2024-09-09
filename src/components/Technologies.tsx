interface TechnologiesProps {
  list: string[];
}

const Technologies: React.FC<TechnologiesProps> = ({ list }) => {
  return (
    <div className="flex flex-wrap gap-4">
      {list.map((tech) => (
        <div
          key={tech}
          className="rounded-md bg-gray-800 p-3 font-semibold text-white shadow-md"
        >
          {tech}
        </div>
      ))}
    </div>
  );
};

export default Technologies;
