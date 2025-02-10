interface SectionHeaderProps {
  title: string;
  subtitle: string;
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  className = '',
}: SectionHeaderProps) {
  return (
    <div className={`bg-gray-100 text-white py-12 pt-48 ${className}`}>
      <div className="max-w-screen-xl mx-auto px-4 text-center text-gray-800">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4">
          {title}
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl">{subtitle}</p>
      </div>
    </div>
  );
}
