new Vue({
    el:"#appVue",
    data:{
        lists:[],

        newKeep: '',
    },

    methods:{
        addkeep: function(){
            this.lists.push({keep: this.newKeep, completed: false});
            this.newKeep = '';
        }
    }
});