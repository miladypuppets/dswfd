// src/memes.js

function importAll(r) {
  return r.keys().map((item) => ({
    src: r(item), // Use r(item) instead of r(item).default
    filename: item.replace('./', ''),
  }));
}

const memes = importAll(require.context('./memes', false, /\.(png|jpe?g|gif)$/i));

console.log('Imported Memes:', memes); // For debugging

export default memes;
