import Mode from "components/Mode";
import Input from "components/Input";
import ErrorMessage from "components/ErrorMessage";
import { getMeaning } from "services/Dictionary";

const Home = async ({ params, searchParams }) => {
  console.log({ searchParams });
  const { error, data } = await getMeaning({ ...searchParams });
  console.log(data, error);
  return (
    <Mode>
      <section className="flex flex-col py-8 gap-4">
        <Input />
        {error && <ErrorMessage {...data} />}
        {!error && <></>}
      </section>
    </Mode>
  );
};

export default Home;
