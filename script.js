new Vue({
    el:"#appVue",
    data:{
        lists:[
            {keep: 'uno', completed: true},
            {keep: 'dos', completed: false},
            {keep: 'tres', completed: true},
        ],

        newKeep: '',
    },

    methods:{
        addkeep: function(){
            this.lists.push({keep: this.newKeep, completed: false});
            this.newKeep = '';
        }
    }
});