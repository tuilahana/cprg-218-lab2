image1.addEventListener('click',function(){
    console.log("image1");
    document.body.classList.remove("image2");
    document.body.classList.remove("image3");
    document.body.classList.remove("image4");
    document.body.classList.remove("image5");
    document.body.classList.add('image1');
    document.getElementById('displayed-image').src="sheep.webp";
	document.getElementById('displayed-image').alt="bighorn sheeps";
    document.getElementById("image1").style.background= "#97bf04";
    document.getElementById("image2").style.background= "#d9043d";
    document.getElementById("image3").style.background= "#d9043d";
    document.getElementById("image4").style.background= "#d9043d";
    document.getElementById("image5").style.background= "#d9043d";
})

image2.addEventListener('click',function(){
    console.log("image2");
    document.body.classList.remove("image1");
    document.body.classList.remove("image3");
    document.body.classList.remove("image4");
    document.body.classList.remove("image5");
    document.body.classList.add('image2');
    document.getElementById('displayed-image').src="bear.webp";
	document.getElementById('displayed-image').alt="black bear";
    document.getElementById("image2").style.background= "#97bf04";
    document.getElementById("image1").style.background= "#d9043d";
    document.getElementById("image3").style.background= "#d9043d";
    document.getElementById("image4").style.background= "#d9043d";
    document.getElementById("image5").style.background= "#d9043d";
})

image3.addEventListener('click',function(){
    console.log("image3");
    document.body.classList.remove("image1");
    document.body.classList.remove("image2");
    document.body.classList.remove("image4");
    document.body.classList.remove("image5");
    document.body.classList.add('image3');
    document.getElementById('displayed-image').src="moose.webp";
	document.getElementById('displayed-image').alt="moose";
    document.getElementById("image3").style.background= "#97bf04";
    document.getElementById("image1").style.background= "#d9043d";
    document.getElementById("image2").style.background= "#d9043d";
    document.getElementById("image4").style.background= "#d9043d";
    document.getElementById("image5").style.background= "#d9043d";
})

image4.addEventListener('click',function(){
    console.log("image4");
    document.body.classList.remove("image2");
    document.body.classList.remove("image3");
    document.body.classList.remove("image1");
    document.body.classList.remove("image5");
    document.body.classList.add('image4');
    document.getElementById('displayed-image').src="wolf.webp";
	document.getElementById('displayed-image').alt="wolf";
    document.getElementById("image4").style.background= "#97bf04";
    document.getElementById("image1").style.background= "#d9043d";
    document.getElementById("image3").style.background= "#d9043d";
    document.getElementById("image2").style.background= "#d9043d";
    document.getElementById("image5").style.background= "#d9043d";
})

image5.addEventListener('click',function(){
    console.log("image5");
    document.body.classList.remove("image2");
    document.body.classList.remove("image3");
    document.body.classList.remove("image4");
    document.body.classList.remove("image1");
    document.body.classList.add('image5');
    document.getElementById('displayed-image').src="elk.webp";
	document.getElementById('displayed-image').alt="elk";
    document.getElementById("image5").style.background= "#97bf04";
    document.getElementById("image1").style.background= "#d9043d";
    document.getElementById("image3").style.background= "#d9043d";
    document.getElementById("image4").style.background= "#d9043d";
    document.getElementById("image2").style.background= "#d9043d";
})


