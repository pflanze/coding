const fun = (x, o) => {
  return Object.assign(x, o);
};
const fun2 = (x, o) => {
  return { ...x, ...o };
};
const o1 = {
  something: "EEE"
};
console.log(fun({ name: "Ali" }, { lastName: "yyy" }));

// EXERCISE
// create an objects user name, birthday, month and year

function zodiac(firstName, lastName, age, day, month, year) {
  const result = {
    firstName: "Daniel",
    lastName: "Smith",
    age: 33,
    birthday: 06,
    month: "September",
    year: 1976
  };
  return result;

  //
  /*
  function getZodiacSign(day, month) {

    var zodiacSigns = {
        'virgo':'Virgo',
    }
    if ((month == 8 && day >= 06) || (month == 9 && day <= 23)) {
        return zodiacSigns.virgo;

}

zodiac("Daniel", "Smith", "06", "September", "1976");


function zodiac(){
    let birthmonth = document.getElementById("month").value;
    let birthday = document.getElementById("day").value;
    let result = "06";
  
  
   if (birthMonth == 8 && birthday >= 23 || birthMonth == 9 && birthday <= 06){
    result = ("Virgo");


    // 
  /*  const zodiacs = [
        { sign: "PISCES", monthA: "February", monthB: "March", dayA: 19, dayB: 20 },
        { sign: "ARIES", monthA: "March", monthB: "April", dayA: 21, dayB: 19 },
        { sign: "TAURUS", monthA: "April", monthB: "May", dayA: 20, dayB: 20 },
        // etc
      ];
      
      let zodiacMonth = prompt("May");
      var zodiacDay = prompt("6")
      
      var zodiac = zodiacs.filter(function(z){
        return zodiacMonth == z.monthA && zodiacDay >= z.dayA ||
          zodiacMonth == z.monthB && zodiacDay <= z.dayB;
      })[0]
      
      console.log(zodiac);
      
      window.confirm ("the zodiac sign is " + zodiac.sign);
*/

  /*
const ZODIAC = ["RAT", "OX", "TIGER", "RABBIT", "DRAGON", "SNAKE", "HORSE", "SHEEP", "MONKEY", "ROOSTER", "DOG", "PIG"];
const STARTING_ZODIAC = "MONKEY";

let i = start_ndx = ZODIAC.indexOf(STARTING_ZODIAC);

do {
  console.log(i, ZODIAC[i++])
  i == ZODIAC.length && (i=0)
} while (i!==start_ndx)

      // ZODIAC 

      function getZodiacSign(day, month) {

        var zodiacSigns = {
          'capricorn':'Capricorn',
          'aquarius':'Aquarius',
          'pisces':'Pisces',
          'aries':'Aries',
          'taurus':'Taurus',
          'gemini':'Gemini',
          'cancer':'Cancer',
          'leo':'Leo',
          'virgo':'Virgo',
          'libra':'Libra',
          'scorpio':'Scorpio',
          'sagittarius':'Sagittarius'
        }
      
        if((month == 1 && day <= 20) || (month == 1 && day >=22)) {
          console.log(zodiacSigns.capricorn);
        } else ((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
            console.log(zodiacSigns.sagittarius); 
        }

    /*else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
          return zodiacSigns.aquarius;

        } else if((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
          return zodiacSigns.pisces;

        } else if((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
          return zodiacSigns.aries;

        } else if((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
          return zodiacSigns.taurus;

        } else if((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
          return zodiacSigns.gemini;

        } else if((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
          return zodiacSigns.cancer;

        } else if((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
          return zodiacSigns.leo;

        } else if((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
          return zodiacSigns.virgo;

        } else if((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
          return zodiacSigns.libra;

        } else if((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
          return zodiacSigns.scorpio;

        

      console.log(getZodiacSign("Irena" , "06", "06", "1975"));
      // loop through the object 
      // how do i loop through an object 

*/

 function displayZodiacs(startingZodiac, zodiacs) {
    function getZodiacSign(day, month) {

        var zodiacSigns = {
          'capricorn':'Capricorn',
          'aquarius':'Aquarius',
          'pisces':'Pisces',
          'aries':'Aries',
          'taurus':'Taurus',
          'gemini':'Gemini',
          'cancer':'Cancer',
          'leo':'Leo',
          'virgo':'Virgo',
          'libra':'Libra',
          'scorpio':'Scorpio',
          'sagittarius':'Sagittarius'
        }
  const startIndex = zodiacs.indexOf(startingZodiac);

  // start to end of array
  for (let i = startIndex; i < zodiacs.length; i++) {
    console.log(zodiacs[i]);
  }

  // the beginning of array  to start
  for (let i = 0; i < startIndex; i++) {
    console.log(zodiacs[i]);
  }
}

console.log(displayZodiacs(startingZodiac, zodiacs));

// object and method 




// 

function calculate(f){
    var zodiac={
    'Capricorn1':{'m':0,'d':20},
    'Aquarius':{'m':1,'d':19},
    'Pisces':{'m':2,'d':20},
    'Aries':{'m':3,'d':20},
    'Taurus':{'m':4,'d':21},
    'Gemini':{'m':5,'d':21},
    'Cancer':{'m':6,'d':22},
    'Leo':{'m':7,'d':22},
    'Virgo':{'m':8,'d':23},
    'Libra':{'m':9,'d':23},
    'Scorpio':{'m':10,'d':22},
    'Saggitarius':{'m':11,'d':21},
    'Capricorn2':{'m':11,'d':31}
    }
    var born=f['birthdate'].value;
    born=born.match(/\//)?born.split('/'):born.split('.');
    var yyyy=Number(born[2]);
    var mm=Number(born[1])-1;
    var dd=Number(born[0]);
    var bornDate=new Date(yyyy,mm,dd), zodiacEnd, astrologicalSign;
    for(z in zodiac){
    zodiacEnd=new Date(yyyy,zodiac[z]['m'],zodiac[z]['d']);
    if(bornDate<=zodiacEnd){astrologicalSign=z;break}
    }
    astrologicalSign.match(/\d/)?astrologicalSign=astrologicalSign.replace(/\d/g,''):null;
    var spanSign=document.getElementById('sign');
    spanSign.innerHTML=astrologicalSign;
    return false
    }