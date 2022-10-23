export function generate_token(length) {
  //edit the token allowed characters
  const a =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split("");
  const b = [];
  for (let i = 0; i < length; i++) {
    let j = (Math.random() * (a.length - 1)).toFixed(0);
    b[i] = a[j];
  }
  return b.join("");
}

export const improvedSearch = (str, searchedWord) => {
  //   console.time();
  //   debugger;
  // const str="He is a boy. This can be difficult. He can understand    this boy. This is it"
  let lis = str.split(/\s+/);
  // const searchedWord="this boy"

  const searchedWordLis = searchedWord.split(/\s+/);

  let n = lis.length;

  let kn = searchedWordLis.length;
  let i = 0;
  for (let word of lis) {
    if (
      searchedWordLis[0].toLowerCase() === word.toLowerCase() ||
      (kn === 1 &&
        searchedWordLis[0].toLowerCase() ===
          word.substr(0, searchedWordLis[0].length).toLowerCase())
    ) {
      console.log("true");
      let k = 0;
      let i2 = i;

      while (i < n && k < kn) {
        console.log(searchedWordLis[k]);
        console.log(lis[i2]);

        const searchedCurrentWordLength = searchedWordLis[k].length;

        if (
          searchedWordLis[k].toLowerCase() === lis[i2].toLowerCase() ||
          (k === kn - 1 &&
            searchedWordLis[k].toLowerCase() ===
              lis[i2].substr(0, searchedCurrentWordLength).toLowerCase())
        ) {
          k++;
        } else {
          break;
        }
        i2++;
      }
      if (k === kn) {
        return true;
      }
    }
    i++;
  }

  //   console.timeEnd();
  return false;
};

export const findNote = (editingNote, notes) => {
  const note = notes.find((note) => note.id === editingNote.id);
  return note;
};
