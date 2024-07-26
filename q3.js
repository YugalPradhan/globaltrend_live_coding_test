function max(a,b){
    return (a>b)?a:b;
}

function knapsack(w,weights,values,n,dp){
    if(n===0 || w===0)
        return 0;
    if(dp[n][w]!=-1)
        return dp[n][w];
    if(weights[n-1]>w)
        return dp[n][w]=knapsack(w,weights,values,n-1,dp);
    else return dp[n][w]=max((values[n-1]+ knapsack(w-weights[n-1],weights,values,n-1,dp)), knapsack(w,weights,values,n-1,dp));
}

var values=[10,15,40]
var weights=[1,2,3]
var w=6;
const n=weights.length;
var dp=new Array(n+1).fill(-1).map(el=> new Array (w+1).fill(-1));
console.log(knapsack(w,weights,values,n,dp));