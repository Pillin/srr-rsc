import Mode from "components/Mode";
import Input from "components/Input";
import ErrorMessage from "components/ErrorMessage";
import WordDefinition from "components/WordDefinition";
import { getMeaning } from "services/Dictionary";

const Home = async ({ searchParams }) => {
  const { error, data } = await getMeaning({ ...searchParams });
  return (
    <Mode>
      <section className="flex flex-col py-8 gap-4">
        <Input />
        {error && <ErrorMessage {...data} />}
        {!error && data?.length > 0 && <WordDefinition {...data[0]} />}
      </section>
    </Mode>
  );
};

export default Home;
