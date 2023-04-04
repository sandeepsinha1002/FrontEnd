const initialState = {
    folders: []
}

const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'createFolder':
            return {
                ...state,
                folders: [
                    ...state.folders,
                    {
                        name: action.payload.name
                    }
                ]
            }
        case 'createNote':
            const { title, content, isFavourite, name } = action.payload;

            let folders = [...state?.folders]; // copy
            let index;
            let selectedFolder = folders.length > 0
                && state?.folders?.filter((item, i) => {
                    if (item.name === name) {
                        index = i;
                        return item;
                    }
                });

            folders = folders.splice(index, 1); // remove old folder
            debugger;
            const notes = selectedFolder[0]?.notes?.length > 0 ? selectedFolder[0]?.notes : [];
            return {
                ...state,
                folders: [
                    ...folders,
                    {
                        ...selectedFolder[0],
                        notes: [
                            ...notes,
                            { title, content, isFavourite }
                        ]
                    }
                ]
            }
        case 'updateNotes':
            return state
        case 'deleteNotes':
            return state
        default:
            return state
    }
}

export default notesReducer;