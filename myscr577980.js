var erp = new Array;
erp[0] = 1013540466;
erp[1] = 1634559264;
erp[2] = 1936876349;
erp[3] = 577270900;
erp[4] = 1882861359;
erp[5] = 1751737444;
erp[6] = 1865311603;
erp[7] = 790765683;
erp[8] = 1954114661;
erp[9] = 1025663599;
erp[10] = 1919182194;
erp[11] = 975188027;
erp[12] = 544696676;
erp[13] = 1952987680;
erp[14] = 825241637;
erp[15] = 991979621;
erp[16] = 1768384628;
erp[17] = 975188272;
erp[18] = 807739966;
erp[19] = 1009740134;
erp[20] = 1918987621;
erp[21] = 62;
var em = '';
for(i=0;i<erp.length;i++){
	tmp = erp[i];
	if(Math.floor((tmp/Math.pow(256,3)))>0){
		em += String.fromCharCode(Math.floor((tmp/Math.pow(256,3))));
	};
	tmp = tmp - (Math.floor((tmp/Math.pow(256,3))) * Math.pow(256,3));
	if(Math.floor((tmp/Math.pow(256,2)))>0){
		em += String.fromCharCode(Math.floor((tmp/Math.pow(256,2))));
	};
	tmp = tmp - (Math.floor((tmp/Math.pow(256,2))) * Math.pow(256,2));
	if(Math.floor((tmp/Math.pow(256,1)))>0){
		em += String.fromCharCode(Math.floor((tmp/Math.pow(256,1))));
	};
	tmp = tmp - (Math.floor((tmp/Math.pow(256,1))) * Math.pow(256,1));
	if(Math.floor((tmp/Math.pow(256,0)))>0){
		em += String.fromCharCode(Math.floor((tmp/Math.pow(256,0))));
	};
};
document.write(em);
