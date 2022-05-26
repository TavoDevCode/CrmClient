const TotalPayment = ({ totalPayment }) => {
    return (
        <div className="flex items-center justify-between mt-5 p-3 border">
            <h2 className="text-gray-800 text-md">Total a pagar</h2>
            <p className="text-sm">${totalPayment}</p>
        </div>
    );
};

export default TotalPayment;
