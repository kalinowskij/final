import man from './man.js'
export default {
    state: () => ({
        name: "default",
    }),
    actions: {
        removeMan({commit}, man){
            commit('removeMan', man);
        }
    },
    mutations: {
        createMan(state, newMan){
            newMan.events = [];
            newMan.period.people.push(newMan);
            console.log('createMan')
        },
        removeMan(state, man){
            const deletionIndex = man.period.people.findIndex(item => item.id === man.id);
            if(deletionIndex > -1){
                man.period.people = [
                    ...man.period.people.slice(0, deletionIndex),
                    ...man.period.people.slice(deletionIndex + 1)
                ];
            }
        }
    },
    modules: {
        man
    }
}
