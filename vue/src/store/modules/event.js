export default {
    state: () => ({
        name: "default",
    }),
    actions: {
        removePoint({commit}, point){
            commit('removePoint', point);
        }
    },
    mutations: {
        createPoint(state, newPoint){
            if(!newPoint.event.points){
                newPoint.event.points = [];
            }
            newPoint.event.points.push(newPoint);
        },
        removePoint(state, Point){
            const deletionIndex = Point.event.points.findIndex(item => item.id === Point.id);
            if(deletionIndex > -1){
                Point.event.points = [
                    ...Point.event.points.slice(0, deletionIndex),
                    ...Point.event.points.slice(deletionIndex + 1)
                ];
            }
        }
    }
}
