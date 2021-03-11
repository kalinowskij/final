import {createStore} from "vuex";
import period from './modules/period.js'
import axios from "axios";
const store = createStore({
    actions: {
        removePeriod({commit}, period) {
            commit('removePeriod', period);
        },
        uploadCode({commit}, code) {
            commit('uploadCode', JSON.parse(code));
        },
        // saveToLocalStorage({getters}) {
        //     window.localStorage.setItem('code', getters.getCode);
        // },
        saveToServer({getters}) {
                console.log("send")
                console.log( getters.getCode)
                axios.post("http://localhost/data", {code: JSON.stringify(getters.getCode)})
                    .then(response => {
                        console.log('save to server')
                        console.log(response)
                    });
        },
        getFromServer({commit}){
            axios.get("http://localhost/data")
                .then(response => {
                    console.log('get to server')
                    console.log(response.data.data)
                    if(!response.data.data){
                        commit('uploadCode', []);
                    }else{
                        commit('uploadCode', JSON.parse(response.data.data));
                    }

                });
        }
    },
    state: {
        periods: [],
        images: [
            {id: 1, src: "explosion.png", name: "Взрыв"},
            {id: 2, src: "tank.png", name: "Танк"},
            {id: 3, src: "tank2.png", name: "Танк2"},
        ]
    },
    mutations: {
        createPeriod(state, newPeriod) {
            newPeriod.people = [];
            state.periods.push(newPeriod);
        },
        removePeriod(state, period) {
            const deletionIndex = state.periods.findIndex(item => item.id === period.id);
            if (deletionIndex > -1) {
                state.periods = [
                    ...state.periods.slice(0, deletionIndex),
                    ...state.periods.slice(deletionIndex + 1)
                ];
            }
        },
        uploadCode(state, code) {

            // const Flatted = window.Flatted;
            // state.periods = Flatted.parse(code);
            state.periods = code;
        }
    },
    getters: {
        getPeriods(state) {
            return state.periods;
        },
        getPoints(state) {
            let result = {};
            state.periods.forEach(function (period) {
                if (period.people) {
                    period.people.forEach(function (man) {
                        if (man.events) {
                            man.events.forEach(function (event) {
                                if (event.points) {
                                    let points = [];
                                    event.points.forEach(function (point) {
                                        points.push(point);
                                    })
                                    result[event.id] = points;
                                }
                            })
                        }
                    })
                }
            });
            return result;
        },
        getImages(state) {
            return state.images;
        },
        getCode(state) {
            const getCircularReplacer = () => {
                const seen = new WeakSet();
                return (key, value) => {
                    if (typeof value === "object" && value !== null) {
                        if (seen.has(value)) {
                            return;
                        }
                        seen.add(value);
                    }
                    return value;
                };
            };
            return JSON.parse(JSON.stringify(state.periods, getCircularReplacer()));
        }

    },
    modules: {
        period
    }
})

export default store
