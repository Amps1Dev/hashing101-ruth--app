import HashForm from '@/frontend/components/HashForm';


export default function Page(): JSX.Element {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-purple-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md p-6 bg-purple-800 bg-opacity-90 text-white rounded-lg shadow-xl">
        <h1 className="text-3xl font-bold text-center mb-6">Password Hashing Demo</h1>
        <HashForm />
      </div>
    </div>
  );
}
