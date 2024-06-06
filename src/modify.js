/** FEEDBACK: Great job getting all test cases to pass! Make it a habit of cleaning up your code by removing commented out code! */
const getMainHeadingText = () => {
  console.log(document.querySelector("#main-heading").textContent)
};

const getAllMainText = () => {
  const mainText = document.querySelectorAll(".main-text")
  let arr = []
  mainText.forEach(elem => arr.push(elem.textContent))
  console.log(arr.join())
};

const setSubtitleText = () => {
  console.log(document.querySelector("#subtitle").textContent = "This is a subtitle!")
};

const modifyDivClassList = () => {
  const div = document.querySelector("#modify-classes").classList
  // console.log(document.querySelector(".bad-class"))
  div.remove("bad-class")
  div.add("new-class")
};

const addH2 = () => {
  const h2 = document.createElement("h2")
  h2.id = "h2-test"
  h2.textContent = "Another one!"
  document.body.appendChild(h2)
  // console.log(h2)
};

const removeOldInfo = () => {
  const old = document.getElementById("old-info")
  old.remove()

};

const makeAlphabet = () => {
  const alpha = document.querySelector("#alphabet")
  const count = alpha.dataset.numLetters
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  for(let i = 0; i < count; i++){
    const list = document.createElement("li")
    list.textContent = `${alphabet[i]} is letter #${i + 1} in the alphabet`
    document.querySelector("#alphabet").appendChild(list)
  }
};

const makeBio = () => {
  document.getElementById("my-bio").innerHTML = `
  <h2 id="bio-heading">About Me</h2>
  <p>My name is Zo and I like learn cool new things</p>
  <h3 id="hobby-heading">My Hobbies</h3>
  <ul>
    <li>Running</li>
    <li>Reading</li>
    <li>Writing</li>
  </ul>`;
};

// "runner" function
const main = () => {
  // read
  getMainHeadingText();
  getAllMainText();

  // update
  setSubtitleText();
  modifyDivClassList();

  // create
  addH2();

  // delete
  removeOldInfo();

  // more advanced stuff!
  makeAlphabet();
  makeBio();
};

// invoke the runner!
main(); 
