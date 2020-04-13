Vue.component('message',{
	props:[
		'title','body'
	],

	data(){
		return {
			isVisible:true
		}
	},
	template: `
		<article class="message is-dark" v-show='isVisible'>
				  <div class="message-header">
				    {{title	}}
				    <button class="delete" aria-label="delete" @click="hideModal"></button>
				  </div>
				  <div class="message-body">
				    {{body}}
				  </div>
			</article>
	`,

	methods:{
		hideModal(){
			//$('.message').hide()
			this.isVisible = false;
		}
	}
})

new Vue({
	el: '#root',

})