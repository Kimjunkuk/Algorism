/*
ex) nums=[2,3,6,6,5]
1. 첫번째 두번째 수 비교 큰수 n=x
2. n 값 세번째 수 비교 큰수 n=x
3. n 값 네번째 수 비교 큰수 n=x
4. n 값 네번째 수 비교 큰수 n=x
5. 1번부터 4번까지 과정을 nums의 배열 길이 만큼 반복 하여 수를 비교함
6. 제일 큰 수 n 
7. 제일 큰 수 n - 1 == 첫번째 수 비교 
8. 동일한 수 발견 시 값을 출력하고 연산 종료 
*/

/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    for(let i=0;i<nums.length;i++){
        const max;
        if(max != 0 ){
            const max = nums[i];
            console.log(max);
        }
        if(nums[i]>max){
            const max = nums[i];
            console.log(max);
        }
    }
}