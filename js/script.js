function printStars(stars){
	// document.write("Hello World!");
	var i = 0;
	// console.log(i);
    for(var i = 0; i < stars; i++){
        document.write('<i class="fa fa-star" aria-hidden="true"></i>');
	// console.log(i);
    }
	// console.log("-->" + i);
	for(var i = i ; i < 5 ; i ++ ){
		document.write('<i class="fa fa-star-o" aria-hidden="true"></i>');
	}
}
