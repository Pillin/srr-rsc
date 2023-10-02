import Header from "components/Header";

const Mode = ({ children }) => (
  <section className="flex flex-col items-center py-8 bg-white dark:bg-black">
    <section className="max-w-5xl w-full px-4 min-h-screen">
      <Header />
      {children}
    </section>
  </section>
);

export default Mode;
