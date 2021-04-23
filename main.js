var imgarray=["pizza.jpg","pizza mnu.jpg","dhanyavad.jpg","download.png"];
inx=0;
imgduration=5000;


function slideshow()

{
  document.getElementById("slides").src=imgarray[inx]  
  inx++;
  if(inx==imgarray.length)
  {
      inx=0;
setTimeout("slideshow()",imgduration);
  }
}