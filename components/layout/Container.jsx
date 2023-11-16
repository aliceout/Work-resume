export default function Container({ children }) {
  return (
    <div
      id="viewport"
      className="flex h-full min-h-screen min-w-screen bg-cover bg-center"
      style={{ backgroundImage: `url('/background/poly.png')` }}
    >
      <div
        id="container"
        className="flex flex-col h-full bg-transparent min-w-screen xl:w-[1300px] mx-auto"
      >
        {children}
      </div>
    </div>
  );
}
