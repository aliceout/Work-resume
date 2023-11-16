export default function Container({ children }) {
  return (
    <div id="viewport" className="flex h-full min-h-screen bg-white min-w-screen">
      <div
        id="container"
        className="flex flex-col h-full bg-white min-w-screen xl:w-[1300px] mx-auto"
      >
        {children}
      </div>
    </div>
  );
}
