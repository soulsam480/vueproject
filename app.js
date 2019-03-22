new Vue({
    el:'#vue-app',
    data:{
        name:'sambit',
        job:'ninja',
        website:'https://sambitsahoo.cf',
        websiteTag:'<a href="https://sambitsahoo.cf">net page</a>'
    },
    methods:{
        greet: function(time){
            
            return 'good ' + time + ' '+ this.name ;
        }
    }
});