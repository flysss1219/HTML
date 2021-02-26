const app = new Vue({
	el: '#app',
	data: {
		books: [
			{
				id: 1,
				name: '《计算机基础》',
				date: '2020-9',
				price: 85.00,
				count: 1,
			},
			{
				id: 2,
				name: '《代码大全》',
				date: '2011-7',
				price: 45.00,
				count: 1,
			},
			{
				id: 3,
				name: '《Vue从0到1》',
				date: '2012-3',
				price: 185.00,
				count: 1,
			},
			{
				id: 4,
				name: '《javascript高级教程》',
				date: '2009-1',
				price: 100.00,
				count: 1,
			},
			{
				id: 5,
				name: '《html/css艺术》',
				date: '2010-5',
				price: 50.00,
				count: 1,
			}
		],
	},
	computed: {
		totalPrice(){
			// let total = 0
			// for (let book of this.books) {
			// 	total += book.count*book.price
			// }
			// return total
			return this.books.reduce(function (pre,val){
				return pre + val.price*val.count
			},0)
		}
	},
	methods: {
		decrement(index) {
			this.books[index].count --
		},
		increment(index) {
			this.books[index].count ++
		},
		removeBook(index) {
			this.books.splice(index,1)
		}
	},
	filters: {
		showPrice(price) {
			return "￥" + price.toFixed(2)
		}
	}
});


///javascript高阶函数
const nums = [10,100,120,40,90,1000,400,20];

// let newNums = nums.filter(function (n){
// 	return n < 100;
// }).map(function (n){
// 	return n*2;
// });
// console.log(newNums);
// //reduce(function(previousVal,currentVal),initialValue)
// let total = newNums.reduce(function (previousVal,n){
//   return previousVal + n;
// },0);
// console.log(total);

// let total = nums.filter(function (n){
// 	return n<100;
// }).map(function (n){
// 	return n*2;
// }).reduce(function (previousVal,n){
// 	return previousVal + n;
// },0);

let total = nums.filter(n => n < 100).map(n => n*2).reduce((pre,n) => pre+n);
console.log(total);