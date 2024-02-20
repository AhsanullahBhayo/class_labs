
var arr = [{id :1,name : "ahsan"},{id :2,name : "danish"},{id :2,name : "danish"}, {id :3,name : "shoaib"},{id :4,name : "nadeem"} ];
obj={};
for(var i=0; i<arr.length; i++){
    const element = arr[i].id;
    if(obj[element]){
        obj[element]++;
    }
    else{
        obj[element] = 1;
    }
}

console.log(obj);
