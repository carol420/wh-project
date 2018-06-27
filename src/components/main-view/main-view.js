import TryIview from '../try-iview/tryIvie.vue'
export default{
	name:'index',
	data(){
		return{
			propData:['1','2']
		}
	},
	create(){

	},
	methods:{
		qu1(){
			console.log(this)
			this.$router.push('/tryJsonp')
		}
	},
	components:{
		TryIview
	}
}