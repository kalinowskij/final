import event from './event.js'
export default {
    state: () => ({
        name: "default",
        events: [],
    }),
    actions: {
        removeEvent({commit}, event){
            commit('removeEvent', event);
        }
    },
    mutations: {
        createEvent(state, newEvent){
            newEvent.man.events.push(newEvent);
        },
        removeEvent(state, event){
            const deletionIndex = event.man.events.findIndex(item => item.id === event.id);
            if(deletionIndex > -1){
                event.man.events = [
                    ...event.man.events.slice(0, deletionIndex),
                    ...event.man.events.slice(deletionIndex + 1)
                ];
            }
        }
    },
    modules: {
        event
    }
}
