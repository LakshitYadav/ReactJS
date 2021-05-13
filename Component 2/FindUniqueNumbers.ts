const ar: any = [[1,1,1],[5,2,6],[6,5,9]];

function unique(num: number): boolean{
	let count = 0;
	for(let i=0;i<ar.length;i++){
		for(let j=0;j<ar[0].length;j++){
    			if(ar[i][j] === num)
              			count++;
		}
	}
  	if(count === 1)
		return true;
	return false;
}

for(let i=0;i<ar.length;i++){
	for(let j=0;j<ar[0].length;j++){
    	if(unique(ar[i][j]))
          	console.log(ar[i][j]);
	}
}