let list = [
  {
    id: 1,
    name: '《算法导论》',
    date: '2006-9',
    price: 85.00,
    count: 1
  },
  {
    id: 2,
    name: '《UNIX编程艺术》',
    date: '2006-2',
    price: 59.00,
    count: 1
  },
  {
    id: 3,
    name: '《编程珠玑》',
    date: '2008-10',
    price: 39.00,
    count: 1
  },
  {
    id: 4,
    name: '《代码大全》',
    date: '2006-3',
    price: 128.00,
    count: 1
  },
];

let app = new Vue({
  el: "#app",
  data: {
    list: list,
  },
  methods: {
    count(e, item) {
      let flag = e.target.innerText;
      if (flag === '+') {
        item.count++;
      } else {
        item.count--;
      }
      // } else if (item.count>1) {
      //   item.count--;
      // }
    },

    remove(index) {
      this.list.splice(index, 1)
    },
  },
  computed: {
    totalPrice() {
      let total = 0;
      for (let item of this.list) {
        total = item['price'] * item['count'] + total;
      }
      return `总价格：￥${total.toFixed(2)}`;
    },
  },
  filters: {
    getPrice(price) {
      return `￥${price.toFixed(2)}`;
    },
  },
});