function main(str){
    let stringArray = ['1','2','3','4','5','6','7','8','9','0'];
    let barcodeArray = [':::||','::|:|','::||:',':|::|',':|:|:',':||::','|:::|','|::|:','|:|::','||:::'];
    let content=[];  
    let String='';
    if(str===''){
       return'';
    }
    return str.includes('|') ? barcodeTostring(str):stringTobarcode(str);
   
   
   function barcodeTostring(str){
    let content=getContent(str);
    let String=getString(content);
    let result=resultInfo(String);
   return result  ;
}
    function stringTobarcode(str){
       
    let contentCode=deleteSymbol(str);
    let AllString= getAllstring(contentCode);
    let String=getBarcode(AllString);
    return String;
    }
    function getContent(str){
      let barcode='';
      for(let i =1;i<str.length-1;i++){
          barcode+=str[i];
      }
      for(let j=0;j<=barcode.length-5;j+=5){
          let string=barcode.substr(j,5);
          content.push(string);
   }  

         return content;    
    }
    function getString(content){
    	 let code='';
    	 for(let i =0;i<content.length;i++){
    	for(let j =0 ;j<barcodeArray.length;j++){
            if(content[i]===barcodeArray[j]){
          	code+=stringArray[j];
            }
        }
       }
    return code;
}

     function resultInfo(String){
        if (String.length == 9) {
            let arr = Array.from(String);
            arr.splice(5, 0, '-');
            let array = arr.join('');
            return array;
        } 
        else {
            return String;
        }
    }
     function deleteSymbol(str){
        let code='';
        if (str.length == 10) {
            let code = str.replace('-', '');
            return code;
        }
        else{
            return str;
        }
    }
 function getAllstring(contentCode){
        let arr = Array.from(contentCode);
        let sum = 0;
        for(let i = 0;i < arr.length;i++){
            sum += parseInt(arr[i]);
        }
        
        let lastcode = 10 - sum % 10;
       contentCode += lastcode;
        return contentCode;
    }
 function getBarcode(AllString){
        let result='';
        result += '|';
        let arr = Array.from(AllString);
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j <  stringArray.length; j++) {
                if (arr[i] == stringArray[j]) {
                    result += barcodeArray[j];
                }
            }
        }
        result += '|';
        return result;
    }

}
module.exports = main;