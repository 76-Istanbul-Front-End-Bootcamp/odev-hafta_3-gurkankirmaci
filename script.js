class Animal {
    constructor(name,legs,actionText,actionSoundName){
       this.name = name; 
       this.legs= legs;
       this.actionText=actionText;
       this.actionSoundName=actionSoundName;
       
}

putInTheDocument() {
    var petsTable = document.getElementById("petsTable");
    var petTR = document.createElement("tr");
    petTR.className = "row";
  
    var petNameTD = document.createElement("td");
    petNameTD.textContent = this.name;
    petTR.appendChild(petNameTD);
    
  
    var petLegsTD = document.createElement("td");
    petLegsTD.textContent = this.legs;
    petTR.appendChild(petLegsTD);
  
    var petActionTD = document.createElement("td");
    var petActionTDButton = document.createElement("button");
    petActionTDButton.textContent = this.actionText;
    petActionTD.appendChild(petActionTDButton);
    petTR.appendChild(petActionTD);
    
    petActionTDButton.onclick = this.showAction.bind(this);
    petTR.onclick = this.showImage.bind(this);
    petsTable.querySelector("tbody").appendChild(petTR);
    
  }

  showAction() {
    document.getElementById(this.actionSoundName).play();
    }

  showImage() {
    document.querySelector("img").src = this.image;
    }


}

class Cat extends Animal{
    constructor(name,legs,actionText,actionSoundName){
    super(name,legs,actionText,actionSoundName);
    //image
    this.image = "https://img-s1.onedio.com/id-55257c07af6b6a0336c2d89f/rev-0/w-900/h-675/f-jpg/s-84ef4b826e9d4ee1cbf4487603bad9a8f969b53c.jpg";
      
    } 

}

class Monkey extends Animal{
   constructor(name,legs,actionText,actionSoundName){
   super(name,legs,actionText,actionSoundName);
   //image
   this.image = "https://khosann.com/wp-content/uploads/2019/05/Cinliler-maymuna-insan-beyni-geni-yerlestirdi.jpg";
   
    } 
    
} 

const Mila = new Cat("Mila","4","Meoow","meow");
Mila.putInTheDocument();

const Charlie = new Monkey("Charlie","2","scream","scream");
Charlie.putInTheDocument();

