function layout({ children }) {
  throw new Error("erro layout");
  return (
    <>
      <h2 className="w-full text-white text-center h-5 bg-blue-900">
        layout blog
      </h2>

      {children}
    </>
  );
}

export default layout;
