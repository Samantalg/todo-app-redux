export const addTodoFB = (text, id) => {
    return (disdispatch, getState, {getFirestore}) => {
        const firestore = getFirestore()
        const completed = false
        firestore.collection('todo')
        .add({text, id, completed})
        .then(() => {
            console.log('Tarea añadida!')
        })
        .catch(err => {
            console.log(err)
        })
    }
}