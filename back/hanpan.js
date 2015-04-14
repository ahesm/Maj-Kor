//0 만수
//1 삭수
//2 통수
//3 자패
var card_type = new Array('man','sak','ton','cha');
var cha_type  = new Array('whi' , 'sho' , 'mid', 'est', 'sth' , 'wst' , 'nth');

var card = new Array();

for(i=0;i<4;i++){
	card[i] = new Array();
	if(i>=3){
		for(j=0;j<7;j++){
			card[i][j] = {'value' : cha_type[j] , 'type' : card_type[i] , 'noble' : true};
		} 
		break;
	}
	for(j=0;j<9;j++){
		card[i][j] = {'value' : j, 'type' : card_type[i], 'noble': false};
		if(j==0||j==8) card[i][j] = {'value' : j, 'type' : card_type[i] , 'noble' : true};
	}
}

var scard = new Array();
var pcard = new Array();

var shuffle = function(){
	for(i=0;i<4;i++){
		if(i>=3){
			for(j=0;j<7;j++){
				scard[i*9+j] = card[i][j];
			}
			break;
		}
		for(j=0;j<9;j++){
			scard[i*9+j] = card[i][j];
		}
	}
	var len = scard.length;
	for(i=1;i<=3;i++){
		for(j=0;j<len;j++){
			scard[len*i+j] = scard[j];
		}
	}
	scard.sort(function(){return Math.random()-0.5});
	return scard;
}

var account = function(){
	if(scard==null) return;
	for(i=0;i<4;i++){
		pcard[i] = new Array();
	}
	for(i=0;i<4;i++){
		for(j=0;j<13;j++){
			pcard[i][j] = scard[i*13+j];
		}
	}
	scard = scard.slice(4*13-1,scard.length-1);
	return {"scard" : scard,"pcard" : pcard};
}

shuffle(scard);
account(scard,pcard);

module.exports = {
	"scard" : scard, 
	"pcard" : pcard,
	"shuffle" : shuffle,
	"account" : account
};
