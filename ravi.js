Bill_list=[Bill_1={a:2000,b:200,c:1000},
    Bill_2={a:1500,b:0,c:0,d:1300},
    Bill_3={b:1000,c:0,d:700},
    Bills_4={a:1000,b:800,c:650}]
     function avarage(obj){
        total=[]
        sum=0
        avg=0
        for( j in obj ){
            total.push(obj[j])
            sum=sum+obj[j]
            len=total.length
            avg=sum/len
         }return avg}
    for(i in Bill_list){
        lis=avg_each(Bill_list[i])
    avarage(lis)
    console.log("avg_amount:",total)
    console.log("no of person:",len)}
    // avarage for each ******************************************************************************************************************************************
    function avg_each(obj){
        avg=avarage(obj)
        for( i in obj){
            obj[i]=obj[i]-avg}
        return obj}
    for(i in Bill_list){
        Bill_list[i]=avg_each(Bill_list[i])
    }split_pos_n_neg={}
    for( i =0; i<Bill_list.length;i++){
    for( k in Bill_list[i]){
        if( k in split_pos_n_neg){
            split_pos_n_neg[k]=split_pos_n_neg[k]+Bill_list[i][k]}
        else{
            split_pos_n_neg[k]=Bill_list[i][k]}
    }}
    console.log("avarg_each:",split_pos_n_neg)
 get={}
 give={}
 for( i in split_pos_n_neg){
    if(split_pos_n_neg[i]==0){
        console.log( "no need to pay any one ")
    }else if ( split_pos_n_neg[i]>0){
        get[i]=split_pos_n_neg[i]}
    else if ( split_pos_n_neg[i]<0){
        give[i]=split_pos_n_neg[i]}}
//shoted function deccending order****************************************************************************************************************************
const sort1=(Object)=>{
    list=[]
for(i in Object){
    list.push(Object[i])
}function sort(a,b){
    return a-b}
list.sort(sort)
list.reverse()
positive={}
for (e of list){
    for(i in Object){
        if(Object[i]==e){
            positive[i]=e
        }}}return(positive)}
// shoted function accending order***************************************************************************************************************
const sort2=(Object)=>{
    list2=[]
for(i in Object){
    list2.push(Object[i]) }
function sort(a,b){
    return a-b}
list2.sort(sort)
negative={}
for (e of list2){
    for(i in Object){
        if(Object[i]==e){
            negative[i]=e}}}
return( negative)}
accending=sort1(get)
deaccending=sort2(give)
console.log("Name & Get Amount:",accending)
console.log("Name & Pay Amount:", deaccending)
// summary*****************************************************************************************************************************
for (k in accending){
    for( m in deaccending){
        if (accending[k]!=0&&deaccending[m]!=0){
                if( accending[k]>Math.abs(deaccending[m])){
                    console.log(m,"has pay Amount:",Math.abs(deaccending[m]).toFixed(2),"Rs/- to",k)
                    accending[k]=accending[k]-Math.abs(deaccending[m])
                    deaccending[m]=0}
                     else if( accending[k]<Math.abs(deaccending[m])){
                        console.log(m,"has pay Amount",accending[k].toFixed(2),"Rs/- to",k)
                        deaccending[m]=accending[k]-Math.abs(deaccending[m])
                        accending[k]=0}
                    else if ( accending[k]==Math.abs(deaccending[m])){
                        console.log(m,"has pay mount",Math.abs(deaccending[m]).toFixed(2),"Rs/- to",k)
                        deaccending[m]=0
                        accending[k]=0}}}}