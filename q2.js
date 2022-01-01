alert("This program is to Checks Whether The entered Character is Vowel or Consonant ")
let char=prompt("Please enter the Character")

if(['a', 'e', 'i', 'o', 'u'].includes(char.charAt(0).toLowerCase())){
  alert("Character "+ char  + " is Vowel")
}else{
    alert("Character "+ char  + " is Consonant")
}