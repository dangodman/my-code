Vue.createApp({
  template: "#my-app",
  data() {
    return {
      books: [
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
      ]
    }
  },
  computed: {
    totalPrice(){
      let total = 0
      this.books.map((book)=>{
        total += book.price * book.count
      })
      return total.toFixed(2)
    }
  },
  methods: {
    add(id){
      this.books.map((book)=>{
        if(book.id === id){
          book.count++
        }
      })
    },
    minus(id){
      this.books.map((book)=>{
        if(book.id === id){
          if(book.count != 1){
            book.count--
          }
        }
      })
    },
    remove(id){
      this.books.map((book,index)=>{
        if(book.id === id){
          this.books.splice(index,1)
        }
      })
    }
  }
}).mount("#app");