interface TechnologiesProps {
  list: string[];
}

const Technologies: React.FC<TechnologiesProps> = ({ list }) => {
  return (
    <div className="flex flex-wrap gap-4">
      {list.map((tech) => (
        <div
          key={tech}
          className="font-semibold bg-gray-800 p-3 rounded-md shadow-md text-white"
        >
          {tech}
        </div>
      ))}
    </div>
  );
};

export default Technologies;
