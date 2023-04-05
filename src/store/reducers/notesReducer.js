
const initialState = {
    folders: []
}

const getOtherFolders = (list, folderName) => {
    const restofTheFolder = list?.length > 0
        && list?.filter((item) => item?.folderName !== folderName);
    return restofTheFolder || [];
}
const getSelectedFolder = (list, folderName) => {
    const folder = list.length > 0
        && list?.filter((item, i) => (item.folderName === folderName))[0];
    return folder || {};
}

const notesReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'storeApiResp':
            return {
                folders: action.payload // send payload : response.notes
            }

        case 'createFolder':
            return {
                ...state,
                folders: [
                    ...state.folders,
                    {
                        folderName: action.payload.folderName
                    }
                ]
            }
        case 'createNote':
            const { title, content, favourites, folderName } = action.payload;

            let folders = [...state?.folders]; // copy
            let index;
            let olderNotes = [];

            let newFolderList = folders.length > 0
                && state?.folders?.filter((item) => item?.folderName !== folderName);

            const selectedFolder = folders.length > 0
                && state?.folders?.filter((item, i) => {
                    if (item.folderName === folderName) {
                        index = i;
                        olderNotes = item?.files || [];
                        return item;
                    }
                });
            const files = selectedFolder[0]?.files?.length > 0 ? selectedFolder[0]?.files : [];
            return {
                ...state,
                folders: [
                    ...newFolderList,
                    {
                        ...selectedFolder[0],
                        files: [
                            ...files,
                            { title, content, favourites }
                        ]
                    }
                ]
            }
        case 'updateNote':

            let list = [...state?.folders];

            let restofTheFolder = getOtherFolders(list, action.payload.folderName);

            const folderselected = getSelectedFolder(list, action.payload.folderName);

            const olderfiles = folderselected?.files?.length > 0 && folderselected?.files?.filter((item) => item?._id !== action.payload.id);

            const noteToBeUpdated = folderselected?.files?.length > 0 ? folderselected?.files?.filter((item) => item._id === action.payload.id)[0] : {};
            
            return {
                folders: [
                    ...restofTheFolder,

                    {
                        ...folderselected,
                        files: [
                            ...olderfiles,
                            {
                                ...noteToBeUpdated,
                                content: action.payload.content
                            }
                        ]
                    }
                ]
            }
        case 'deleteNotes':
            let otherFolders = getOtherFolders(state?.folders, action.payload.folderName);

            const selectedFold = getSelectedFolder(state?.folders, action.payload.folderName);
            const filesTobeKept = selectedFold?.files?.length > 0 && selectedFold?.files?.filter((item) => item?._id !== action.payload.id);
            return {
                folders: [
                    ...otherFolders,

                    {
                        ...selectedFold,
                        files: [
                            ...filesTobeKept
                        ]
                    }
                ]
            }
        default:
            return state
    }
}

export default notesReducer;