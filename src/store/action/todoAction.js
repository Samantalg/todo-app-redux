export const addTodoFB = (todo) => {
    return (disdispatch, getState, {getFirestore}) => {
        const firestore = getFirestore()
        firestore.collection('todo')
        .add({
            ...todo
        })
        .then(() => {
            console.log('Todo añadida!')
        })
        .catch(err => {
            console.log(err)
        })
    }
}