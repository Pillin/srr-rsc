import Link from "next/link";
import { getAudio, getPhonetic } from "utils/parse";

const PartOfSpeech = ({ partOfSpeech, definitions, synonyms, antonyms }) => (
  <section className="flex flex-col py-6 gap-5">
    <section className="flex ">
      <p className="text-2xl font-bold dark:text-white">{partOfSpeech}</p>
      <div className="" />
    </section>
    <p className="text-gray-500 dark:text-gray-400">Meaning</p>
    <ul className="list-disc text-purple-600 ps-4">
      {definitions.map(({ definition, example }, index) => (
        <li key={`${partOfSpeech}-${index}`} className="py-1">
          <p className="text-gray-800 dark:text-gray-200 py-0 my-0">
            {definition}
          </p>
          {example && (
            <p className="text-gray-500 dark:text-gray-400 py-1">
              &quot;{example}&quot;
            </p>
          )}
        </li>
      ))}
    </ul>

    {synonyms.length > 0 && (
      <section className="flex gap-1">
        <p className="pe-4 text-gray-500 dark:text-gray-400">Synonyms</p>
        {synonyms.map((elem, index, array) => (
          <section key={elem}>
            <Link
              href={`/?search=${elem}`}
              className="font-bold text-purple-600"
            >
              {elem}
            </Link>
            {index !== array.length - 1 && <span>,</span>}
          </section>
        ))}
      </section>
    )}
  </section>
);

const WordDefinition = ({
  word,
  phonetic,
  phonetics,
  meanings,
  license,
  sourceUrls,
}) => {
  const audio = getAudio({ phonetics });

  return (
    <section>
      <section className="flex justify-between py-4">
        <section>
          <p className="text-6xl font-bold dark:text-white">{word}</p>
          <p className="text-2xl text-purple-400">
            {getPhonetic({ phonetic, phonetics })}
          </p>
        </section>
        {audio && (
          <audio height="75" controls controlsList="nodownload noplaybackrate">
            <source src={audio} type="audio/mp3" />
            Your browser does not support the video tag.
          </audio>
        )}
      </section>

      {meanings.map((elem) => (
        <PartOfSpeech key={`${elem.partOfSpeech}`} {...elem} />
      ))}
    </section>
  );
};

export default WordDefinition;
