import Image from 'next/image';

export const StackedImageCard = () => {
  return (
    <div className="relative">
      <Image
        className="relative h-72 w-[400px] bg-green-300 object-cover"
        src="https://images.unsplash.com/photo-1551890946-3e5446d3a71b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt="bride-in-background"
        width={384}
        height={288}
      />
      <Image
        className="absolute inset-0 m-auto h-96 w-64 bg-gray-600 object-cover"
        src="https://images.unsplash.com/photo-1523263685509-57c1d050d19b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
        alt="bride-1"
        width={256}
        height={384}
      />
    </div>
  );
};
