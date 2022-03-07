const app = {
  data() {
    return {
      customerData: {
        name: '',
        tel: '',
        date: null,
        num: null,
        other: [],
      },
    }
  },
  created() {
    console.log(this.customerData.name);
  },
  methods: {
  }
}
Vue.createApp(app).mount("#app");