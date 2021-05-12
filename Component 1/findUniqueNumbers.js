const ar = [[1,1,1],[5,5,6],[6,5,9]];

function unique(num){
	let count = 0;
	for(let i=0;i<ar.length;i++){
		for(let j=0;j<ar[0].length;j++){
    			if(ar[i][j] === num)
              			count = count +1;
		}
	}
  	if(count === 1)
		return true;
	return false;
}

for(let i=0;i<ar1.length;i++){
	for(let j=0;j<ar[0].length;j++){
    		if(unique(ar[i][j]))
          		console.log(ar[i][j]);
	}
}