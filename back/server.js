
//0 만수
//1 삭수
//2 통수
//3 자패



var card_type = new Array('man','sak','ton','cha');
var cha_type  = new Array('whi' , 'sho' , 'mid', 'est', 'sth' , 'wst' , 'nth');

var card = new Array();

for(i=0;i<4;i++){
	card[i] = new Array();
	if(i>=4){
		for(j=0;j<7;j++){
			card[i][j] = {'value' : cha_type[j] , 'type' : card_type[i] , 'noble' : true};
		} 
		break;
	}
	for(j=0;j<9;j++){
		card[i][j] = {'value' : j, 'type' : card_type[i]};
		if(j==0||j==8) card[i][j] = {'value' : j, 'type' : card_type[i] , 'noble' : true};
	}
}

var scard = card;

var shuffle = function(){
	Math.floor((Math.random() * 10) + 1);
}