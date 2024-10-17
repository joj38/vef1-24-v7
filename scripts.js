/**
 * Verkefni 7 í Vefforritun 1, 2024.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Kveikið á `Check JS` í Visual Studio Code til að sjá mögulegar villur.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 */

//------------------------------------------------------------------------------
// Fastar

/** Íslenskir sérhljóðar */
const CONSONANTS = "bcdfghjklmnpqrstvwxz".split("");

/** Íslenskir samhljóðar */
const VOWELS = "aeiouyáéýúíóöæ".split("");

//------------------------------------------------------------------------------
// Hjálparföll

/**
 * Athuga hvort óþekkt gildi sé strengur eða ekki.
 * @param {unknown} str Óþekkt gildi sem athuga á hvort sé strengur.
 * @returns `true` ef `str` er strengur, annars `false`.
 */
// Skilgreinum anonymous fall og bindum við breytuna `isString`
const isString = (str) => typeof str === "string";

// Prófum fallið
console.assert(isString("hi") === true, "isString: skilar `true` fyrir streng");
console.assert(isString(42) === false, "isString: skilar `false` fyrir tölu");
console.assert(isString(null) === false, "isString: skilar `false` fyrir null");

/**
 * Öruggt fall sem skilar fylki af strengjum úr gefnum streng, skipt upp með
 * gefnum afmkarkara (separator).
 * @param {string} str Hugsanlegur strengur sem skal skipta.
 * @returns {string[]} Fylki af strengjum eða tóma fylkið ef afmarkari kom
 * ekki fram.
 */
function split(str, separator = " ") {
  if (!isString(str)) {
    return [];
  }

  return str.split(separator);
}

//------------------------------------------------------------------------------
// Grunnföll sem skilgreina á

function longest(str) {
  if (isString(str)) {
    split = str.split(" ");
    let ans = "";
    for (const word of split) if (ans.length < word.length) ans = word;

    return ans;
  }
  return null;
}

console.assert(
  longest(120) === null,
  "átti að fá null en fékk " + longest(120)
);
console.assert(
  longest("hallo heimur!") === "heimur!",
  "átti að fá heimur! en fékk " + longest("hallo heimur!")
);

function shortest(str) {
  if (isString(str)) {
    split = str.split(" ");
    let ans = "";
    for (const word of split)
      if (word !== "" && word !== " ")
        if (ans.length > word.length || ans === "") ans = word;

    return ans;
  }
  return null;
}
console.assert(
  shortest(120) === null,
  "átti að fá null en fékk " + shortest(120)
);
console.assert(
  shortest("hallo  heimur! ") === "hallo",
  "átti að fá hallo en fékk " + shortest("hallo  heimur! ")
);

function reverse(str) {
  if (isString(str)) {
    split = str.split("");
    rev = split.reverse();
    return rev.join("");
  }
  return null;
}
console.assert(
  reverse("hello") === "olleh",
  "átti að fá olleh en fékk " + reverse("hello")
);
console.assert(
  reverse(123) === null,
  "átti að fá null en fékk " + reverse(123)
);
console.assert(
  reverse("") === "",
  "átti að fá tómastreinginn en fékk " + reverse("")
);

function palindrome(str) {
  if (isString(str)) {
    str = str.toLowerCase();
    return str === reverse(str) && str !== "";
  }
  return false;
}
console.assert(
  palindrome("hallo heimur") === false,
  "átti að fá false en fékk " + palindrome("hallo heimur")
);
console.assert(
  palindrome(12321) === false,
  "átti að fá false en fékk " + palindrome(12321)
);
console.assert(
  palindrome("") === false,
  "átti að fá false en fékk " + palindrome("")
);
console.assert(
  palindrome("Hallollah") === true,
  "átti að fá true en fékk " + palindrome("Hallollah")
);

function vowels(str) {
  if (isString(str)) {
    count = 0;
    split = str.split("");
    for (const char of split)
      for (const vowel of VOWELS) {
        if (char === vowel) {
          count++;
          break;
        }
      }
    return count;
  }
  return 0;
}
console.assert(vowels("") === 0, "átti að fá 0 en fékk " + vowels(""));
console.assert(vowels(123) === 0, "átti að fá 0 en fékk " + vowels(123));
console.assert(
  vowels("abcdefg") === 2,
  "átti að fá 2 en fékk " + vowels("abcdefg")
);

function consonants(str) {
  if (isString(str)) {
    count = 0;
    split = str.split("");
    for (const char of split)
      for (const cons of CONSONANTS) {
        if (char === cons) {
          count++;
          break;
        }
      }
    return count;
  }
  return 0;
}
console.assert(consonants("") === 0, "átti að fá 0 en fékk " + consonants(""));
console.assert(
  consonants(123) === 0,
  "átti að fá 0 en fékk " + consonants(123)
);
console.assert(
  consonants("abcdefg") === 5,
  "átti að fá 5 en fékk " + consonants("abcdefg")
);

//------------------------------------------------------------------------------
// Leiðbeint ferli

function start() {
  notDone = true;
  alert(
    "hér tökum við inn gildi fyrir strenginn s svo munu við keyra öll föllin með s og gefa þér útkomuna"
  );
  while (notDone) {
    s = prompt("skrifaðu gildið fyrir streingin s hér");
    if (isString(s) && s !== "") {
      alert(
        "longest(s) = " +
          longest(s) +
          "\n shortest(s) = " +
          shortest(s) +
          "\n reverse(s) = " +
          reverse(s) +
          "\n vowels(s) = " +
          vowels(s) +
          "\n consonants(s) = " +
          consonants(s) +
          "\n palindrome(s) = " +
          palindrome(s)
      );
      b = confirm("viltu gera aftur?");
      if (!b) notDone = false;
    }
    if (s === null) notDone = false;
  }
}
