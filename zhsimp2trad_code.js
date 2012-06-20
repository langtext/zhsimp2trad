function zhsimp2trad(opt){
var strmaintext=maintext.value;
var regex=new RegExp(' ', 'g'); 
var aparts;
if(opt=='S2T'){
  for (var i=0; i<asimp2tradparse1.length; i++){
   aparts=asimp2tradparse1[i].split('%');
   try{
     if((aparts[0]!='')&&(typeof aparts[0]!='undefined')){
        regex.compile(aparts[0], 'g'); strmaintext= strmaintext.replace(regex, aparts[1]);
     }//endif
   }catch(e){
    alert('ERROR parse 1: '+e.description + '- '+asimp2tradparse1[i-1]);
   }//end try
  }//endfor

  for (var i=0; i<asimp2tradparse2.length; i++){
   aparts=asimp2tradparse2[i].split('%');
   try{
     if((aparts[0]!='')&&(typeof aparts[0]!='undefined')){
        regex.compile(aparts[0], 'g'); strmaintext= strmaintext.replace(regex, aparts[1]);
     }//endif
   }catch(e){
    alert('ERROR parse 2: '+e.description + '- '+asimp2tradparse2[i-1]);
   }//end try
  }//endfor
}else if(opt=='T2S'){
  for (var i=0; i<asimp2tradparse1.length; i++){
   aparts=asimp2tradparse1[i].split('%');
   try{
     if((aparts[0]!='')&&(typeof aparts[0]!='undefined')){
        regex.compile(aparts[1], 'g'); strmaintext= strmaintext.replace(regex, aparts[0]);
     }//endif
   }catch(e){
    alert('ERROR parse 2: '+e.description + '- '+asimp2tradparse2[i-1]);
   }//end try
  }//endfor

}//endif
maintext.value=strmaintext; 
}
