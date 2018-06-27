export default{
	props:{
		propData:{
			type:Array,
		}
	},
	data(){
		return{

		}
	},
	create(){
		console.log(this.$props.propData)
	},
	methods:{

	}
}