import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  SelectedQuizz="sports";

 a:string;
 Categories=['sports','politics','music'];

//  Sports
 cheifs:string;
 sportAns1="serbian";
 SportMark1=0;

 captain:string;
 sportAns2="Faf Du Plessis";
 SportMark2=0;

 Coach:string;
 sportAns3="Danny";
 SportMark3=0;

 GoalKepper:string;
 sportAns4="Khune";
 SportMark4=0;

 lateGoalKepper:string;
 sportAns5="Meyiwa";
 sportMark5=0;
 
 totalSportMarks=0;

//  Politics
Leader:string;
 politicAns1="Hellen";
 politicMark1=0;

 Commander:string;
 politicalAns2="Jullius";
 politicalMark2 =0;

 President:string;
 politicalAns3="Ramaphosa";
 politicalMark3=0;

 ChiefLeader:string;
 politicalAns4="IFP";
 politicalMark4=0;

 FPresident:string;
 politicalAns5="Mandela";
 politicalMark5=0;
 
 totalPoliticsMarks=0;
 
//  music
 BET:string;
 musicAns1="Cardi";
musicMark1=0;

 Singer:string;
 musicAns2="Madonna";
 musicMark2=0;

Soul:string;
musicAns3="Sello";
musicMark3=0;

MamaAfrica:string;
musicAns4="Merriam";
musicMark4=0;

Group:string;
musicAns5="Mambaso"; 
musicMark5=0;

totalMusicMarks=0;


 

 checkSport1():void{
   if(this.cheifs===this.sportAns1){
     this.SportMark1=2;
   }
 }
 checkSport2():void{
  if(this.captain===this.sportAns2){
    this.SportMark2=2;
  }
 }

 checkSport3():void{
  if(this.Coach===this.sportAns3){
    this.SportMark3=2;
  }
}
checkSport4():void{
  if(this.GoalKepper===this.sportAns4){
    this.SportMark4=2;
  }
}

checkSport5():void{
  if(this.lateGoalKepper===this.sportAns5){
    this.sportMark5=2;
  }
}

scoreMarks():void{
   this.checkSport1();
   this.checkSport2();
   this.checkSport3();
   this.checkSport4();
   this.checkSport5();

   this.totalSportMarks=this.SportMark1+this.SportMark2+this.SportMark3 +this.SportMark4+this.sportMark5;
}
CheckPolitic1():void{
  if(this.Leader===this.politicAns1){
    this.politicMark1=2;

  }
}
CheckPolitic2():void{
  if(this.Commander===this.politicalAns2){
    this.politicalMark2=2;
  }
}
CheckPolitic3():void{
  if(this.President===this.politicalAns3){
    this.politicalMark3=2;
  }
}
CheckPolitic4():void{
  if(this.ChiefLeader===this.politicalAns4){
    this.politicalMark4=2;
  }
}
CheckPolitic5():void{
  if(this.FPresident===this.politicalAns5){
    this.politicalMark5=2;
  }
}

PoliticsScore():void{
   this.CheckPolitic1();
   this.CheckPolitic2();
   this.CheckPolitic3();
   this.CheckPolitic4();
   this.CheckPolitic5();
   this.totalPoliticsMarks=this.politicMark1+this.politicalMark2+this.politicalMark3 +this.politicalMark4+this.politicalMark5;
   }

   checkMusic1():void{
    if(this.BET===this.musicAns1){
      this.musicMark1=2;
    }
  }
  checkMusic2():void{
    if(this.Singer===this.musicAns2){
      this.musicMark2=2;
    }
  }
  checkMusic3():void{
    if(this.Soul===this.musicAns3){
      this.musicMark3=2;
    }
  }
  checkMusic4():void{
    if(this.MamaAfrica===this.musicAns4){
      this.musicMark4=2;
    }
  }
  checkMusic5():void{
    if(this.Group===this.musicAns5){
      this.musicMark5=2;
    }
  }


  MusicScore():void{
   this.checkMusic1();
   this.checkMusic2();
   this.checkMusic3();
   this.checkMusic4();
  this.checkMusic5();

   this.totalMusicMarks=this.musicMark1+this.musicMark2+this.musicMark3 +this.musicMark4+this.musicMark5;
 }

  constructor(public navCtrl: NavController, ) {
  
  }

}



