export const getAudio = ({ phonetics }) => {
  let audio = phonetics?.filter((elem) => elem.audio) || [];
  audio = audio.length > 0 ? audio[0] : {};
  return audio.audio;
};

export const getPhonetic = ({ phonetic, phonetics }) => {
  if (phonetic) return phonetic;
  let customPhonetic = phonetics?.filter((elem) => elem.text) || [];
  customPhonetic = customPhonetic.length > 0 ? customPhonetic[0] : {};
  return customPhonetic.text;
};
