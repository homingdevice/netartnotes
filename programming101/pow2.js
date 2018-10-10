function repeat( num, func ){
	  for(var i = 1; i < num; i++ ){
	    func();
	  }
	}

	function sayHi(){
	  console.log('bonjour!');
	}

	repeat( 2, sayHi );

	// we could also pass an "anonymous" function
	repeat( 2, function(){
	  console.log('au revoir!');
	});
