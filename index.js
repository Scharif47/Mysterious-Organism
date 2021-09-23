// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (num, dnaBases) => {
  return {
    specimenNum: num,
    dna: dnaBases,
    mutate() {
      // generate random dnaIndex
      let randomIndex = Math.floor(Math.random() * this.dna.length);
      let oldBase = this.dna[randomIndex];

      // avoid same base
      let altBases = ["A", "T", "C", "G"];
      altBases.splice(altBases.indexOf(oldBase), 1); // find and remove base
      let mutatedBase = altBases[Math.floor(Math.random() * 3)];

      return this.dna.splice(randomIndex, 1, mutatedBase) && this.dna;
    },
    compareDNA(pAequor) {
      let count = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === pAequor.dna[i]) {
          count += 1;
        }
      }
      return `specimen #${this.specimenNum} and specimen #${
        pAequor.specimenNum
      } have ${((count / this.dna.length) * 100).toFixed(2)}% DNA in common.`;
    },
    willLikelySurvive() {
      const supBases = this.dna.filter((base) => base === "C" || base === "G");

      return supBases.length / this.dna.length > 0.6;
    },
  };
};

// create 30 instances of pAequors
let pAequors = [];
let i = 0;
while (pAequors.length < 30) {
  let pAequor = pAequorFactory(i, mockUpStrand());
  if (pAequor.willLikelySurvive()) {
    pAequors.push[pAequor];
    console.log(pAequor.willLikelySurvive());
    i++;
  }
}
