'use server'

const ErrorMessage = ({ title, message }) => (
  <section className="flex flex-col items-center h-[50vh] justify-center gap-4">
    <p className="text-6xl">&#128533;</p>
    <p className="text-xl text-gray-800 font-bold dark:text-white">{title}</p>
    <p className="text-base text-gray-400 text-center">{message}</p>
  </section>
);

export default ErrorMessage;
