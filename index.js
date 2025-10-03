const dice=document.getElementById("dice");
const result=document.getElementById("result");
// Dice face patterns using dot positions (1–9 grid)
const diceFaces = {
      1: [5],
      2: [1, 9],
      3: [1, 5, 9],
      4: [1, 3, 7, 9],
      5: [1, 3, 5, 7, 9],
      6: [1, 3, 4, 6, 7, 9]
    };
    function rolldice(num){
      document.querySelectorAll('.dot').forEach(dot=>dot.style.opacity=0);
      diceFaces[num].forEach(id=>{
        document.getElementById('dot' + id).style.opacity = 1;
      })
    }
    function roll(){
      dice.style.transform="rotate("+(Math.random()*720)+"deg)";
      setTimeout(()=>{
        let roll=Math.floor(Math.random()*6)+1;
        rolldice(roll);
        result.innerHTML="You rolled: " + roll;
        dice.style.transform = "rotate(0deg)";
      },600);
    }