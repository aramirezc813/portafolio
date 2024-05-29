let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('holis soy una ingeniera en computación ..fan del anime y propensa a aprender en contra de mi volintad pero por amor al arte')
  .pauseFor(200)
  .deleteChars(10)
  .start();
