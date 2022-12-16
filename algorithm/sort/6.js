const bubbleSort = arr => {
    console.time("优化了排序区域和提前退出");
    // 多声明变量，可以让我们放下一些思向
    let lastExchangeIndex = 0;//无序数列的位置
    let len = arr.length;
    let sortBorder = len - 1; //已拍好序的边界

    for(let i =0;i<len;i++){    //  
        let isSorted = true;    //  是否可以直接退出？
        // j  0 -> sortBorder swap
        for(let j = 0;j < sortBorder;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
                isSorted = false;
                lastExchangeIndex = j;
            }
        }
        sortBorder = lastExchangeIndex;
        if(isSorted){
            break;
        }
    }
    console.timeEnd("优化了排序区域和提前退出");
    return arr;
}

bubbleSort([3,4,2,1,5,6,7,8])