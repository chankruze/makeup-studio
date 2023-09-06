import Image from 'next/image';

export const StackedImageCard = () => {
  return (
    <div className="relative">
      <Image
        className="relative h-64 w-80 lg:h-72 lg:w-96 bg-green-300 object-cover"
        src="https://images.unsplash.com/photo-1551890946-3e5446d3a71b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt="bride-in-background"
        width={384}
        height={288}
      />
      <Image
        className="absolute h-80 w-56 inset-0 m-auto lg:h-96 lg:w-64 bg-gray-600 object-cover"
        src="https://images.unsplash.com/photo-1523263685509-57c1d050d19b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
        alt="bride-1"
        width={256}
        height={384}
      />
    </div>
  );
};
