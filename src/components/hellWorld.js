export default{
	name:'index',
	data(){
		return{

		}
	},
	create(){

	},
	methods:{
		qu1(){
			console.log(this)
			this.$router.push('/tryJsonp')
		}
	}
}