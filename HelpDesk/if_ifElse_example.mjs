//# class 24.09.24

const COLORS = {
  RED: 1,
  YELLOW: 2,
  GREEN: 3,
};

const ACTIONS = {
  en: {
    RED: "STOP !!!",
    YELLOW: "Make ready",
    GREEN: "Drive",
    DEFAULT: "Right of way rule in effect!",
  },
  no: {
    RED: "STOP !!!",
    YELLOW: "Gjør klar",
    GREEN: "Kjør",
    DEFAULT: "Høyre regel!",
  },
};

let actions = ACTIONS.en;

let traficLightState = COLORS.GREEN;

function traficlightAction(state) {
  if (state == COLORS.RED) {
    console.log(actions.RED);
  } else if (state == COLORS.YELLOW) {
    console.log(actions.YELLOW);
  } else if (state == COLORS.GREEN) {
    console.log(actions.GREEN);
  } else {
    console.log(actions.DEFAULT);
  }
}

traficlightAction(COLORS.GREEN);
traficlightAction(COLORS.YELLOW);
traficlightAction("Banan Splitt");
```

let alder = 16;
let navn = "Christian";
let person = { alder, navn };
//console.log(person.alder);

const ALDERSGRENSE_FOR_SVAK_ALKOHOL = 18;
const ALDERSGRENSE_FOR_ALKOHOL = 21;
/*if (person.alder >= ALDERSGRENSE_FOR_ALKOHOL) {
    console.log("Gjør som du vill, drikk ansvarlig");
  }else if (person.alder >= ALDERSGRENSE_FOR_SVAK_ALKOHOL) {
    console.log("Nøgne Ø er bra greier");
  } else if (person.alder < ALDERSGRENSE_FOR_SVAK_ALKOHOL) {
    console.log("Ta deg en juice box");
  }*/

function slippeIn(person, aldersgrense) {
  if (person.alder >= aldersgrense) {
    console.log("Kom inn, komm inn");
  } else {
    console.log("Ha deg vekk påsan");
  }
}

//slippeIn(person, ALDERSGRENSE_FOR_ALKOHOL);

let personerIKo = [
  {
    alder: 25,
    navn: "Trine",
  },
  {
    alder: 18,
    navn: "Morten",
  },
  {
    alder: 16,
    navn: "Hanna",
  },
  {
    alder: 33,
    navn: "Toby",
  },
];

for (let plassIKo = 0; plassIKo < personerIKo.length; plassIKo++) {
  slippeIn(personerIKo[plassIKo], ALDERSGRENSE_FOR_ALKOHOL);
}