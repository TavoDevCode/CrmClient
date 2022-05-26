import { useContext } from 'react';
// SELECT
import Select from 'react-select';
// HOOKS
import { useClients } from '../../hooks/client';
// CONTEXT
import OrderContext from '../../context/order/OrderContext';

const AssignClient = () => {
    const { addClient } = useContext(OrderContext);

    const { loading, error, clients } = useClients();

    if (loading) return null;

    return (
        <>
            <label htmlFor="name" className="text-xs sm:text-sm tracking-wide text-gray-600">
                Asignar un cliente al vendedor
            </label>
            <Select
                options={clients}
                // isMulti
                className="my-3"
                onChange={(option) => addClient(option)}
                getOptionValue={(options) => options.id}
                getOptionLabel={(options) => options.name}
                placeholder="Busque o seleccione usuario"
                noOptionsMessage={() => 'Sin opciones'}
            />
        </>
    );
};

export default AssignClient;
