import Image from 'next/image';

interface CardProps {
  title: string;
  imageUrl: string;
}

export default function Card({ title, imageUrl }: CardProps) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <Image src={imageUrl} alt={title} width={300} height={200} className="w-full" />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
    </div>
  );
}
