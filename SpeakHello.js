var helloSpeaker = {};
(function (window) {
    var speakWord = "Hello";
helloSpeaker.speak = function speak(name) {
  console.log(speakWord + " " + name);
}
}) (window);
window.helloSpeaker = helloSpeaker;
