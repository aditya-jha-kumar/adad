export default function userProfile({ params }: any) {
  return (
    <div className="flex flex-col items-center justify-conter min-h-screen py-2">
      <h1>Profile</h1>
      <hr />
      <p className="text-4xl">Profile Page {params.id}</p>
    </div>
  );
}
