import * as d3 from 'd3'

export default{
	name:'chart1',
	data(){
		return{

		}
	},
	created(){
		console.log(d3);
		console.log(this);
		console.log(this.$refs)
		this.$nextTick(() => { 
			this.draw();
		});

		
		
	},
	methods:{
		draw(){
			let chartCon=this.$refs.chartCon;
			d3.select(this.$refs.chartCon).selectAll('p').text('xixi')


		}

	}
}