import { connect } from 'react-redux'
import { setVisibilityFilter } from '../store/actions'
import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.visibilityFilter
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter))
        }
    }
}

// Permite usar el componente de nivel superior connect que va a suscribirse al store de Redux e inyectar dispatch en los props de tus componentes.
// de esta manera no se accede al store desde el componente
const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)

export default FilterLink