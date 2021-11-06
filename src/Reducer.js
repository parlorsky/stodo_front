
const Reducer = (state, action) => {
    switch (action.type) {
        case 'SET_THEME':
            return {
                ...state,
                 theme: !state.theme
            };
        case 'DELETE_TODO':
            console.log('robit')
            return{
                ...state,
                todo: [...state.todo.filter(e => e.name  !== action.payload )]
                };
        case 'SET_TODO':
            return{
                ...state,
                todo: [...state.todo, action.payload]
            };
            case 'EDIT_TODO':
                const taskId = action.payload.id
                const index = state.todo.findIndex(p => p.id === action.payload.id);
            
                return{     
                ...state,
                todo: state.todo.map(p => p.id == taskId ? {...p, name: action.payload.name, description: action.payload.description, deadline: action.payload.deadline, members: action.payload.members}: p )}
        default:
            return state;
    }
};

export default Reducer;