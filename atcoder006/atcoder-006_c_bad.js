var baby;
var adult;
var old;

var N = 7;
var M = 23;

function sphinx(){
	//例にするために１にしているが０でも良いらしい
	for(baby=1; baby<=N; baby++){
		for(adult=1; adult<=(N-baby); adult++){
			if(M == 2*adult+3*(N-(adult+baby))+4*baby){
				old = N - (baby+adult);
				return adult + " " + old + " " + baby;
			}
		}
	}
	return "-1 -1 -1";
}

console.log(sphinx());